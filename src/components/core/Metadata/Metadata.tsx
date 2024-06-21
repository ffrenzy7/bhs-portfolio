import Head from 'next/head'

import { IMetadata } from './MetadataTypes'

const Metadata = ({ title, description, metatags }: IMetadata) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={metatags} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default Metadata
