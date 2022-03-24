//@ts-nocheck
// DO NOT MODIFY THIS FILE. This file is automatically generated by Tina
import { gql } from 'tinacms'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** References another document, used as a foreign key */
  Reference: any
  JSON: any
}

export type SystemInfo = {
  __typename?: 'SystemInfo'
  filename: Scalars['String']
  basename: Scalars['String']
  breadcrumbs: Array<Scalars['String']>
  path: Scalars['String']
  relativePath: Scalars['String']
  extension: Scalars['String']
  template: Scalars['String']
  collection: Collection
}

export type SystemInfoBreadcrumbsArgs = {
  excludeExtension?: Maybe<Scalars['Boolean']>
}

export type PageInfo = {
  __typename?: 'PageInfo'
  hasPreviousPage: Scalars['Boolean']
  hasNextPage: Scalars['Boolean']
  startCursor: Scalars['String']
  endCursor: Scalars['String']
}

export type Node = {
  id: Scalars['ID']
}

export type Document = {
  sys?: Maybe<SystemInfo>
  id: Scalars['ID']
  form: Scalars['JSON']
  values: Scalars['JSON']
}

/** A relay-compliant pagination connection */
export type Connection = {
  totalCount: Scalars['Float']
}

export type Query = {
  __typename?: 'Query'
  getOptimizedQuery?: Maybe<Scalars['String']>
  getCollection: Collection
  getCollections: Array<Collection>
  node: Node
  getDocument: DocumentNode
  getDocumentList: DocumentConnection
  getDocumentFields: Scalars['JSON']
  getPostDocument: PostDocument
  getPostList: PostConnection
  getAuthorDocument: AuthorDocument
  getAuthorList: AuthorConnection
  getBlockPageDocument: BlockPageDocument
  getBlockPageList: BlockPageConnection
}

export type QueryGetOptimizedQueryArgs = {
  queryString: Scalars['String']
}

export type QueryGetCollectionArgs = {
  collection?: Maybe<Scalars['String']>
}

export type QueryNodeArgs = {
  id?: Maybe<Scalars['String']>
}

export type QueryGetDocumentArgs = {
  collection?: Maybe<Scalars['String']>
  relativePath?: Maybe<Scalars['String']>
}

export type QueryGetDocumentListArgs = {
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Float']>
  last?: Maybe<Scalars['Float']>
}

export type QueryGetPostDocumentArgs = {
  relativePath?: Maybe<Scalars['String']>
}

export type QueryGetPostListArgs = {
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Float']>
  last?: Maybe<Scalars['Float']>
}

export type QueryGetAuthorDocumentArgs = {
  relativePath?: Maybe<Scalars['String']>
}

export type QueryGetAuthorListArgs = {
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Float']>
  last?: Maybe<Scalars['Float']>
}

export type QueryGetBlockPageDocumentArgs = {
  relativePath?: Maybe<Scalars['String']>
}

export type QueryGetBlockPageListArgs = {
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Float']>
  last?: Maybe<Scalars['Float']>
}

export type DocumentConnectionEdges = {
  __typename?: 'DocumentConnectionEdges'
  cursor?: Maybe<Scalars['String']>
  node?: Maybe<DocumentNode>
}

export type DocumentConnection = Connection & {
  __typename?: 'DocumentConnection'
  pageInfo?: Maybe<PageInfo>
  totalCount: Scalars['Float']
  edges?: Maybe<Array<Maybe<DocumentConnectionEdges>>>
}

export type Collection = {
  __typename?: 'Collection'
  name: Scalars['String']
  slug: Scalars['String']
  label?: Maybe<Scalars['String']>
  path: Scalars['String']
  format?: Maybe<Scalars['String']>
  matches?: Maybe<Scalars['String']>
  templates?: Maybe<Array<Maybe<Scalars['JSON']>>>
  fields?: Maybe<Array<Maybe<Scalars['JSON']>>>
  documents: DocumentConnection
}

export type CollectionDocumentsArgs = {
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Float']>
  last?: Maybe<Scalars['Float']>
}

export type DocumentNode = PostDocument | AuthorDocument | BlockPageDocument

export type PostAuthorDocument = AuthorDocument

export type Post = {
  __typename?: 'Post'
  title?: Maybe<Scalars['String']>
  author?: Maybe<PostAuthorDocument>
  tags?: Maybe<Array<Maybe<Scalars['String']>>>
  categories?: Maybe<Array<Maybe<Scalars['String']>>>
  published?: Maybe<Scalars['String']>
  featured?: Maybe<Scalars['Boolean']>
  body?: Maybe<Scalars['JSON']>
}

export type PostDocument = Node &
  Document & {
    __typename?: 'PostDocument'
    id: Scalars['ID']
    sys: SystemInfo
    data: Post
    form: Scalars['JSON']
    values: Scalars['JSON']
    dataJSON: Scalars['JSON']
  }

export type PostConnectionEdges = {
  __typename?: 'PostConnectionEdges'
  cursor?: Maybe<Scalars['String']>
  node?: Maybe<PostDocument>
}

export type PostConnection = Connection & {
  __typename?: 'PostConnection'
  pageInfo?: Maybe<PageInfo>
  totalCount: Scalars['Float']
  edges?: Maybe<Array<Maybe<PostConnectionEdges>>>
}

export type AuthorSocial = {
  __typename?: 'AuthorSocial'
  platform?: Maybe<Scalars['String']>
  handle?: Maybe<Scalars['String']>
}

export type Author = {
  __typename?: 'Author'
  name?: Maybe<Scalars['String']>
  social?: Maybe<Array<Maybe<AuthorSocial>>>
  bio?: Maybe<Scalars['JSON']>
}

export type AuthorDocument = Node &
  Document & {
    __typename?: 'AuthorDocument'
    id: Scalars['ID']
    sys: SystemInfo
    data: Author
    form: Scalars['JSON']
    values: Scalars['JSON']
    dataJSON: Scalars['JSON']
  }

export type AuthorConnectionEdges = {
  __typename?: 'AuthorConnectionEdges'
  cursor?: Maybe<Scalars['String']>
  node?: Maybe<AuthorDocument>
}

export type AuthorConnection = Connection & {
  __typename?: 'AuthorConnection'
  pageInfo?: Maybe<PageInfo>
  totalCount: Scalars['Float']
  edges?: Maybe<Array<Maybe<AuthorConnectionEdges>>>
}

export type BlockPageBlocksHero = {
  __typename?: 'BlockPageBlocksHero'
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
}

export type BlockPageBlocksBlockQuoteAuthorDocument = AuthorDocument

export type BlockPageBlocksBlockQuote = {
  __typename?: 'BlockPageBlocksBlockQuote'
  message?: Maybe<Scalars['JSON']>
  author?: Maybe<BlockPageBlocksBlockQuoteAuthorDocument>
}

export type BlockPageBlocksFeaturedPostsBlogsItemDocument = PostDocument

export type BlockPageBlocksFeaturedPostsBlogs = {
  __typename?: 'BlockPageBlocksFeaturedPostsBlogs'
  item?: Maybe<BlockPageBlocksFeaturedPostsBlogsItemDocument>
}

export type BlockPageBlocksFeaturedPosts = {
  __typename?: 'BlockPageBlocksFeaturedPosts'
  header?: Maybe<Scalars['String']>
  blogs?: Maybe<Array<Maybe<BlockPageBlocksFeaturedPostsBlogs>>>
}

export type BlockPageBlocksFeatureListItems = {
  __typename?: 'BlockPageBlocksFeatureListItems'
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
}

export type BlockPageBlocksFeatureList = {
  __typename?: 'BlockPageBlocksFeatureList'
  title?: Maybe<Scalars['String']>
  items?: Maybe<Array<Maybe<BlockPageBlocksFeatureListItems>>>
}

export type BlockPageBlocksSlideshowItems = {
  __typename?: 'BlockPageBlocksSlideshowItems'
  title?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
}

export type BlockPageBlocksSlideshow = {
  __typename?: 'BlockPageBlocksSlideshow'
  title?: Maybe<Scalars['String']>
  items?: Maybe<Array<Maybe<BlockPageBlocksSlideshowItems>>>
}

export type BlockPageBlocks =
  | BlockPageBlocksHero
  | BlockPageBlocksBlockQuote
  | BlockPageBlocksFeaturedPosts
  | BlockPageBlocksFeatureList
  | BlockPageBlocksSlideshow

export type BlockPage = {
  __typename?: 'BlockPage'
  title?: Maybe<Scalars['String']>
  blocks?: Maybe<Array<Maybe<BlockPageBlocks>>>
}

export type BlockPageDocument = Node &
  Document & {
    __typename?: 'BlockPageDocument'
    id: Scalars['ID']
    sys: SystemInfo
    data: BlockPage
    form: Scalars['JSON']
    values: Scalars['JSON']
    dataJSON: Scalars['JSON']
  }

export type BlockPageConnectionEdges = {
  __typename?: 'BlockPageConnectionEdges'
  cursor?: Maybe<Scalars['String']>
  node?: Maybe<BlockPageDocument>
}

export type BlockPageConnection = Connection & {
  __typename?: 'BlockPageConnection'
  pageInfo?: Maybe<PageInfo>
  totalCount: Scalars['Float']
  edges?: Maybe<Array<Maybe<BlockPageConnectionEdges>>>
}

export type Mutation = {
  __typename?: 'Mutation'
  addPendingDocument: DocumentNode
  updateDocument: DocumentNode
  createDocument: DocumentNode
  updatePostDocument: PostDocument
  createPostDocument: PostDocument
  updateAuthorDocument: AuthorDocument
  createAuthorDocument: AuthorDocument
  updateBlockPageDocument: BlockPageDocument
  createBlockPageDocument: BlockPageDocument
}

export type MutationAddPendingDocumentArgs = {
  collection: Scalars['String']
  relativePath: Scalars['String']
  template?: Maybe<Scalars['String']>
}

export type MutationUpdateDocumentArgs = {
  collection?: Maybe<Scalars['String']>
  relativePath: Scalars['String']
  params: DocumentMutation
}

export type MutationCreateDocumentArgs = {
  collection?: Maybe<Scalars['String']>
  relativePath: Scalars['String']
  params: DocumentMutation
}

export type MutationUpdatePostDocumentArgs = {
  relativePath: Scalars['String']
  params: PostMutation
}

export type MutationCreatePostDocumentArgs = {
  relativePath: Scalars['String']
  params: PostMutation
}

export type MutationUpdateAuthorDocumentArgs = {
  relativePath: Scalars['String']
  params: AuthorMutation
}

export type MutationCreateAuthorDocumentArgs = {
  relativePath: Scalars['String']
  params: AuthorMutation
}

export type MutationUpdateBlockPageDocumentArgs = {
  relativePath: Scalars['String']
  params: BlockPageMutation
}

export type MutationCreateBlockPageDocumentArgs = {
  relativePath: Scalars['String']
  params: BlockPageMutation
}

export type DocumentMutation = {
  post?: Maybe<PostMutation>
  author?: Maybe<AuthorMutation>
  blockPage?: Maybe<BlockPageMutation>
}

export type PostMutation = {
  title?: Maybe<Scalars['String']>
  author?: Maybe<Scalars['String']>
  tags?: Maybe<Array<Maybe<Scalars['String']>>>
  categories?: Maybe<Array<Maybe<Scalars['String']>>>
  published?: Maybe<Scalars['String']>
  featured?: Maybe<Scalars['Boolean']>
  body?: Maybe<Scalars['JSON']>
}

export type AuthorSocialMutation = {
  platform?: Maybe<Scalars['String']>
  handle?: Maybe<Scalars['String']>
}

export type AuthorMutation = {
  name?: Maybe<Scalars['String']>
  social?: Maybe<Array<Maybe<AuthorSocialMutation>>>
  bio?: Maybe<Scalars['JSON']>
}

export type BlockPageBlocksHeroMutation = {
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
}

export type BlockPageBlocksBlockQuoteMutation = {
  message?: Maybe<Scalars['JSON']>
  author?: Maybe<Scalars['String']>
}

export type BlockPageBlocksFeaturedPostsBlogsMutation = {
  item?: Maybe<Scalars['String']>
}

export type BlockPageBlocksFeaturedPostsMutation = {
  header?: Maybe<Scalars['String']>
  blogs?: Maybe<Array<Maybe<BlockPageBlocksFeaturedPostsBlogsMutation>>>
}

export type BlockPageBlocksFeatureListItemsMutation = {
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
}

export type BlockPageBlocksFeatureListMutation = {
  title?: Maybe<Scalars['String']>
  items?: Maybe<Array<Maybe<BlockPageBlocksFeatureListItemsMutation>>>
}

export type BlockPageBlocksSlideshowItemsMutation = {
  title?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
}

export type BlockPageBlocksSlideshowMutation = {
  title?: Maybe<Scalars['String']>
  items?: Maybe<Array<Maybe<BlockPageBlocksSlideshowItemsMutation>>>
}

export type BlockPageBlocksMutation = {
  hero?: Maybe<BlockPageBlocksHeroMutation>
  blockQuote?: Maybe<BlockPageBlocksBlockQuoteMutation>
  featuredPosts?: Maybe<BlockPageBlocksFeaturedPostsMutation>
  featureList?: Maybe<BlockPageBlocksFeatureListMutation>
  slideshow?: Maybe<BlockPageBlocksSlideshowMutation>
}

export type BlockPageMutation = {
  title?: Maybe<Scalars['String']>
  blocks?: Maybe<Array<Maybe<BlockPageBlocksMutation>>>
}

export type PostPartsFragment = {
  __typename?: 'Post'
  title?: Maybe<string>
  tags?: Maybe<Array<Maybe<string>>>
  categories?: Maybe<Array<Maybe<string>>>
  published?: Maybe<string>
  featured?: Maybe<boolean>
  body?: Maybe<any>
  author?: Maybe<{ __typename?: 'AuthorDocument'; id: string }>
}

export type AuthorPartsFragment = {
  __typename?: 'Author'
  name?: Maybe<string>
  bio?: Maybe<any>
  social?: Maybe<
    Array<
      Maybe<{
        __typename: 'AuthorSocial'
        platform?: Maybe<string>
        handle?: Maybe<string>
      }>
    >
  >
}

export type BlockPagePartsFragment = {
  __typename?: 'BlockPage'
  title?: Maybe<string>
  blocks?: Maybe<
    Array<
      Maybe<
        | {
            __typename: 'BlockPageBlocksHero'
            title?: Maybe<string>
            description?: Maybe<string>
          }
        | {
            __typename: 'BlockPageBlocksBlockQuote'
            message?: Maybe<any>
            author?: Maybe<{ __typename?: 'AuthorDocument'; id: string }>
          }
        | {
            __typename: 'BlockPageBlocksFeaturedPosts'
            header?: Maybe<string>
            blogs?: Maybe<
              Array<
                Maybe<{
                  __typename: 'BlockPageBlocksFeaturedPostsBlogs'
                  item?: Maybe<{ __typename?: 'PostDocument'; id: string }>
                }>
              >
            >
          }
        | {
            __typename: 'BlockPageBlocksFeatureList'
            title?: Maybe<string>
            items?: Maybe<
              Array<
                Maybe<{
                  __typename: 'BlockPageBlocksFeatureListItems'
                  title?: Maybe<string>
                  description?: Maybe<string>
                }>
              >
            >
          }
        | {
            __typename: 'BlockPageBlocksSlideshow'
            title?: Maybe<string>
            items?: Maybe<
              Array<
                Maybe<{
                  __typename: 'BlockPageBlocksSlideshowItems'
                  title?: Maybe<string>
                  url?: Maybe<string>
                }>
              >
            >
          }
      >
    >
  >
}

export type GetPostDocumentQueryVariables = Exact<{
  relativePath: Scalars['String']
}>

export type GetPostDocumentQuery = {
  __typename?: 'Query'
  getPostDocument: {
    __typename?: 'PostDocument'
    id: string
    sys: {
      __typename?: 'SystemInfo'
      filename: string
      basename: string
      breadcrumbs: Array<string>
      path: string
      relativePath: string
      extension: string
    }
    data: {
      __typename?: 'Post'
      title?: Maybe<string>
      tags?: Maybe<Array<Maybe<string>>>
      categories?: Maybe<Array<Maybe<string>>>
      published?: Maybe<string>
      featured?: Maybe<boolean>
      body?: Maybe<any>
      author?: Maybe<{ __typename?: 'AuthorDocument'; id: string }>
    }
  }
}

export type GetPostListQueryVariables = Exact<{ [key: string]: never }>

export type GetPostListQuery = {
  __typename?: 'Query'
  getPostList: {
    __typename?: 'PostConnection'
    totalCount: number
    edges?: Maybe<
      Array<
        Maybe<{
          __typename?: 'PostConnectionEdges'
          node?: Maybe<{
            __typename?: 'PostDocument'
            id: string
            sys: {
              __typename?: 'SystemInfo'
              filename: string
              basename: string
              breadcrumbs: Array<string>
              path: string
              relativePath: string
              extension: string
            }
            data: {
              __typename?: 'Post'
              title?: Maybe<string>
              tags?: Maybe<Array<Maybe<string>>>
              categories?: Maybe<Array<Maybe<string>>>
              published?: Maybe<string>
              featured?: Maybe<boolean>
              body?: Maybe<any>
              author?: Maybe<{ __typename?: 'AuthorDocument'; id: string }>
            }
          }>
        }>
      >
    >
  }
}

export type GetAuthorDocumentQueryVariables = Exact<{
  relativePath: Scalars['String']
}>

export type GetAuthorDocumentQuery = {
  __typename?: 'Query'
  getAuthorDocument: {
    __typename?: 'AuthorDocument'
    id: string
    sys: {
      __typename?: 'SystemInfo'
      filename: string
      basename: string
      breadcrumbs: Array<string>
      path: string
      relativePath: string
      extension: string
    }
    data: {
      __typename?: 'Author'
      name?: Maybe<string>
      bio?: Maybe<any>
      social?: Maybe<
        Array<
          Maybe<{
            __typename: 'AuthorSocial'
            platform?: Maybe<string>
            handle?: Maybe<string>
          }>
        >
      >
    }
  }
}

export type GetAuthorListQueryVariables = Exact<{ [key: string]: never }>

export type GetAuthorListQuery = {
  __typename?: 'Query'
  getAuthorList: {
    __typename?: 'AuthorConnection'
    totalCount: number
    edges?: Maybe<
      Array<
        Maybe<{
          __typename?: 'AuthorConnectionEdges'
          node?: Maybe<{
            __typename?: 'AuthorDocument'
            id: string
            sys: {
              __typename?: 'SystemInfo'
              filename: string
              basename: string
              breadcrumbs: Array<string>
              path: string
              relativePath: string
              extension: string
            }
            data: {
              __typename?: 'Author'
              name?: Maybe<string>
              bio?: Maybe<any>
              social?: Maybe<
                Array<
                  Maybe<{
                    __typename: 'AuthorSocial'
                    platform?: Maybe<string>
                    handle?: Maybe<string>
                  }>
                >
              >
            }
          }>
        }>
      >
    >
  }
}

export type GetBlockPageDocumentQueryVariables = Exact<{
  relativePath: Scalars['String']
}>

export type GetBlockPageDocumentQuery = {
  __typename?: 'Query'
  getBlockPageDocument: {
    __typename?: 'BlockPageDocument'
    id: string
    sys: {
      __typename?: 'SystemInfo'
      filename: string
      basename: string
      breadcrumbs: Array<string>
      path: string
      relativePath: string
      extension: string
    }
    data: {
      __typename?: 'BlockPage'
      title?: Maybe<string>
      blocks?: Maybe<
        Array<
          Maybe<
            | {
                __typename: 'BlockPageBlocksHero'
                title?: Maybe<string>
                description?: Maybe<string>
              }
            | {
                __typename: 'BlockPageBlocksBlockQuote'
                message?: Maybe<any>
                author?: Maybe<{ __typename?: 'AuthorDocument'; id: string }>
              }
            | {
                __typename: 'BlockPageBlocksFeaturedPosts'
                header?: Maybe<string>
                blogs?: Maybe<
                  Array<
                    Maybe<{
                      __typename: 'BlockPageBlocksFeaturedPostsBlogs'
                      item?: Maybe<{ __typename?: 'PostDocument'; id: string }>
                    }>
                  >
                >
              }
            | {
                __typename: 'BlockPageBlocksFeatureList'
                title?: Maybe<string>
                items?: Maybe<
                  Array<
                    Maybe<{
                      __typename: 'BlockPageBlocksFeatureListItems'
                      title?: Maybe<string>
                      description?: Maybe<string>
                    }>
                  >
                >
              }
            | {
                __typename: 'BlockPageBlocksSlideshow'
                title?: Maybe<string>
                items?: Maybe<
                  Array<
                    Maybe<{
                      __typename: 'BlockPageBlocksSlideshowItems'
                      title?: Maybe<string>
                      url?: Maybe<string>
                    }>
                  >
                >
              }
          >
        >
      >
    }
  }
}

export type GetBlockPageListQueryVariables = Exact<{ [key: string]: never }>

export type GetBlockPageListQuery = {
  __typename?: 'Query'
  getBlockPageList: {
    __typename?: 'BlockPageConnection'
    totalCount: number
    edges?: Maybe<
      Array<
        Maybe<{
          __typename?: 'BlockPageConnectionEdges'
          node?: Maybe<{
            __typename?: 'BlockPageDocument'
            id: string
            sys: {
              __typename?: 'SystemInfo'
              filename: string
              basename: string
              breadcrumbs: Array<string>
              path: string
              relativePath: string
              extension: string
            }
            data: {
              __typename?: 'BlockPage'
              title?: Maybe<string>
              blocks?: Maybe<
                Array<
                  Maybe<
                    | {
                        __typename: 'BlockPageBlocksHero'
                        title?: Maybe<string>
                        description?: Maybe<string>
                      }
                    | {
                        __typename: 'BlockPageBlocksBlockQuote'
                        message?: Maybe<any>
                        author?: Maybe<{
                          __typename?: 'AuthorDocument'
                          id: string
                        }>
                      }
                    | {
                        __typename: 'BlockPageBlocksFeaturedPosts'
                        header?: Maybe<string>
                        blogs?: Maybe<
                          Array<
                            Maybe<{
                              __typename: 'BlockPageBlocksFeaturedPostsBlogs'
                              item?: Maybe<{
                                __typename?: 'PostDocument'
                                id: string
                              }>
                            }>
                          >
                        >
                      }
                    | {
                        __typename: 'BlockPageBlocksFeatureList'
                        title?: Maybe<string>
                        items?: Maybe<
                          Array<
                            Maybe<{
                              __typename: 'BlockPageBlocksFeatureListItems'
                              title?: Maybe<string>
                              description?: Maybe<string>
                            }>
                          >
                        >
                      }
                    | {
                        __typename: 'BlockPageBlocksSlideshow'
                        title?: Maybe<string>
                        items?: Maybe<
                          Array<
                            Maybe<{
                              __typename: 'BlockPageBlocksSlideshowItems'
                              title?: Maybe<string>
                              url?: Maybe<string>
                            }>
                          >
                        >
                      }
                  >
                >
              >
            }
          }>
        }>
      >
    >
  }
}

export const PostPartsFragmentDoc = gql`
  fragment PostParts on Post {
    title
    author {
      ... on Document {
        id
      }
    }
    tags
    categories
    published
    featured
    body
  }
`
export const AuthorPartsFragmentDoc = gql`
  fragment AuthorParts on Author {
    name
    social {
      __typename
      platform
      handle
    }
    bio
  }
`
export const BlockPagePartsFragmentDoc = gql`
  fragment BlockPageParts on BlockPage {
    title
    blocks {
      __typename
      ... on BlockPageBlocksHero {
        title
        description
      }
      ... on BlockPageBlocksBlockQuote {
        message
        author {
          ... on Document {
            id
          }
        }
      }
      ... on BlockPageBlocksFeaturedPosts {
        header
        blogs {
          __typename
          item {
            ... on Document {
              id
            }
          }
        }
      }
      ... on BlockPageBlocksFeatureList {
        title
        items {
          __typename
          title
          description
        }
      }
      ... on BlockPageBlocksSlideshow {
        title
        items {
          __typename
          title
          url
        }
      }
    }
  }
`
export const GetPostDocumentDocument = gql`
  query getPostDocument($relativePath: String!) {
    getPostDocument(relativePath: $relativePath) {
      sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
      data {
        ...PostParts
      }
    }
  }
  ${PostPartsFragmentDoc}
`
export const GetPostListDocument = gql`
  query getPostList {
    getPostList {
      totalCount
      edges {
        node {
          id
          sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          data {
            ...PostParts
          }
        }
      }
    }
  }
  ${PostPartsFragmentDoc}
`
export const GetAuthorDocumentDocument = gql`
  query getAuthorDocument($relativePath: String!) {
    getAuthorDocument(relativePath: $relativePath) {
      sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
      data {
        ...AuthorParts
      }
    }
  }
  ${AuthorPartsFragmentDoc}
`
export const GetAuthorListDocument = gql`
  query getAuthorList {
    getAuthorList {
      totalCount
      edges {
        node {
          id
          sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          data {
            ...AuthorParts
          }
        }
      }
    }
  }
  ${AuthorPartsFragmentDoc}
`
export const GetBlockPageDocumentDocument = gql`
  query getBlockPageDocument($relativePath: String!) {
    getBlockPageDocument(relativePath: $relativePath) {
      sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
      data {
        ...BlockPageParts
      }
    }
  }
  ${BlockPagePartsFragmentDoc}
`
export const GetBlockPageListDocument = gql`
  query getBlockPageList {
    getBlockPageList {
      totalCount
      edges {
        node {
          id
          sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          data {
            ...BlockPageParts
          }
        }
      }
    }
  }
  ${BlockPagePartsFragmentDoc}
`
export type Requester<C = {}> = <R, V>(
  doc: DocumentNode,
  vars?: V,
  options?: C
) => Promise<R>
export function getSdk<C>(requester: Requester<C>) {
  return {
    getPostDocument(
      variables: GetPostDocumentQueryVariables,
      options?: C
    ): Promise<{
      data: GetPostDocumentQuery
      variables: GetPostDocumentQueryVariables
      query: string
    }> {
      return requester<
        {
          data: GetPostDocumentQuery
          variables: GetPostDocumentQueryVariables
          query: string
        },
        GetPostDocumentQueryVariables
      >(GetPostDocumentDocument, variables, options)
    },
    getPostList(
      variables?: GetPostListQueryVariables,
      options?: C
    ): Promise<{
      data: GetPostListQuery
      variables: GetPostListQueryVariables
      query: string
    }> {
      return requester<
        {
          data: GetPostListQuery
          variables: GetPostListQueryVariables
          query: string
        },
        GetPostListQueryVariables
      >(GetPostListDocument, variables, options)
    },
    getAuthorDocument(
      variables: GetAuthorDocumentQueryVariables,
      options?: C
    ): Promise<{
      data: GetAuthorDocumentQuery
      variables: GetAuthorDocumentQueryVariables
      query: string
    }> {
      return requester<
        {
          data: GetAuthorDocumentQuery
          variables: GetAuthorDocumentQueryVariables
          query: string
        },
        GetAuthorDocumentQueryVariables
      >(GetAuthorDocumentDocument, variables, options)
    },
    getAuthorList(
      variables?: GetAuthorListQueryVariables,
      options?: C
    ): Promise<{
      data: GetAuthorListQuery
      variables: GetAuthorListQueryVariables
      query: string
    }> {
      return requester<
        {
          data: GetAuthorListQuery
          variables: GetAuthorListQueryVariables
          query: string
        },
        GetAuthorListQueryVariables
      >(GetAuthorListDocument, variables, options)
    },
    getBlockPageDocument(
      variables: GetBlockPageDocumentQueryVariables,
      options?: C
    ): Promise<{
      data: GetBlockPageDocumentQuery
      variables: GetBlockPageDocumentQueryVariables
      query: string
    }> {
      return requester<
        {
          data: GetBlockPageDocumentQuery
          variables: GetBlockPageDocumentQueryVariables
          query: string
        },
        GetBlockPageDocumentQueryVariables
      >(GetBlockPageDocumentDocument, variables, options)
    },
    getBlockPageList(
      variables?: GetBlockPageListQueryVariables,
      options?: C
    ): Promise<{
      data: GetBlockPageListQuery
      variables: GetBlockPageListQueryVariables
      query: string
    }> {
      return requester<
        {
          data: GetBlockPageListQuery
          variables: GetBlockPageListQueryVariables
          query: string
        },
        GetBlockPageListQueryVariables
      >(GetBlockPageListDocument, variables, options)
    },
  }
}
export type Sdk = ReturnType<typeof getSdk>

// TinaSDK generated code
import { staticRequest } from 'tinacms'
const requester: (doc: any, vars?: any, options?: any) => Promise<any> = async (
  doc,
  vars,
  _options
) => {
  let data = {}
  try {
    data = await staticRequest({
      query: doc,
      variables: vars,
    })
  } catch (e) {
    // swallow errors related to document creation
    console.warn('Warning: There was an error when fetching data')
    console.warn(e)
  }

  return { data, query: doc, variables: vars || {} }
}

/**
 * @experimental this class can be used but may change in the future
 **/
export const ExperimentalGetTinaClient = () => getSdk(requester)
