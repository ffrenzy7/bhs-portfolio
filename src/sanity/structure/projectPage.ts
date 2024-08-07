import { StructureBuilder } from 'sanity/structure'
import { DocumentsIcon } from '@sanity/icons'

import projectPage from '@/sanity/schemas/documents/projectPage'

const DEFAULT_TITLE = 'Projetos'

export const ProjectPageStructure = (S: StructureBuilder) =>
  S.listItem()
    .title(DEFAULT_TITLE)
    .icon(DocumentsIcon)
    .child(
      S.documentList()
        .title(DEFAULT_TITLE)
        .schemaType(projectPage.name)
        .filter(`_type == "${projectPage.name}"`),
    )
