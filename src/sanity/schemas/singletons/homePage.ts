import { defineField, defineType, defineArrayMember } from 'sanity'
import { PresentationIcon } from '@sanity/icons'

import { formatSlug } from '@/sanity/lib/utils'
import { PageType } from '@/sanity/types/enums'
import homeHero from '@/sanity/schemas/components/homeHero'
import type { ISanityMetadata } from '@/sanity/schemas/objects/metadata'
import type { ISanitySEO } from '@/sanity/schemas/objects/seo'
import type { ISanityHomeHero } from '@/sanity/schemas/components/homeHero'

const components: { type: string }[] = [defineArrayMember({ type: homeHero.name })]

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
      name: 'metadata',
      title: 'Metadados',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
    {
      name: 'components',
      title: 'Componentes',
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

    defineField({
      name: 'components',
      title: 'Componentes',
      type: 'array',
      description: 'Componentes relacionados aos conteúdos.',
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

  components: [ISanityHomeHero]
}
