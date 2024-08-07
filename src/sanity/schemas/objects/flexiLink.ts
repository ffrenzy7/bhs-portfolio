import { defineField, defineType } from 'sanity'
import { LinkIcon } from '@sanity/icons'

import { formatSlug } from '@/sanity/lib/utils'

export default defineType({
  name: 'flexiLink',
  title: 'Link',
  type: 'object',
  icon: LinkIcon,
  options: {
    modal: {
      type: 'dialog',
    },
  },
  fields: [
    defineField({
      name: 'type',
      title: 'Tipo',
      type: 'string',
      options: {
        layout: 'radio',
        direction: 'horizontal',
        list: [
          { title: 'Interno', value: 'internal' },
          { title: 'Externo', value: 'external' },
        ],
      },
      initialValue: 'internal',
    }),
    defineField({
      name: 'internalLink',
      title: 'Link Interno',
      type: 'internalLink',
      description: 'URL para uma página interna.',
      hidden: ({ parent }) => {
        if (parent?.type !== 'internal') return true
        return false
      },
    }),
    defineField({
      name: 'externalLink',
      title: 'Link Externo',
      type: 'externalLink',
      description: 'URL para uma página externa.',
      hidden: ({ parent }) => {
        if (parent?.type !== 'external') return true
        return false
      },
    }),
  ],
  preview: {
    select: {
      type: 'type',
      internalLinkPageSlug: 'internalLink.internalPage.slug.current',
      externalLinkUrl: 'externalLink.url',
    },
    prepare({ type, internalLinkPageSlug, externalLinkUrl }) {
      const internalLinkUrl = formatSlug(internalLinkPageSlug)

      return {
        title: type === 'internal' ? internalLinkUrl : externalLinkUrl,
      }
    },
  },
})

// query results type - check flexiLinkQuery in partialQueries.ts
export interface ISanityFlexiLink {
  type?: 'internal' | 'external'
  url: string
}
