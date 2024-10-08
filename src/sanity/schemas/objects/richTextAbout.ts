import { defineField } from 'sanity'
import { BlockContentIcon, HighlightIcon } from '@sanity/icons'

import type { PortableTextBlock } from '@portabletext/types'

export default defineField({
  name: 'richTextAbout',
  title: 'Rich Text About',
  type: 'object',
  icon: BlockContentIcon,
  fields: [
    {
      name: 'body',
      type: 'array',
      title: 'Conteúdo',
      of: [
        {
          type: 'block',
          title: 'Block',
          // Styles set the various mark up that the user can use to format content blocks. These
          // correspond to HTML tags, but you can set a custom title and/or value
          // and decide how it will be formatted or displayed where your content is used.
          styles: [
            //   { title: 'Normal', value: 'normal' },
            // { title: 'Subtitle', value: 'h3' },
          ],
          lists: [],
          // Marks let you mark up inline text in the block editor.
          marks: {
            // Decorators usually describe a single property – e.g. a typographic
            // preference or highlighting by editors.
            decorators: [{ title: 'Supimpa', value: 'strong', icon: HighlightIcon }],

            // Annotations can be any object structure – e.g. a link or a footnote.
            annotations: [],
          },
        },
      ],
    },
  ],
})

export interface ISanityRichTextAbout {
  _type: 'richTextAbout'
  _key: string

  body: PortableTextBlock[]
}
