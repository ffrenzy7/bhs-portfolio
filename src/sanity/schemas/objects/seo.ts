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
    defineField({
      name: 'hasCanonicalLink',
      title: 'Add a canonical link?',
      type: 'boolean',
      description:
        'Canonical links are used for duplicated content. It helps telling Google which page should be the indexed one.',
      initialValue: false,
    }),
    defineField({
      name: 'canonicalLink',
      type: 'flexiLink',
      hidden: ({ parent, value }) => !parent?.hasCanonicalLink,
    }),
  ],
})

export interface ISanitySEO {
  isIndexable: boolean
  isVisibleInSitemap: boolean
  hasCanonicalLink: boolean
  canonicalLink: {
    type: string
    url: string
  }
}
