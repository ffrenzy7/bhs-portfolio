import { groq } from 'next-sanity'

import flexiMediaQuery from '@/sanity/queries/objects/flexiMedia'

const projectMediaQuery = groq`
  _type == 'projectMedia' => {
    items[] {
      _type == 'fullscreen' => {
        "type": _type,
        ${flexiMediaQuery('media')},
      },
      _type == 'oneColumn' => {
        "type": _type,
        ${flexiMediaQuery('media')},
      },
      _type == 'twoColumn' => {
        "type": _type,
        ${flexiMediaQuery('mediaLeft')},
        ${flexiMediaQuery('mediaRight')},
      },
    },
  }
`

export default projectMediaQuery
