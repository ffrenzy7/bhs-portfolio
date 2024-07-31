import { defineArrayMember, defineField } from 'sanity'
import { BlockContentIcon } from '@sanity/icons'
import { PageType } from '@/sanity/types/enums'
import { ISanityProjectThumbnail } from '@/sanity/schemas/documents/projectPage'

export default defineField({
  name: 'portfolio',
  title: 'Sessão Portfolio',
  type: 'object',
  icon: BlockContentIcon,
  fields: [
    defineField({
      name: 'backTitle',
      title: 'Título que fica atrás da sessão',
      description: 'Máximo: 10 caracteres.',
      placeholder: 'Padrão: Portfolio',
      type: 'string',
      validation: (Rule) => Rule.max(10).warning('Deve ter até 10 caracteres'),
    }),
    defineField({
      name: 'buttonText',
      title: 'Texto do botão de cada projeto',
      description: 'Máximo: 10 caracteres.',
      placeholder: 'Padrão: Explorar',
      type: 'string',
      validation: (Rule) => Rule.max(10).warning('Deve ter até 10 caracteres'),
    }),
    defineField({
      name: 'projects',
      title: 'Lista de Projetos',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'project',
          title: 'Project',
          type: 'reference',
          to: [{ type: PageType.Project }],
        }),
      ],
    }),
  ],
})

export interface ISanityPortfolio {
  backTitle?: string
  buttonText?: string
  projects: ISanityProjectThumbnail[]
}
