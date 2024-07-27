import { defineField, defineType } from 'sanity'
import { CogIcon } from '@sanity/icons'

import { PageType } from '@/sanity/types/enums'
import type { ISanityMetadata } from '@/sanity/schemas/objects/metadata'

export default defineType({
  name: PageType.SiteSettings,
  title: 'Configurações',
  type: 'document',
  icon: CogIcon,
  groups: [
    {
      name: 'main',
      title: 'Principal',
    },
    {
      name: 'metadata',
      title: 'Metadados',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      description:
        'Este título não será visto pelo usuário. Use somente para referência interna.',
      group: 'main',
    }),
    defineField({
      name: 'titlePrefix',
      title: 'Prefixo do título',
      type: 'string',
      description:
        'O texto que será exibido antes do título da página e será aplicado em todas as páginas.',
      group: 'metadata',
    }),
    defineField({
      name: 'logoText',
      title: 'Texto do logo',
      type: 'string',
      description: 'O texto que será exibido no logo do menu em todas as páginas.',
      group: 'metadata',
    }),
    defineField({
      name: 'metadata',
      title: 'Metadados',
      type: 'metadata',
      description:
        'Use como metadado padrão. Qualquer metadado especificado nas páginas irão sobreescrever este.',
      group: 'metadata',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title,
      }
    },
  },
})

export interface ISanitySiteSettings {
  title: string
  titlePrefix: string
  logoText: string

  metadata: ISanityMetadata
}
