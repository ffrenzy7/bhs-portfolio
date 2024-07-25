import React from 'react'
import Head from 'next/head'

import { HOST_URL } from '@/sanity/lib/constants'

import type { ISEO } from './SEOTypes'

const SEO = ({ data }: ISEO) => {
  const isIndexable = data?.isIndexable
  const hasCanonicalLink = data?.hasCanonicalLink
  const canonicalLink = data?.canonicalLink

  if (!isIndexable && !hasCanonicalLink) return null

  if (!isIndexable) {
    return (
      <Head>
        <meta name="robots" content="noindex"></meta>
      </Head>
    )
  }

  if (hasCanonicalLink) {
    return (
      <Head>
        {/* eslint-disable-next-line react/no-string-refs */}
        <link
          rel="canonical"
          href={
            canonicalLink?.type === 'internal'
              ? HOST_URL + canonicalLink?.url
              : canonicalLink?.url
          }
        />
      </Head>
    )
  }
}

export default SEO
