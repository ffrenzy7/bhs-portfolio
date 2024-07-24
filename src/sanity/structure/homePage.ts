import { StructureBuilder } from 'sanity/structure'

import homePage from '@/sanity/schemas/singletons/homePage'

const DEFAULT_TITLE = 'Home Page'

export const HomePageStructure = (S: StructureBuilder) =>
  S.listItem()
    .title(homePage.title || DEFAULT_TITLE)
    .icon(homePage.icon)
    .child(
      S.documentList()
        .title(homePage.title || DEFAULT_TITLE)
        .schemaType(homePage.name)
        .filter(`_type == "${homePage.name}"`),
    )
