import { defineField, defineType } from 'sanity'
import { InfoOutlineIcon } from '@sanity/icons'

import type { ISanityImage } from '@/sanity/types/image'

export default defineType({
  name: 'metadata',
  title: 'Metadata',
  type: 'object',
  icon: InfoOutlineIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Page title and meta title. Max 70 characters.',
      validation: (Rule) =>
        Rule.max(70).warning('Should be under 70 characters'),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      description: 'Meta description. Max 155 characters.',
      validation: (Rule) =>
        Rule.max(155).warning('Should be under 155 characters'),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      description:
        'The recommended size for an OG Image is 1.91:1. The recommended pixel dimensions of 1200:630 px.',
      options: {
        hotspot: true,
      },
    }),
  ],
})

export interface ISanityMetadata {
  title: string
  description: string
  image: ISanityImage
}
