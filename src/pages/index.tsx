import { GetStaticProps, GetStaticPropsContext } from 'next/types'

import client from '@/sanity/lib/client'
import siteSettingsQuery from '@/sanity/queries/singletons/siteSettings'
import homePageQuery from '@/sanity/queries/singletons/homePage'

import HomePage from '@/components/pages/HomePage'

import type { IHomePage } from '@/components/pages/HomePage/HomePageTypes'

const Home = ({ data }: IHomePage) => {
  return <HomePage data={data} />
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const data = await client.fetch(homePageQuery)
  const siteSettings = await client.fetch(siteSettingsQuery)

  return {
    props: {
      data,
      siteSettings,
    },
  }
}

export default Home
