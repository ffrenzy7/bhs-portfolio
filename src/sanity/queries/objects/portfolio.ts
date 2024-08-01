import { groq } from 'next-sanity'

import imageQuery from '@/sanity/queries/partials/image'

const portfolioQuery = groq`
  portfolio {
    backTitle,
    buttonText,
    projects[]->{
      title,
      "slug": slug.current,
      tags[],
      ${imageQuery('thumbnail')},
    },
  }
`

export default portfolioQuery
