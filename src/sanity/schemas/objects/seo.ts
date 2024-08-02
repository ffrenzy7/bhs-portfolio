import { defineField, defineType } from 'sanity'
import { InfoOutlineIcon } from '@sanity/icons'

export default defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  icon: InfoOutlineIcon,
  fields: [
    defineField({
      name: 'isIndexable',
      title: 'Available to search engines',
      type: 'boolean',
      description:
        'Whether this page should show up in Google results. Setting to false will still enable this page to be accessible through URL.',
      initialValue: true,
    }),
    defineField({
      name: 'isVisibleInSitemap',
      title: 'Show in sitemap',
      type: 'boolean',
      description:
        'Whether this page should be visible in a sitemap file that will be provided to search engines.',
      initialValue: true,
    }),
  ],
})

export interface ISanitySEO {
  isIndexable: boolean
  isVisibleInSitemap: boolean
}
