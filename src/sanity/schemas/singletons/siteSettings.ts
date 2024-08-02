import { defineField, defineType } from 'sanity'
import { CogIcon } from '@sanity/icons'

import { PageType } from '@/sanity/types/enums'
import type { ISanityMenu } from '@/sanity/schemas/objects/menu'
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
      name: 'social',
      title: 'Redes Sociais',
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
      name: 'menu',
      title: 'Menu Principal',
      type: 'menu',
      group: 'main',
    }),
    defineField({
      name: 'social',
      title: 'Redes Sociais',
      type: 'object',
      group: 'social',
      fields: [
        defineField({
          name: 'linkedin',
          title: 'LinkedIn',
          type: 'url',
        }),
        defineField({
          name: 'behance',
          title: 'Behance',
          type: 'url',
        }),
        defineField({
          name: 'mail',
          title: 'E-mail',
          type: 'email',
        }),
        defineField({
          name: 'whatsapp',
          title: 'WhatsApp',
          description:
            'Insira no formato <CodigoDoPais><DDD><Numero> sem parênteses, traços ou o sinal de +. Somente número. Exemplo: 5511912345678',
          type: 'string',
          validation: (Rule) => Rule.regex(/^\d{1,4}\d{1,12}$/),
        }),
      ],
    }),
    defineField({
      name: 'titlePrefix',
      title: 'Prefixo de todas as páginas',
      type: 'string',
      description:
        'O texto que será exibido antes do título da página e será aplicado em todas as páginas.',
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

export interface ISanitySiteSettingsSocial {
  linkedin?: string
  behance?: string
  mail?: string
  whatsapp?: string
}

export interface ISanitySiteSettings {
  title: string
  menu?: ISanityMenu

  social: ISanitySiteSettingsSocial

  titlePrefix: string
  metadata?: ISanityMetadata
}
