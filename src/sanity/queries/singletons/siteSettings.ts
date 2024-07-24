import { groq } from 'next-sanity'

import { PageType } from '@/sanity/types/enums'
import menuQuery from '@/sanity/queries/objects/menu'
import metadataQuery from '@/sanity/queries/objects/metadata'

const siteSettingsQuery = groq`
  *[_type == "${PageType.SiteSettings}"][0] {
    titlePrefix,
    ${metadataQuery},
    ${menuQuery},
    nextProjectText,
  }
`

export default siteSettingsQuery
