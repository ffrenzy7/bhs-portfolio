import { defineField, defineType, defineArrayMember } from 'sanity'
import { DocumentIcon } from '@sanity/icons'

import { createSlug, formatSlug } from '@/sanity/lib/utils'
import { imageField } from '@/sanity/lib/fields'
import { PageType } from '@/sanity/types/enums'
import bodyText from '@/sanity/schemas/components/bodyText'
import technologies from '@/sanity/schemas/components/technologies'
import projectMedia from '@/sanity/schemas/components/projectMedia'
import type { ISanityBodyText } from '@/sanity/schemas/components/bodyText'
import type { ISanityFlexiMedia } from '@/sanity/schemas/objects/flexiMedia'
import type { ISanityImage } from '@/sanity/types/image'
import type { ISanityMetadata } from '@/sanity/schemas/objects/metadata'
import type { ISanityProjectMedia } from '@/sanity/schemas/components/projectMedia'
import type { ISanitySEO } from '@/sanity/schemas/objects/seo'
import type { ISanityTechnologies } from '@/sanity/schemas/components/technologies'

import { PROJECT_SUB_DIRECTORY_NAME } from '@/constants'

const components: { type: string }[] = [
  defineArrayMember({ type: bodyText.name }),
  defineArrayMember({ type: projectMedia.name }),
  defineArrayMember({ type: technologies.name }),
]

export default defineType({
  name: PageType.Project,
  title: 'Project',
  type: 'document',
  icon: DocumentIcon,
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
      title: 'Title',
      type: 'string',
      description: 'The title of the project.',
      group: 'main',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: `The slug should have the format: ${PROJECT_SUB_DIRECTORY_NAME}/uid. Click the "Generate" button to automate this.`,
      group: 'main',
      placeholder: `${PROJECT_SUB_DIRECTORY_NAME}/uid`,
      validation: (Rule) =>
        Rule.required().custom((slug) => {
          const current = slug?.current
          if (current === PROJECT_SUB_DIRECTORY_NAME)
            return `Slug must follow ${PROJECT_SUB_DIRECTORY_NAME}/uid pattern`
          else if (!current?.startsWith(PROJECT_SUB_DIRECTORY_NAME)) {
            return `Slug must start with "${PROJECT_SUB_DIRECTORY_NAME}/"`
          }
          return true
        }),
      options: {
        // @ts-ignore
        source: (doc) => doc?.title || 'uid',
        slugify: (input) =>
          `${PROJECT_SUB_DIRECTORY_NAME}/${input ? createSlug(input) : 'uid'}`,
      },
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
      description: 'The year the project was finished.',
      group: 'main',
      validation: (Rule) => Rule.required(),
    }),
    imageField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      description:
        'The cover image that will be displayed on Home page. Dimensions: 1366x768',
      group: 'main',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'media',
      title: 'Media',
      type: 'flexiMedia',
      description: 'Image or video displayed on hero section of the Project page.',
      group: 'main',
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

export interface ISanityProjectPage {
  _id: string
  _createdAt: string
  _type: string
  title: string
  slug: string
  year: string
  primaryColor: string
  secondaryColor: string
  media: ISanityFlexiMedia

  metadata: ISanityMetadata
  seo: ISanitySEO

  components: [ISanityBodyText | ISanityProjectMedia | ISanityTechnologies]
}

export interface ISanityProjectThumbnail {
  title: string
  slug: string
  primaryColor: string
  secondaryColor: string
  thumbnail: ISanityImage
}
