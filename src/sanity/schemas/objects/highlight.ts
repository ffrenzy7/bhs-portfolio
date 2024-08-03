import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'highlight',
  title: 'Texto Supimpa',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
    }),
  ],
})

export interface ISanityHighlight {
  text: string
}
