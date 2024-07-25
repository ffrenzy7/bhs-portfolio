import { groq } from 'next-sanity'

import { PageType } from '@/sanity/types/enums'
import componentsQuery from '@/sanity/queries/partials/componentsQuery'
import defaultFieldsQuery from '@/sanity/queries/partials/defaultFields'
import metadataQuery from '@/sanity/queries/objects/metadata'
import seoQuery from '@/sanity/queries/objects/seo'

const homePageQuery = groq`
  *[_type == "${PageType.Home}"][0] {
    ${defaultFieldsQuery},
    ${metadataQuery},
    ${seoQuery},
    ${componentsQuery},
  }
`

export const homePageProjectsListQuery = groq`
  *[_type == "${PageType.Home}"][0] {
    components[] {
    }
  }
`

export default homePageQuery
