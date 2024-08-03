import { groq } from 'next-sanity'

import highlightQuery from '@/sanity/queries/objects/highlight'

const richTextAboutQuery = (propName: string) => groq`
  ${propName} {
    body[] {
      ...,
      markDefs[] {
        ...,
        _type == "highlight" => {
          ${highlightQuery},
        },
      },
    },
  }
`

export default richTextAboutQuery
