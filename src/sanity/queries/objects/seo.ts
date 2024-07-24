import { groq } from 'next-sanity'

const SEOQuery = groq`
  seo {
    isIndexable,
    isVisibleInSitemap,
    hasCanonicalLink,
    canonicalLink {
      ...
    },
  }
`

export default SEOQuery
