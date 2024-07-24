import { groq } from 'next-sanity'

import externalLinkQuery from '@/sanity/queries/objects/externalLink'
import internalLinkQuery from '@/sanity/queries/objects/internalLink'

const flexiLinkQuery = (propName?: string) => {
  const fields = `
    "type": type,
    type == 'internal' => {
      "": internalLink {
        ${internalLinkQuery()}
      }
    },
    type == 'external' => {
      "": externalLink {
        ${externalLinkQuery()}
      }
    }
  `

  return propName
    ? groq`
      ${propName} {
        ${fields}
      }
    `
    : groq`${fields}`
}

export default flexiLinkQuery
