import { groq } from 'next-sanity'

const SEOQuery = groq`
  seo {
    isIndexable,
    isVisibleInSitemap,
  }
`

export default SEOQuery
