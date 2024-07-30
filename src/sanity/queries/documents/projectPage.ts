import { groq } from 'next-sanity'

import { PageType } from '@/sanity/types/enums'
import defaultFieldsQuery from '@/sanity/queries/partials/defaultFields'
import metadataQuery from '@/sanity/queries/objects/metadata'
import seoQuery from '@/sanity/queries/objects/seo'

const projectPageQuery = groq`
  *[_type == "${PageType.Project}" && slug.current == $slug][0] {
    ${defaultFieldsQuery},

    ${metadataQuery},
    ${seoQuery},
  }
`

export const projectPathsQuery = groq`
  *[_type == "${PageType.Project}" && defined(slug.current)] {
    "params": { "slug": slug.current },
  }
`

export default projectPageQuery
