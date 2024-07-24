import { defineField } from 'sanity'
import { BlockContentIcon } from '@sanity/icons'
import type { PortableTextBlock } from '@portabletext/types'

export default defineField({
  name: 'richText',
  title: 'Rich Text',
  type: 'object',
  icon: BlockContentIcon,
  fields: [
    {
      name: 'body',
      type: 'array',
      title: 'Body',
      of: [
        {
          type: 'block',
          title: 'Block',
          // Styles set the various mark up that the user can use to format content blocks. These
          // correspond to HTML tags, but you can set a custom title and/or value
          // and decide how it will be formatted or displayed where your content is used.
          styles: [
            { title: 'Normal', value: 'normal' },
            // { title: 'Title', value: 'h2' },
            // { title: 'Subtitle', value: 'h3' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
          // Marks let you mark up inline text in the block editor.
          marks: {
            // Decorators usually describe a single property – e.g. a typographic
            // preference or highlighting by editors.
            decorators: [
              { title: 'Strong', value: 'strong' },
              // { title: 'Emphasis', value: 'em' },
            ],
            // Annotations can be any object structure – e.g. a link or a footnote.
            annotations: [{ type: 'flexiLink' }],
          },
        },
      ],
    },
  ],
})

export interface ISanityRichText {
  _type: 'richText'
  _key: string

  body: (typeof PortableTextBlock)[]
}
