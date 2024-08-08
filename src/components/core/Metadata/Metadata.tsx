import React from 'react'
import Head from 'next/head'

import { urlFor } from '@/sanity/lib/utils'

import type { IMetadata } from './MetadataTypes'

const fallback = {
  title: 'BHS Portfolio',
  description: '',
  thumbnail: '',
  url: 'https://bhs-portfolio.vercel.app',
}

const Metadata = ({ pageData, siteData, titlePrefix = '', slug }: IMetadata) => {
  const title = pageData?.title || siteData?.title || fallback.title
  const prefix = titlePrefix ? `${titlePrefix} ` : ''
  const pageTitle = prefix + title

  const description =
    pageData?.description || siteData?.description || fallback.description

  const keywords = pageData?.keywords || siteData?.keywords

  // const thumbnail =
  //   pageData?.image || siteData?.image
  //     ? urlFor(pageData?.image || siteData?.image).url()
  //     : fallback.thumbnail

  const image = pageData?.image ?? siteData?.image
  const thumbnail = image ? urlFor(image).url() : fallback.thumbnail

  const url = (slug && `${fallback.url}${slug}`) || fallback.url

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />

      <meta name="title" property="og:title" content={pageTitle} />
      <meta name="description" property="og:description" content={description} />
      <meta name="keywords" property="og:keywords" content={keywords} />
      <meta name="image" property="og:image" content={thumbnail} />
      <meta name="type" property="og:type" content="website" />
      <meta name="url" property="og:url" content={url} />

      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={thumbnail} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  )
}

export default Metadata
