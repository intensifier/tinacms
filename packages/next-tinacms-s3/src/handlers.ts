/**

*/

import {
  _Object,
  S3Client,
  S3ClientConfig,
  ListObjectsCommand,
  ListObjectsCommandInput,
  PutObjectCommand,
  PutObjectCommandInput,
  DeleteObjectCommand,
  DeleteObjectCommandInput,
} from '@aws-sdk/client-s3'
import { Media, MediaListOptions } from '@tinacms/toolkit'
import path from 'path'
import fs from 'fs'
import { NextApiRequest, NextApiResponse } from 'next'
import multer from 'multer'
import { promisify } from 'util'

export interface S3Config {
  config: S3ClientConfig
  bucket: string
  authorized: (_req: NextApiRequest, _res: NextApiResponse) => Promise<boolean>
}

export interface S3Options {
  cdnUrl?: string
}

export const mediaHandlerConfig = {
  api: {
    bodyParser: false,
  },
}

export const createMediaHandler = (config: S3Config, options?: S3Options) => {
  const client = new S3Client(config.config)
  const bucket = config.bucket
  const region = config.config.region || 'us-east-1'
  const endpoint =
    config.config.endpoint || `https://s3.${region}.amazonaws.com`
  let cdnUrl =
    options?.cdnUrl ||
    endpoint.toString().replace(/http(s|):\/\//i, `https://${bucket}.`)
  cdnUrl = cdnUrl + (cdnUrl.endsWith('/') ? '' : '/')

  return async (req: NextApiRequest, res: NextApiResponse) => {
    const isAuthorized = await config.authorized(req, res)
    // make sure the user is authorized to upload
    if (!isAuthorized) {
      res.status(401).json({ message: 'sorry this user is unauthorized' })
      return
    }
    switch (req.method) {
      case 'GET':
        return listMedia(req, res, client, bucket, cdnUrl)
      case 'POST':
        return uploadMedia(req, res, client, bucket, cdnUrl)
      case 'DELETE':
        return deleteAsset(req, res, client, bucket)
      default:
        res.end(404)
    }
  }
}

async function uploadMedia(
  req: NextApiRequest,
  res: NextApiResponse,
  client: S3Client,
  bucket: string,
  cdnUrl: string
) {
  try {
    const upload = promisify(
      multer({
        storage: multer.diskStorage({
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          directory: (req, file, cb) => {
            cb(null, '/tmp')
          },
          filename: (req, file, cb) => {
            cb(null, file.originalname)
          },
        }),
      }).single('file')
    )
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    await upload(req, res)

    const { directory } = req.body
    let prefix = directory.replace(/^\//, '').replace(/\/$/, '')
    if (prefix) prefix = prefix + '/'

    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    const filePath = req.file.path
    const blob = fs.readFileSync(filePath)
    const filename = path.basename(filePath)
    const params: PutObjectCommandInput = {
      Bucket: bucket,
      Key: prefix + filename,
      Body: blob,
      ACL: 'public-read',
    }
    const command = new PutObjectCommand(params)
    try {
      await client.send(command)
      const src = cdnUrl + prefix + filename
      res.json({
        type: 'file',
        id: prefix + filename,
        filename,
        directory: prefix,
        thumbnails: {
          '75x75': src,
          '400x400': src,
          '1000x1000': src,
        },
        src,
      })
    } catch (e) {
      console.error('Error uploading media to s3')
      console.error(e)
      res.status(500).send(findErrorMessage(e))
    }
  } catch (e) {
    console.error('Error uploading media')
    console.error(e)
    res.status(500)
    const message = findErrorMessage(e)
    res.json({ e: message })
  }
}

async function listMedia(
  req: NextApiRequest,
  res: NextApiResponse,
  client: S3Client,
  bucket: string,
  cdnUrl: string
) {
  try {
    const {
      directory = '',
      limit = 500,
      offset,
    } = req.query as MediaListOptions

    let prefix = directory.replace(/^\//, '').replace(/\/$/, '')
    if (prefix) prefix = prefix + '/'

    const params: ListObjectsCommandInput = {
      Bucket: bucket,
      Delimiter: '/',
      Prefix: prefix,
      Marker: offset?.toString(),
      MaxKeys: directory && !offset ? +limit + 1 : +limit,
    }

    const command = new ListObjectsCommand(params)

    const response = await client.send(command)

    const items = []

    response.CommonPrefixes?.forEach(({ Prefix }) =>
      items.push({
        id: Prefix,
        type: 'dir',
        filename: path.basename(Prefix),
        directory: path.dirname(Prefix),
      })
    )

    items.push(
      ...(response.Contents || [])
        .filter((file) => file.Key !== prefix)
        .map(getS3ToTinaFunc(cdnUrl))
    )

    res.json({
      items,
      offset: response.NextMarker,
    })
  } catch (e) {
    // Show the error to the user
    console.error('Error listing media')
    console.error(e)
    res.status(500)
    const message = findErrorMessage(e)
    res.json({ e: message })
  }
}

/**
 * we're getting inconsistent errors in this try-catch
 * sometimes we just get a string, sometimes we get the whole response.
 * I suspect this is coming from S3 SDK so let's just try to
 * normalize it into a string here.
 */
const findErrorMessage = (e: any) => {
  if (typeof e == 'string') return e
  if (e.message) return e.message
  if (e.error && e.error.message) return e.error.message
  return 'an error occurred'
}

async function deleteAsset(
  req: NextApiRequest,
  res: NextApiResponse,
  client: S3Client,
  bucket: string
) {
  const { media } = req.query
  const [, objectKey] = media as string[]

  const params: DeleteObjectCommandInput = {
    Bucket: bucket,
    Key: objectKey,
  }
  const command = new DeleteObjectCommand(params)
  try {
    const data = await client.send(command)
    res.json(data)
  } catch (e) {
    console.error('Error deleting media')
    console.error(e)
    res.status(500)
    const message = findErrorMessage(e)
    res.json({ e: message })
  }
}

function getS3ToTinaFunc(cdnUrl) {
  return function s3ToTina(file: _Object): Media {
    const filename = path.basename(file.Key)
    const directory = path.dirname(file.Key) + '/'

    const src = cdnUrl + file.Key
    return {
      id: file.Key,
      filename,
      directory,
      src: src,
      thumbnails: {
        '75x75': src,
        '400x400': src,
        '1000x1000': src,
      },
      type: 'file',
    }
  }
}
