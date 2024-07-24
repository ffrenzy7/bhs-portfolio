import { groq } from 'next-sanity'

import { PageType } from '@/sanity/types/enums'
import slugQuery from '@/sanity/queries/partials/slug'

const pageTypes = Object.values(PageType).map((type) => `_type == "${type}"`)

export const sitemapQuery = groq`
  *[(${pageTypes.join(' || ').trim()}) && seo.isVisibleInSitemap == true] {
    ${slugQuery('slug', 'slug.current')},
    "lastmod": dateTime(_updatedAt),
  }
`
