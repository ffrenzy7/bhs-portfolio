import { defineField, defineType, defineArrayMember } from 'sanity'
import { PresentationIcon } from '@sanity/icons'

import { formatSlug } from '@/sanity/lib/utils'
import { PageType } from '@/sanity/types/enums'
import projectsList from '@/sanity/schemas/components/projectsList'
import type { ISanityMetadata } from '@/sanity/schemas/objects/metadata'
import type { ISanityProjectsList } from '@/sanity/schemas/components/projectsList'
import type { ISanitySEO } from '@/sanity/schemas/objects/seo'

const components: { type: string }[] = [defineArrayMember({ type: projectsList.name })]

export default defineType({
  name: PageType.Home,
  title: 'Home',
  type: 'document',
  icon: PresentationIcon,
  groups: [
    {
      name: 'main',
      title: 'Main',
    },
    {
      name: 'metadata',
      title: 'Metadata',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
    {
      name: 'components',
      title: 'Components',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Page title',
      type: 'string',
      description:
        'This title will not be public. Use a descriptive page name so you can easily find this page later in the CMS.',
      group: 'main',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Relative URL of the page to be located in the website.',
      group: 'main',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'metadata',
      title: 'Metadata',
      type: 'metadata',
      description: 'Make sure to fill in the metadata for social sharing.',
      group: 'metadata',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      description: 'Search Engine Optimization related features.',
      group: 'seo',
    }),
    defineField({
      name: 'components',
      title: 'Components',
      type: 'array',
      description: 'Content related components. These build the body of the page.',
      group: 'components',
      of: components,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug.current',
    },
    prepare({ title, slug }) {
      return {
        title,
        subtitle: formatSlug(slug),
      }
    },
  },
})

export interface ISanityHomePage {
  _id: string
  _createdAt: string
  _type: string
  title?: string
  slug: string

  metadata: ISanityMetadata
  seo: ISanitySEO

  components: [ISanityProjectsList]
}
