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
      title: 'Type',
      type: 'string',
      options: {
        layout: 'radio',
        direction: 'horizontal',
        list: [
          { title: 'Internal', value: 'internal' },
          { title: 'External', value: 'external' },
        ],
      },
      initialValue: 'internal',
    }),
    defineField({
      name: 'internalLink',
      title: 'Internal link',
      type: 'internalLink',
      description: 'URL to an internal page',
      hidden: ({ parent }) => {
        if (parent?.type !== 'internal') return true
        return false
      },
    }),
    defineField({
      name: 'externalLink',
      title: 'External link',
      type: 'externalLink',
      description: 'URL to an external link',
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
