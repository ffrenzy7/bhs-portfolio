import { groq } from 'next-sanity'

import defaultFieldsQuery from '@/sanity/queries/partials/defaultFields'
import metadataQuery from '@/sanity/queries/objects/metadata'
import seoQuery from '@/sanity/queries/objects/seo'
import richTextQuery from '@/sanity/queries/objects/richText'

import { PageType } from '@/sanity/types/enums'

const projectPageQuery = groq`
  *[_type == "${PageType.Project}" && slug.current == $slug][0] {
    ${defaultFieldsQuery},
    ${richTextQuery('richText')},
    ${metadataQuery},
    ${seoQuery},
  }
`

export default projectPageQuery
