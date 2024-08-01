import { groq } from 'next-sanity'

const aboutQuery = groq`
  about {
    title,
    backTitle,
  }
`

export default aboutQuery
