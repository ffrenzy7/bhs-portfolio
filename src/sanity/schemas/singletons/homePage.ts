import { defineField, defineType, defineArrayMember } from 'sanity'
import { PresentationIcon } from '@sanity/icons'

import { formatSlug } from '@/sanity/lib/utils'
import { PageType } from '@/sanity/types/enums'
import type { ISanityMetadata } from '@/sanity/schemas/objects/metadata'
import type { ISanitySEO } from '@/sanity/schemas/objects/seo'
import { ISanityPortfolio } from '@/sanity/schemas/objects/portfolio'
import { ISanityAbout } from '@/sanity/schemas/objects/about'

export default defineType({
  name: PageType.Home,
  title: 'Home',
  type: 'document',
  icon: PresentationIcon,
  groups: [
    {
      name: 'main',
      title: 'Principal',
    },
    {
      name: 'hero',
      title: 'Banner Home',
    },
    {
      name: 'portfolio',
      title: 'Portfolio',
    },
    {
      name: 'about',
      title: 'Sobre Mim',
    },
    {
      name: 'metadata',
      title: 'Metadados',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Título da página',
      type: 'string',
      description:
        'Este título não será visto pelo usuário. Use somente para referência interna.',
      group: 'main',
    }),
    defineField({
      name: 'slug',
      title: 'URL',
      type: 'slug',
      description: 'Texto que será exibido na URL da página. Ex.: /home',
      group: 'main',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'homeHero',
      title: 'Banner Home',
      type: 'object',
      group: 'hero',
      fields: [
        defineField({
          name: 'firstName',
          title: 'Nome',
          placeholder: 'Padrão: Bruno',
          type: 'string',
        }),
        defineField({
          name: 'lastName',
          title: 'Sobrenome',
          placeholder: 'Padrão: Henrique',
          type: 'string',
        }),
        defineField({
          name: 'roles',
          title: 'Cargos',
          description: 'Máximo: 3 cargos.',
          type: 'array',
          validation: (Rule) => Rule.required().min(1).max(3),
          of: [
            defineField({
              name: 'role',
              title: 'Cargo',
              description: 'Máximo: 25 caracteres.',
              type: 'string',
              validation: (Rule) => Rule.required().min(1).max(25),
            }),
          ],
        }),
        defineField({
          name: 'scrollDown',
          title: 'Texto do botão de rolagem',
          type: 'string',
          placeholder: 'Padrão: Desça para mais',
        }),
      ],
    }),
    defineField({
      name: 'portfolio',
      title: 'Portfolio',
      type: 'portfolio',
      group: 'portfolio',
    }),
    defineField({
      name: 'about',
      title: 'Sobre Mim',
      type: 'about',
      group: 'about',
    }),
    defineField({
      name: 'metadata',
      title: 'Metadados',
      type: 'metadata',
      description: 'Preencha os metadados para fins de compartilhamento.',
      group: 'metadata',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      description: 'Search Engine Optimization (Otimização de busca).',
      group: 'seo',
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

export interface ISanityHomePageHomeHero {
  firstName?: string
  lastName?: string
  roles: string[]
  scrollDown?: string
}

export interface ISanityHomePage {
  _id: string
  _createdAt: string
  _type: string
  title?: string
  slug: string

  homeHero: ISanityHomePageHomeHero
  portfolio: ISanityPortfolio
  about: ISanityAbout

  metadata: ISanityMetadata
  seo: ISanitySEO
}
