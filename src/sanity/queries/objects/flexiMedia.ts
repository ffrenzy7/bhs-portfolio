import { groq } from 'next-sanity'

import imageQuery from '@/sanity/queries/partials/image'

const flexiMediaQuery = (propName: string) => groq`
  ${propName} {
    type,
    type == 'image' => {
      ${imageQuery('image')},
    },
    type == 'video' => {
      "video": {
        "asset": video.asset->url,
      }
    },
  }
`

export default flexiMediaQuery
