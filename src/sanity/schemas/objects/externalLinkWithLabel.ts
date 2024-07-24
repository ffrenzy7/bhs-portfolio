import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'externalLinkWithLabel',
  title: 'Link',
  type: 'object',
  fields: [
    defineField({
      title: 'Label',
      name: 'label',
      type: 'string',
    }),
    defineField({
      title: 'Url',
      name: 'url',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ['https', 'http', 'mailto', 'tel'],
        }),
    }),
  ],
  preview: {
    select: {
      label: 'label',
      url: 'url',
    },
    prepare({ label, url }) {
      return {
        title: label,
        subtitle: url,
      }
    },
  },
})

export interface ISanityExternalLinkWithLabel {
  label?: string
  url: string
}
