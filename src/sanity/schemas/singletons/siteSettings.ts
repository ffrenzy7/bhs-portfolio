import { defineField, defineType } from 'sanity'
import { CogIcon } from '@sanity/icons'

import { PageType } from '@/sanity/types/enums'
import type { ISanityMenuText } from '@/sanity/schemas/objects/menuText'
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
      name: 'logoText',
      title: 'Texto do logo',
      type: 'string',
      description: 'O texto que será exibido no logo do menu em todas as páginas.',
      group: 'main',
    }),
    defineField({
      name: 'menuText',
      title: 'Textos do menu',
      type: 'menuText',
      description: 'O texto que será exibido nos links do Menu.',
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
          description:
            'Insira mailto: antes do endereço de e-mail. Exemplo: mailto:meu@email.com',
          type: 'url',
          validation: (Rule) =>
            Rule.uri({
              allowRelative: true,
              scheme: ['mailto'],
            }),
        }),
        defineField({
          name: 'whatsapp',
          title: 'WhatsApp',
          description:
            'Insira no formato https://wa.me/<CodigoDoPais><DDD><Numero> sem parênteses ou traços. Exemplo: https://wa.me/5511912345678',
          type: 'url',
        }),
      ],
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
  logoText: string
  menuText: ISanityMenuText

  social: ISanitySiteSettingsSocial

  titlePrefix: string
  metadata: ISanityMetadata
}
