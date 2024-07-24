import { groq } from 'next-sanity'

import richTextQuery from '@/sanity/queries/objects/richText'

const bodyTextQuery = groq`
  _type == 'bodyText' => {
    ${richTextQuery('richText')},
  }
`

export default bodyTextQuery
