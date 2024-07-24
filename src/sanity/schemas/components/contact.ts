import { CommentIcon, TwitterIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

import type { ISanityExternalLinkWithLabel } from '@/sanity/schemas/objects/externalLinkWithLabel'
import type { ISanityRichText } from '@/sanity/schemas/objects/richText'

export default defineType({
  name: 'contact',
  title: 'Contact',
  type: 'object',
  icon: CommentIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'richText',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'E-mail',
      type: 'externalLinkWithLabel',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social links',
      type: 'array',
      of: [
        defineField({
          name: 'socialLink',
          title: 'Social link',
          type: 'object',
          icon: TwitterIcon,
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'externalLinkWithLabel',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              link: 'link',
            },
            prepare({ link }) {
              return {
                title: link?.label,
                subtitle: link?.url,
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
        subtitle: 'Contact',
      }
    },
  },
})

export interface ISanityContactSocialLink {
  name: string
  link: ISanityExternalLinkWithLabel
}

export interface ISanityContact {
  _type: 'contact'
  _key: string

  title: ISanityRichText
  description: string
  email: ISanityExternalLinkWithLabel
  socialLinks: ISanityContactSocialLink[]
}
