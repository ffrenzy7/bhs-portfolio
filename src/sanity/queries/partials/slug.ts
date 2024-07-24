import { groq } from 'next-sanity'

const slugQuery = (propName: string, slug: string) => groq`
  "${propName}": "/" + ${slug},
  ${slug} == "/" => {
    "${propName}": "/",
  }
`

export default slugQuery
