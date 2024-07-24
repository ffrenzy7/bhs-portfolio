import { groq } from 'next-sanity'

import internalLinkWithLabelQuery from '@/sanity/queries/objects/internalLinkWithLabel'

const menuQuery = groq`
  menu {
    links[] {
      ${internalLinkWithLabelQuery()},
    },
  }
`

export default menuQuery
