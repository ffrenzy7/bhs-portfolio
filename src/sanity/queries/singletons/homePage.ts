import { groq } from 'next-sanity'

import { PageType } from '@/sanity/types/enums'
import defaultFieldsQuery from '@/sanity/queries/partials/defaultFields'
import metadataQuery from '@/sanity/queries/objects/metadata'
import seoQuery from '@/sanity/queries/objects/seo'
import portfolioQuery from '@/sanity/queries/objects/portfolio'
import aboutQuery from '@/sanity/queries/objects/about'

const homePageQuery = groq`
  *[_type == "${PageType.Home}"][0] {
    ${defaultFieldsQuery},
    homeHero {
      firstName,
      lastName,
      roles[],
      scrollDown,
    },
    ${portfolioQuery},
    ${aboutQuery},
    ${metadataQuery},
    ${seoQuery},
  }
`

export default homePageQuery
