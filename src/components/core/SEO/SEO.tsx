import React from 'react'
import Head from 'next/head'

import type { ISEO } from './SEOTypes'

const SEO = ({ data }: ISEO) => {
  const isIndexable = data?.isIndexable

  if (!isIndexable) {
    return (
      <Head>
        <meta name="robots" content="noindex"></meta>
      </Head>
    )
  }
}

export default SEO
