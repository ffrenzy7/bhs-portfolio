import { GetStaticProps, GetStaticPropsContext } from 'next/types'

import client from '@/sanity/lib/client'
import siteSettingsQuery from '@/sanity/queries/singletons/siteSettings'
import homePageQuery from '@/sanity/queries/singletons/homePage'

import HomePage from '@/components/pages/HomePage'

import type { IHomePage } from '@/components/pages/HomePage/HomePageTypes'

const Home = ({ data, social }: IHomePage) => {
  return <HomePage data={data} social={social} />
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const data = await client.fetch(homePageQuery)
  const siteSettings = await client.fetch(siteSettingsQuery)

  return {
    props: {
      data,
      social: siteSettings?.social,
      siteSettings,
    },
  }
}

export default Home
