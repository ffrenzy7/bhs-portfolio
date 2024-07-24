import { groq } from 'next-sanity'

import imageQuery from '@/sanity/queries/partials/image'
import richTextQuery from '@/sanity/queries/objects/richText'

const aboutHeroQuery = groq`
  _type == 'aboutHero' => {
    ${richTextQuery('titleTop')},
    ${richTextQuery('titleBottom')},
    ${imageQuery('image')},
  }
`

export default aboutHeroQuery
