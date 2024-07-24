import { groq } from 'next-sanity'

import externalLinkWithLabelQuery from '@/sanity/queries/objects/externalLinkWithLabel'
import internalLinkWithLabelQuery from '@/sanity/queries/objects/internalLinkWithLabel'

const flexiLinkWithLabelQuery = (propName?: string) => {
  const fields = `
    "type": type,
    type == 'internal' => {
      ${internalLinkWithLabelQuery()}
    },
    type == 'external' => {
      ${externalLinkWithLabelQuery()}
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

export default flexiLinkWithLabelQuery
