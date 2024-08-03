import { defineField } from 'sanity'

import { ISanityRichTextAbout } from '@/sanity/schemas/objects/richTextAbout'

export default defineField({
  name: 'about',
  title: 'Sobre Mim',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      placeholder: 'Padrão: Sobre Mim',
    }),
    defineField({
      name: 'backTitle',
      title: 'Título que fica atrás da sessão',
      type: 'string',
      placeholder: 'Padrão: Sobre Mim',
    }),
    defineField({
      name: 'richTextAbout',
      title: 'Texto da sessão Sobre Mim',
      type: 'richTextAbout',
      validation: (Rule) => Rule.required(),
    }),
  ],
})

export interface ISanityAbout {
  title?: string
  backTitle?: string
  richTextAbout: ISanityRichTextAbout
}
