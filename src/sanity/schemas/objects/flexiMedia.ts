import { defineField, defineType } from 'sanity'

import { imageField } from '@/sanity/lib/fields'
import type { ISanityImage } from '@/sanity/types/image'

export default defineType({
  name: 'flexiMedia',
  title: 'Flexible Media - image or video',
  type: 'object',
  fields: [
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        layout: 'radio',
        list: ['image', 'video'],
        direction: 'horizontal',
      },
      initialValue: 'image',
    }),
    imageField({
      name: 'image',
      title: 'Image',
      type: 'image',
      hidden: ({ parent, value }: any) => {
        if (parent?.type !== 'image') {
          return true
        }
        return false
      },
    }),
    defineField({
      name: 'video',
      type: 'file',
      options: { accept: '.mp4' },
      hidden: ({ parent, value }) => {
        if (parent?.type !== 'video') {
          return true
        }
        return false
      },
    }),
  ],
})

export interface ISanityFlexiMediaVideo {
  asset: string
}

export interface ISanityFlexiMedia {
  type: 'image' | 'video'
  image?: ISanityImage
  video?: ISanityFlexiMediaVideo
}
