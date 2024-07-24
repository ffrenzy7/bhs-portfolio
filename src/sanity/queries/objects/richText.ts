import { groq } from 'next-sanity'

import flexiLinkQuery from '@/sanity/queries/objects/flexiLink'

const richTextQuery = (propName: string) => groq`
  ${propName} {
    body[] {
      ...,
      markDefs[] {
        ...,
        _type == "flexiLink" => {
          ${flexiLinkQuery()},
        },
      },
    },
  }
`

export default richTextQuery
