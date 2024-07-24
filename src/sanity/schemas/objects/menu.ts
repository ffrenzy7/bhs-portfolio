import { defineField, defineType } from 'sanity'

import type { ISanityInternalLinkWithLabel } from '@/sanity/schemas/objects/internalLinkWithLabel'

export default defineType({
  name: 'menu',
  title: 'Menu',
  type: 'object',
  fields: [
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      description: 'Links that will be displayed in the menu navigation.',
      of: [
        defineField({
          title: 'Link',
          name: 'link',
          type: 'internalLinkWithLabel',
        }),
      ],
    }),
  ],
})

export type ISanityMenuLink = ISanityInternalLinkWithLabel

export interface ISanityMenu {
  links: ISanityMenuLink[]
}
