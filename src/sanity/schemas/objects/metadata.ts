import { defineField, defineType } from 'sanity'
import { InfoOutlineIcon } from '@sanity/icons'

import type { ISanityImage } from '@/sanity/types/image'

export default defineType({
  name: 'metadata',
  title: 'Metadados',
  type: 'object',
  icon: InfoOutlineIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      description: 'Título (Metadado) da página. Máximo 70 caracteres.',
      validation: (Rule) => Rule.max(70).warning('Deve ter até 70 caracteres'),
    }),
    defineField({
      name: 'description',
      title: 'Descrição',
      type: 'string',
      description: 'Descricão (Metadado) da página. Máximo 155 caracteres.',
      validation: (Rule) => Rule.max(155).warning('Deve ter até 155 caracteres'),
    }),
    defineField({
      name: 'image',
      title: 'Imagem',
      type: 'image',
      description: 'Formato recomendado: 1200x630px',
      options: {
        hotspot: true,
      },
    }),
  ],
})

export interface ISanityMetadata {
  title: string
  description: string
  image: ISanityImage
}
