import { defineField, defineType } from 'sanity'
import { ExpandIcon, ImagesIcon, InlineElementIcon, InlineIcon } from '@sanity/icons'

import type { ISanityFlexiMedia } from '@/sanity/schemas/objects/flexiMedia'

export default defineType({
  name: 'projectMedia',
  title: 'Project media',
  type: 'object',
  icon: ImagesIcon,
  fields: [
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        defineField({
          name: 'fullscreen',
          title: 'Fullscreen',
          type: 'object',
          icon: ExpandIcon,
          fields: [
            defineField({
              name: 'media',
              title: 'Media',
              type: 'flexiMedia',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              media: 'media',
            },
            prepare({ media }) {
              return {
                title: media?.type,
                subtitle: 'Fullscreen',
              }
            },
          },
        }),
        defineField({
          name: 'oneColumn',
          title: 'One column',
          type: 'object',
          icon: InlineElementIcon,
          fields: [
            defineField({
              name: 'media',
              title: 'Media',
              type: 'flexiMedia',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              media: 'media',
            },
            prepare({ media }) {
              return {
                title: media?.type,
                subtitle: 'One column',
              }
            },
          },
        }),
        defineField({
          name: 'twoColumn',
          title: 'Two column',
          type: 'object',
          icon: InlineIcon,
          fields: [
            defineField({
              name: 'mediaLeft',
              title: 'Media left',
              type: 'flexiMedia',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'mediaRight',
              title: 'Media right',
              type: 'flexiMedia',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              mediaLeft: 'mediaLeft',
              mediaRight: 'mediaRight',
            },
            prepare({ mediaLeft, mediaRight }) {
              return {
                title: `${mediaLeft?.type} | ${mediaRight?.type}`,
                subtitle: 'Two column',
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
        title: `${items?.length} items`,
        subtitle: 'Project media',
      }
    },
  },
})

export interface ISanityProjectMediaFullscreen {
  type: 'fullscreen'
  media: ISanityFlexiMedia
}

export interface ISanityProjectMediaOneColumn {
  type: 'oneColumn'
  media: ISanityFlexiMedia
}

export interface ISanityProjectMediaTwoColumn {
  type: 'twoColumn'
  mediaLeft: ISanityFlexiMedia
  mediaRight: ISanityFlexiMedia
}

export interface ISanityProjectMedia {
  _type: 'projectMedia'
  _key: string

  items: [
    | ISanityProjectMediaFullscreen
    | ISanityProjectMediaOneColumn
    | ISanityProjectMediaTwoColumn,
  ]
}
