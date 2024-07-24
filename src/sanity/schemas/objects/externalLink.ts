import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'externalLink',
  title: 'Link',
  type: 'object',
  fields: [
    defineField({
      name: 'url',
      title: 'Url',
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
      url: 'url',
    },
    prepare({ url }) {
      return {
        title: url,
      }
    },
  },
  options: {
    collapsible: false,
  },
})

export interface ISanityExternalLink {
  url: string
}
