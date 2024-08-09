import { GetServerSideProps } from 'next/types'

import client from '@/sanity/lib/client'
import projectPageQuery from '@/sanity/queries/documents/projectPage'
import siteSettingsQuery from '@/sanity/queries/singletons/siteSettings'

import ProjectPage from '@/components/pages/ProjectPage'

import { PROJECT_SUB_DIRECTORY_NAME } from '@/constants'

import type { IProjectPage } from '@/components/pages/ProjectPage/ProjectPageTypes'

export default function Project({ data }: IProjectPage) {
  return <ProjectPage data={data} />
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const queryParams = {
    slug: params?.slug ? `${PROJECT_SUB_DIRECTORY_NAME}/${params?.slug}` : '',
  }

  const data = await client.fetch(projectPageQuery, queryParams)
  const siteSettings = await client.fetch(siteSettingsQuery)

  if (!data) return { notFound: true }

  return {
    props: {
      data,
      siteSettings,
    },
  }
}
