import { groq } from 'next-sanity'

import richTextAboutQuery from '@/sanity/queries/objects/richTextAbout'

const aboutQuery = groq`
  about {
    title,
    backTitle,
    ${richTextAboutQuery('richTextAbout')},
  }
`

export default aboutQuery
