import { defineField, defineType } from 'sanity'
import { CogIcon } from '@sanity/icons'

import { PageType } from '@/sanity/types/enums'
import type { ISanityMetadata } from '@/sanity/schemas/objects/metadata'
import type { ISanityMenu } from '@/sanity/schemas/objects/menu'

export default defineType({
  name: PageType.SiteSettings,
  title: 'Settings',
  type: 'document',
  icon: CogIcon,
  groups: [
    {
      name: 'main',
      title: 'Main',
    },
    {
      name: 'metadata',
      title: 'Metadata',
    },
    {
      name: 'menu',
      title: 'Menu',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description:
        'This title will not be public. Use a descriptive page name so you can easily find this page later in the CMS.',
      group: 'main',
    }),
    defineField({
      name: 'titlePrefix',
      title: 'Title prefix',
      type: 'string',
      description:
        'A text that comes before the title of the page and will be applied to all pages.',
      group: 'metadata',
    }),
    defineField({
      name: 'metadata',
      title: 'Metadata',
      type: 'metadata',
      description:
        'Use these as the "standard" metadata. Any metadata specified in the pages will override these.',
      group: 'metadata',
    }),
    defineField({
      name: 'menu',
      title: 'Menu',
      type: 'menu',
      description: 'Menu navigation displayed on all pages.',
      group: 'menu',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title,
      }
    },
  },
})

export interface ISanitySiteSettings {
  title?: string
  titlePrefix?: string

  metadata: ISanityMetadata

  menu: ISanityMenu
}
