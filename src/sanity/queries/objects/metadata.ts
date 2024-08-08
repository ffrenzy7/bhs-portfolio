import { groq } from 'next-sanity'

const metadataQuery = groq`
  metadata {
    description,
    title,
    keywords,
    image,
  }
`

export default metadataQuery
