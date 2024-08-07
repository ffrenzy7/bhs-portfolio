import { groq } from 'next-sanity'

const richTextAboutQuery = (propName: string) => groq`
  ${propName} {
    body[] {
      ...,
      markDefs[] {
        ...,
      },
    },
  }
`

export default richTextAboutQuery
