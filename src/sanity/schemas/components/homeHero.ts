import { defineField, defineType } from 'sanity'
import { StarFilledIcon, TextIcon } from '@sanity/icons'

export default defineType({
  name: 'homeHero',
  title: 'Banner Home',
  type: 'object',
  icon: StarFilledIcon,
  fields: [
    defineField({
      name: 'firstName',
      title: 'Nome',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'lastName',
      title: 'Sobrenome',
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
    defineField({
      name: 'scrollDown',
      title: 'Desça para mais',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Banner Home',
      }
    },
  },
})

export interface ISanityHomeHero {
  _type: 'homeHero'
  _key: string

  firstName: string
  lastName: string
  roles: string[]
  scrollDown: string
}
