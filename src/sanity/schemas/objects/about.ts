import { defineField } from 'sanity'

export default defineField({
  name: 'about',
  title: 'Sobre Mim',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      description: 'Máximo: 10 caracteres.',
      placeholder: 'Padrão: Sobre Mim',
    }),
    defineField({
      name: 'backTitle',
      title: 'Título que fica atrás da sessão',
      type: 'string',
      description: 'Máximo: 10 caracteres.',
      placeholder: 'Padrão: Sobre Mim',
    }),
  ],
})

export interface ISanityAbout {
  title?: string
  backTitle?: string
}
