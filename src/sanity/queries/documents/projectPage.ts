import { groq } from 'next-sanity'

import { PageType } from '@/sanity/types/enums'
import colorQuery from '@/sanity/queries/partials/color'
import componentsQuery from '@/sanity/queries/partials/componentsQuery'
import defaultFieldsQuery from '@/sanity/queries/partials/defaultFields'
import flexiMediaQuery from '@/sanity/queries/objects/flexiMedia'
import metadataQuery from '@/sanity/queries/objects/metadata'
import seoQuery from '@/sanity/queries/objects/seo'

const projectPageQuery = groq`
  *[_type == "${PageType.Project}" && slug.current == $slug][0] {
    ${defaultFieldsQuery},

    year,
    ${colorQuery('primaryColor')},
    ${colorQuery('secondaryColor')},
    ${flexiMediaQuery('media')},

    ${metadataQuery},
    ${seoQuery},

    ${componentsQuery},
  }
`

export const projectPathsQuery = groq`
  *[_type == "${PageType.Project}" && defined(slug.current)] {
    "params": { "slug": slug.current },
  }
`

export default projectPageQuery
