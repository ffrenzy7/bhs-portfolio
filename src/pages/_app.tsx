import { useRouter } from 'next/router'
import { Poppins } from 'next/font/google'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import Menu from '@/components/ui/Menu'
import BackToTop from '@/components/ui/BackToTop'
import Metadata from '@/components/core/Metadata'
import SEO from '@/components/core/SEO'
import Footer from '@/components/sections/Footer'
import Favicons from '@/components/core/Favicons'

import 'wipe.css'
import '@/styles/styles.scss'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export default function App({ Component, pageProps }: AppProps) {
  const isAdmin = useRouter().pathname.includes('[...admin]')

  const { data, siteSettings } = pageProps || {}

  return isAdmin ? (
    <Component {...pageProps} />
  ) : (
    <>
      <Head>
        <link rel="preconnect" href="https://cdn.sanity.io" />
      </Head>

      <Favicons />

      <Metadata
        pageData={data?.metadata}
        siteData={siteSettings?.metadata}
        slug={data?.slug}
        titlePrefix={siteSettings?.titlePrefix}
      />

      <SEO data={data?.seo} />

      <div className={poppins.className}>
        <Menu menu={siteSettings?.menu} />
        <BackToTop />
        <Component {...pageProps} />
        <Footer social={siteSettings?.social} />
      </div>
    </>
  )
}
