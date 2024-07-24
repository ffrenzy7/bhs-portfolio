import { groq } from 'next-sanity'

import externalLinkWithLabelQuery from '@/sanity/queries/objects/externalLinkWithLabel'
import richTextQuery from '@/sanity/queries/objects/richText'

const contactQuery = groq`
  _type == 'contact' => {
    ${richTextQuery('title')},
    description,
    ${externalLinkWithLabelQuery('email')},
    socialLinks[] {
      name,
      ${externalLinkWithLabelQuery('link')},
    },
  }
`

export default contactQuery
