import { GetStaticPaths, GetStaticProps } from 'next'

import ProjectPage from '@/components/pages/ProjectPage'

// const PROJECT_SUB_DIRECTORY_NAME = 'project'

export default function Project({ data }: any) {
  return <ProjectPage data={data} />
}

export const getStaticProps: GetStaticProps = async ({ params, draftMode }) => {
  const data = { slug: params?.slug, title: params?.slug }

  return {
    props: {
      data,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  // const paths = await client.fetch(projectPathsQuery)

  const paths = ['projeto1', 'projeto2', 'projeto3'].map((slug) => ({
    params: { slug },
  }))

  return { paths, fallback: true }
}
