import { defineArrayMember, defineField, defineType, ImageRule } from 'sanity'
import { DocumentIcon } from '@sanity/icons'

import { createSlug, formatSlug } from '@/sanity/lib/utils'
import { imageField } from '@/sanity/lib/fields'
import { PageType } from '@/sanity/types/enums'
import type { ISanityImage } from '@/sanity/types/image'
import type { ISanityMetadata } from '@/sanity/schemas/objects/metadata'
import type { ISanitySEO } from '@/sanity/schemas/objects/seo'
import type { ISanityRichText } from '@/sanity/schemas/objects/richText'

import { PROJECT_SUB_DIRECTORY_NAME } from '@/constants'

export default defineType({
  name: PageType.Project,
  title: 'Projeto',
  type: 'document',
  icon: DocumentIcon,
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
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Título do Projeto',
      type: 'string',
      group: 'main',
    }),
    defineField({
      name: 'slug',
      title: 'URL',
      type: 'slug',
      description: `A URL deve estar no formato: ${PROJECT_SUB_DIRECTORY_NAME}/nome-do-projeto. Clique no botão "Generate" para gerar automaticamente.`,
      group: 'main',
      placeholder: `${PROJECT_SUB_DIRECTORY_NAME}/nome-do-projeto`,
      validation: (Rule) =>
        Rule.required().custom((slug) => {
          const current = slug?.current
          if (current === PROJECT_SUB_DIRECTORY_NAME)
            return `URL deve seguir o padrão ${PROJECT_SUB_DIRECTORY_NAME}/nome-do-projeto`
          else if (!current?.startsWith(PROJECT_SUB_DIRECTORY_NAME)) {
            return `URL deve começar com "${PROJECT_SUB_DIRECTORY_NAME}/"`
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
      name: 'tags',
      title: 'Palavras-chave',
      type: 'array',
      description:
        'As palavras-chave do projeto. Somente para referência visual, não contém link. Máximo 2.',
      group: 'main',
      validation: (Rule) => Rule.required().min(1).max(2),
      of: [
        defineArrayMember({
          name: 'tag',
          title: 'Tag',
          type: 'string',
        }),
      ],
    }),
    imageField({
      name: 'thumbnail',
      title: 'Imagem de Capa',
      type: 'image',
      description:
        'A imagem de capa do projeto que vai ser exibida na Home. Dimensões recomendadas: 440x564.',
      group: 'main',
      validation: (Rule: ImageRule) => Rule.required(),
    }),
    defineField({
      name: 'richText',
      title: 'Conteúdo',
      type: 'richText',
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
  richText: ISanityRichText

  metadata?: ISanityMetadata
  seo?: ISanitySEO
}

export interface ISanityProjectThumbnail {
  title: string
  slug: string
  tags: string[]
  thumbnail: ISanityImage
}
