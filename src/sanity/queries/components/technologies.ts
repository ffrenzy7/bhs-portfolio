import { groq } from 'next-sanity'

const technologiesQuery = groq`
  _type == 'technologies' => {
    items[] {
      category,
      text,
    },
  }
`

export default technologiesQuery
