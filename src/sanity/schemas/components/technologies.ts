import { defineField, defineType } from 'sanity'
import { CodeIcon } from '@sanity/icons'
import type { PortableTextBlock } from '@portabletext/types'

export default defineType({
  name: 'technologies',
  title: 'Technologies',
  type: 'object',
  icon: CodeIcon,
  fields: [
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        defineField({
          name: 'item',
          title: 'Item',
          type: 'object',
          fields: [
            defineField({
              name: 'category',
              title: 'Category',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'text',
              title: 'Text',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              category: 'category',
              text: 'text',
            },
            prepare({ category, text }) {
              return {
                title: category,
                subtitle: text,
              }
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      items: 'items',
    },
    prepare({ items }) {
      return {
        title: `${items[0]?.category}: ${items[0]?.text} ...`,
        subtitle: 'Technologies',
      }
    },
  },
})

export interface ISanityTechnologiesItem {
  category: string
  text: string
}

export interface ISanityTechnologies {
  _type: 'technologies'
  _key: string

  items: ISanityTechnologiesItem[]
}
