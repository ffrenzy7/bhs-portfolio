import { groq } from 'next-sanity'

const metadataQuery = groq`
  metadata {
    description,
    title,
    image,
  }
`

export default metadataQuery
