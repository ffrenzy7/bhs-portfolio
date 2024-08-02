import { defineField, defineType } from 'sanity'
import { MenuIcon } from '@sanity/icons'

export default defineType({
  name: 'menu',
  title: 'Menu',
  type: 'object',
  icon: MenuIcon,
  fields: [
    defineField({
      name: 'logoText',
      title: 'Texto do logo',
      type: 'string',
      description:
        'O texto que será exibido no logo do menu em todas as páginas. Máximo: 7 caracteres.',
      placeholder: 'BHS',
      validation: (Rule) => Rule.max(7).warning('Deve ter até 7 caracteres'),
    }),
    defineField({
      name: 'home',
      title: 'Texto Home do Menu',
      placeholder: 'Padrão: Home',
      type: 'string',
    }),

    defineField({
      name: 'portfolio',
      title: 'Texto Portfolio do Menu',
      placeholder: 'Padrão: Portfolio',
      type: 'string',
    }),
    defineField({
      name: 'about',
      title: 'Texto Sobre Mim do Menu',
      placeholder: 'Padrão: Sobre Mim',
      type: 'string',
    }),
  ],
})

export interface ISanityMenu {
  logoText?: string
  home?: string
  portfolio?: string
  about?: string
}
