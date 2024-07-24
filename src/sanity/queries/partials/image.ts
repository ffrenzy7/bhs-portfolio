import { groq } from 'next-sanity'

const imageQuery = (propName: string) => groq`
  ${propName} {
    alt,
    asset,
    "dimensions": asset->metadata.dimensions,
  }
`

export default imageQuery
