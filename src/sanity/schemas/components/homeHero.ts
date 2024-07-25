import { defineField, defineType } from 'sanity'
import { StarFilledIcon } from '@sanity/icons'

export default defineType({
  name: 'homeHero',
  title: 'Home Hero',
  type: 'object',
  icon: StarFilledIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'roles',
      title: 'Cargos',
      type: 'array',
      validation: (Rule) => Rule.required().min(1).max(3),
      of: [
        defineField({
          name: 'role',
          title: 'Cargo',
          type: 'string',
          validation: (Rule) => Rule.required().min(1).max(50),
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
        title,
        subtitle: 'Home Hero',
      }
    },
  },
})

export interface ISanityHomeHero {
  _type: 'homeHero'
  _key: string

  title: string
  roles: string[]
}
