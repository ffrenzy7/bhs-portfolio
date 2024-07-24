import { defineField, defineType } from 'sanity'
import { RocketIcon } from '@sanity/icons'

import { imageField } from '@/sanity/lib/fields'
import type { ISanityImage } from '@/sanity/types/image'
import type { ISanityRichText } from '@/sanity/schemas/objects/richText'

export default defineType({
  name: 'aboutHero',
  title: 'About Hero',
  type: 'object',
  icon: RocketIcon,
  fields: [
    defineField({
      name: 'titleTop',
      title: 'Title top',
      type: 'richText',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'titleBottom',
      title: 'Title bottom',
      type: 'richText',
      validation: (Rule) => Rule.required(),
    }),
    imageField({
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      titleTop: 'titleTop',
      titleBottom: 'titleBottom',
      image: 'image',
    },
    prepare({ titleTop, image }) {
      return {
        title:
          titleTop?.body?.length > 0
            ? titleTop?.body[0]?.children[0]?.text + '...'
            : 'Title',
        subtitle: 'About Hero',
        media: image,
      }
    },
  },
})

export interface ISanityAboutHero {
  _type: 'aboutHero'
  _key: string

  titleTop: ISanityRichText
  titleBottom: ISanityRichText
  image: ISanityImage
}
