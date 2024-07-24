import { groq } from 'next-sanity'

import externalLinkQuery from '@/sanity/queries/objects/externalLink'
import richTextQuery from '@/sanity/queries/objects/richText'

const awardsListQuery = groq`
  _type == 'awardsList' => {
    ${richTextQuery('title')},
    awards[] {
      year,
      issuer,
      name,
      project,
      ${externalLinkQuery('link')},
    },
  }
`

export default awardsListQuery
