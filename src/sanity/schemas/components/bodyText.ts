import { defineField, defineType } from 'sanity'
import { BlockContentIcon } from '@sanity/icons'

import type { ISanityRichText } from '@/sanity/schemas/objects/richText'

export default defineType({
  name: 'bodyText',
  title: 'Body Text',
  type: 'object',
  icon: BlockContentIcon,
  fields: [
    defineField({
      name: 'richText',
      title: 'Rich Text',
      type: 'richText',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      richText: 'richText',
    },
    prepare({ richText }) {
      return {
        title:
          richText?.body?.length > 0
            ? richText?.body[0]?.children[0]?.text + '...'
            : 'Rich Text',
        subtitle: 'Body Text',
      }
    },
  },
})

export interface ISanityBodyText {
  _type: 'bodyText'
  _key: string

  richText: ISanityRichText
}
