import { groq } from 'next-sanity'

const richTextQuery = (propName: string) => groq`
  ${propName} {
    body[] {
      ...,
      markDefs[] {
        ...,
      },
    },
  }
`

export default richTextQuery
