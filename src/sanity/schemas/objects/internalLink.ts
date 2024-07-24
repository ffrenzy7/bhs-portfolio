import { defineField, defineType } from 'sanity'
import { LinkIcon } from '@sanity/icons'

import { formatSlug } from '@/sanity/lib/utils'
import { PageType } from '@/sanity/types/enums'

export default defineType({
  name: 'internalLink',
  title: 'Internal link to another document',
  type: 'object',
  description: 'Add the page you want to link to',
  icon: LinkIcon,
  fields: [
    defineField({
      name: 'internalPage',
      title: 'Internal page',
      type: 'reference',
      options: {
        disableNew: true,
      },
      to: [{ type: PageType.Home }, { type: PageType.Project }],
    }),
    // defineField({
    //   name: 'crossLinkThumbnail',
    //   title: 'Display cross-link thumbnail',
    //   type: 'boolean',
    //   description:
    //     'Visible on desktop. Will only be displayed if link leads to either a case study or another journal entry. Do not add cross-link thumbnails in the first few paragraphs as they might collide with the author of the article.',
    //   hidden: ({ parent, document }) => {
    //     /*
    //      * Ideally we would also check the parent's parent to make sure that we are in the Rich Text component, but that is not currently possible in Sanity.
    //      * Checking that we are on the journal entry document is enough since this document only uses the internal link in the Rich Text component,
    //      * but it's something we need to be aware of in future development.
    //      */
    //     const journalEntryDocument = document?._type === PageType.JournalEntry
    //     const ref = parent?.internalPage?._ref

    //     if (journalEntryDocument && ref) return false
    //     return true
    //   },
    // }),
  ],
  preview: {
    select: {
      internalLinkPageSlug: 'internalPage.slug.current',
    },
    prepare({ internalLinkPageSlug }) {
      return {
        title: formatSlug(internalLinkPageSlug),
      }
    },
  },
  options: {
    collapsible: false,
  },
})

// query results type - check internalLinkQuery in partialQueries.ts
export interface ISanityInternalLink {
  url: string
}
