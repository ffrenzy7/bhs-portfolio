import { defineField, defineType } from 'sanity'

import { formatSlug } from '@/sanity/lib/utils'
import { PageType } from '@/sanity/types/enums'

export default defineType({
  name: 'internalLinkWithLabel',
  title: 'Internal link to another document',
  type: 'object',
  description: 'Add the page you want to link to',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
    }),
    defineField({
      name: 'internalPage',
      title: 'Internal page',
      type: 'reference',
      options: {
        disableNew: true,
      },
      to: [{ type: PageType.Home }, { type: PageType.Project }],
    }),
  ],
  preview: {
    select: {
      label: 'label',
      internalLinkPageSlug: 'internalPage.slug.current',
    },
    prepare({ label, internalLinkPageSlug }) {
      return {
        title: label,
        subtitle: formatSlug(internalLinkPageSlug),
      }
    },
  },
})

// query results type - check internalLinkWithLabelQuery in partialQueries.ts
export interface ISanityInternalLinkWithLabel {
  label?: string
  url: string
}
