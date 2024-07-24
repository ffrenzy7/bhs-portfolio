import type { StructureBuilder, StructureResolverContext } from 'sanity/structure'

import { SiteSettingsStructure } from '@/sanity/structure/siteSettings'
import { HomePageStructure } from '@/sanity/structure/homePage'
import { ProjectPageStructure } from '@/sanity/structure/projectPage'

export const structure = async (
  S: StructureBuilder,
  _context: StructureResolverContext,
) =>
  S.list()
    .title('Content')
    .items([
      /* Singletons */
      SiteSettingsStructure(S),

      S.divider(),

      HomePageStructure(S),

      S.divider(),

      /* Templates */
      ProjectPageStructure(S),
    ])
