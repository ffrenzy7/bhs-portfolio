import { defineField, defineType } from 'sanity'
import { StarIcon } from '@sanity/icons'

import type { ISanityExternalLink } from '@/sanity/schemas/objects/externalLink'
import type { ISanityRichText } from '@/sanity/schemas/objects/richText'

export default defineType({
  name: 'awardsList',
  title: 'Awards List',
  type: 'object',
  icon: StarIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'richText',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'awards',
      title: 'Awards',
      type: 'array',
      of: [
        defineField({
          name: 'award',
          title: 'Award',
          type: 'object',
          icon: StarIcon,
          fields: [
            defineField({
              name: 'year',
              title: 'Year',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'issuer',
              title: 'Issuer',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'project',
              title: 'Project',
              type: 'string',
            }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'externalLink',
            }),
          ],
          preview: {
            select: {
              year: 'year',
              name: 'name',
              issuer: 'issuer',
              project: 'project',
            },
            prepare({ year, name, issuer, project }) {
              return {
                title: `${name} - ${issuer}`,
                subtitle: `${project} - ${year}`,
              }
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title:
          title?.body?.length > 0 ? title?.body[0]?.children[0]?.text + '...' : 'Title',
        subtitle: 'Awards List',
      }
    },
  },
})

export interface ISanityAwardsListAward {
  year: string
  issuer: string
  name: string
  project?: string
  link?: ISanityExternalLink
}

export interface ISanityAwardsList {
  _type: 'awardsList'
  _key: string

  title: ISanityRichText
  awards: ISanityAwardsListAward[]
}
