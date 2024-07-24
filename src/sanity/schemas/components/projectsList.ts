import { defineArrayMember, defineField, defineType } from 'sanity'
import { OlistIcon } from '@sanity/icons'

import { PageType } from '@/sanity/types/enums'
import type { ISanityProjectThumbnail } from '@/sanity/schemas/documents/projectPage'

export default defineType({
  name: 'projectsList',
  title: 'Projects List',
  type: 'object',
  icon: OlistIcon,
  fields: [
    defineField({
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'project',
          title: 'Project',
          type: 'reference',
          // options: { disableNew: true },
          to: [{ type: PageType.Project }],
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Projects List',
        subtitle: 'A list of projects that will be displayed on Home page.',
      }
    },
  },
})

export interface ISanityProjectsList {
  _type: 'projectsList'
  _key: string

  projects: ISanityProjectThumbnail[]
}
