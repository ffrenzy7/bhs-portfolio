import { defineField, defineType } from 'sanity'
import { LinkIcon } from '@sanity/icons'

import { formatSlug } from '@/sanity/lib/utils'

export default defineType({
  name: 'flexiLinkWithLabel',
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
      type: 'internalLinkWithLabel',
      description: 'URL to an internal page',
      hidden: ({ parent }) => {
        if (parent?.type !== 'internal') return true
        return false
      },
      options: {
        collapsible: false,
      },
    }),
    defineField({
      name: 'externalLink',
      title: 'External link',
      type: 'externalLinkWithLabel',
      description: 'URL to an external link',
      hidden: ({ parent }) => {
        if (parent?.type !== 'external') return true
        return false
      },
      options: {
        collapsible: false,
      },
    }),
  ],
  preview: {
    select: {
      type: 'type',
      internalLinkLabel: 'internalLink.label',
      internalLinkPageSlug: 'internalLink.internalPage.slug.current',
      externalLinkLabel: 'externalLink.label',
      externalLinkUrl: 'externalLink.url',
    },
    prepare({
      type,
      internalLinkLabel,
      internalLinkPageSlug,
      externalLinkLabel,
      externalLinkUrl,
    }) {
      const internalLinkUrl = formatSlug(internalLinkPageSlug)

      return {
        title: type === 'internal' ? internalLinkLabel : externalLinkLabel,
        subtitle: type === 'internal' ? internalLinkUrl : externalLinkUrl,
      }
    },
  },
})

// query results type - check flexiLinkWithLabelQuery in partialQueries.ts
export interface ISanityFlexiLinkWithLabel {
  type?: 'internal' | 'external'
  label: string
  url: string
}
