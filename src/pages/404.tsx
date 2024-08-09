import { GetServerSideProps } from 'next/types'

import client from '@/sanity/lib/client'
import siteSettingsQuery from '@/sanity/queries/singletons/siteSettings'

import Page404 from '@/components/pages/Page404'

export async function getStaticProps({}) {
  const siteSettings = await client.fetch(siteSettingsQuery)

  return { props: { siteSettings } }
}

export default Page404
