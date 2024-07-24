import { defineField } from 'sanity'

import { altWarningMessage } from '@/sanity/lib/utils'

export const imageField = ({
  name = 'image',
  title = 'Image',
  description = '',
  group = '',
  hidden,
}: any) =>
  defineField({
    name,
    title,
    type: 'image',
    description,
    group,
    options: { hotspot: true },
    fields: [
      {
        name: 'alt',
        title: 'Alternative text',
        type: 'string',
        validation: (Rule) => Rule.warning(altWarningMessage).required(),
      },
    ],
    hidden,
  })
