import { StructureBuilder } from 'sanity/structure'

import siteSettings from '@/sanity/schemas/singletons/siteSettings'

const DEFAULT_TITLE = 'Site settings'

export const SiteSettingsStructure = (S: StructureBuilder) =>
  S.listItem()
    .title(siteSettings.title || DEFAULT_TITLE)
    .icon(siteSettings.icon)
    .child(
      S.documentList()
        .title(siteSettings.title || DEFAULT_TITLE)
        .schemaType(siteSettings.name)
        .filter(`_type == "${siteSettings.name}"`),
    )
