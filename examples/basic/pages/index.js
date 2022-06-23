import { staticRequest } from 'tinacms'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import { Layout } from '../components/Layout'
import { useTina } from 'tinacms/dist/edit-state'

const query = `{
  page(relativePath: "home.mdx"){
    title
    body
  }
}`

export default function Home(props) {
  const { data } = useTina({
    query,
    variables: {},
    data: props.data,
  })

  const content = data.page.body

  return (
    <>
      <Layout>
        <div className="container">
          <h2>{data.page.title}</h2>
          <TinaMarkdown content={content} />
        </div>
      </Layout>
      <style jsx>{`
        .container {
          padding: 32px;
          flex: 1;
          width: 100%;
        }

        .container :global(h2) {
          position: relative;
          z-index: 10;
          line-height: 1.1;
          font-weight: bold;
          color: var(--blue-700);
          font-weight: 600;
          display: block;
          color: transparent;
          background: linear-gradient(
            to bottom right,
            var(--blue-500),
            var(--blue-550) 15%,
            var(--blue-650) 40%,
            var(--blue-700) 60%,
            var(--blue-750) 70%
          );
          -webkit-background-clip: text;
          background-clip: text;
          font-size: 4.5rem;
        }

        .container :global(p) {
          position: relative;
          z-index: 10;
          line-height: 1.4;
          font-weight: 500;
          display: block;
          color: transparent;
          background: linear-gradient(
            to bottom right,
            var(--blue-500),
            var(--blue-550) 15%,
            var(--blue-600) 40%,
            var(--blue-650) 60%,
            var(--blue-700) 80%
          );
          -webkit-background-clip: text;
          background-clip: text;
          font-size: 2rem;
        }

        .container .component {
          position: relative;
          z-index: 10;
          line-height: 1.1;
          background: linear-gradient(
            to top left,
            var(--blue-750),
            var(--blue-650),
            var(--blue-550)
          );
          border-radius: 10px;
          color: var(--blue-350);
          font-weight: medium;
          padding: 0.625em 0.875em;
          border: 1px solid var(--blue-500);
          box-shadow: inset 0 0 28px -8px var(--blue-350),
            inset -2px -2px 12px -4px var(--blue-450),
            8px 16px 32px -8px var(--blue-550);
          font-size: 1.25em;
          margin: 1.5em 0;
        }
      `}</style>
    </>
  )
}

export const getStaticProps = async () => {
  const variables = {}
  let data = {}
  try {
    data = await staticRequest({
      query,
      variables,
    })
  } catch {
    // swallow errors related to document creation
  }

  return {
    props: {
      query,
      variables,
      data,
      //myOtherProp: 'some-other-data',
    },
  }
}
