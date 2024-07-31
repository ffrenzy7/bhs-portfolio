import { defineField, defineType } from 'sanity'
import { MenuIcon } from '@sanity/icons'

export default defineType({
  name: 'menuText',
  title: 'Texto Menu',
  type: 'object',
  icon: MenuIcon,
  fields: [
    defineField({
      name: 'home',
      title: 'Texto Home do Menu',
      description: 'Máximo: 10 caracteres.',
      placeholder: 'Padrão: Home',
      type: 'string',
      validation: (Rule) => Rule.max(10).warning('Deve ter até 10 caracteres'),
    }),
    defineField({
      name: 'portfolio',
      title: 'Texto Portfolio do Menu',
      description: 'Máximo: 10 caracteres.',
      placeholder: 'Padrão: Portfolio',
      type: 'string',
      validation: (Rule) => Rule.max(10).warning('Deve ter até 10 caracteres'),
    }),
    defineField({
      name: 'about',
      title: 'Texto Sobre Mim do Menu',
      description: 'Máximo: 10 caracteres.',
      placeholder: 'Padrão: Sobre Mim',
      type: 'string',
      validation: (Rule) => Rule.max(10).warning('Deve ter até 10 caracteres'),
    }),
  ],
})

export interface ISanityMenuText {
  home?: string
  portfolio?: string
  about?: string
}
