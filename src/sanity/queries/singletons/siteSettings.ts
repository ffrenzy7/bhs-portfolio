import { groq } from 'next-sanity'

import { PageType } from '@/sanity/types/enums'
import menuTextQuery from '@/sanity/queries/objects/menuText'
import metadataQuery from '@/sanity/queries/objects/metadata'

const siteSettingsQuery = groq`
  *[_type == "${PageType.SiteSettings}"][0] {
    logoText,
    ${menuTextQuery},
    social {
      linkedin,
      behance,
      mail,
      whatsapp,
    },
    titlePrefix,
    ${metadataQuery},
  }
`

export default siteSettingsQuery
