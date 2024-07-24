import { groq } from 'next-sanity'

import slugQuery from '@/sanity/queries/partials/slug'

const internalLinkWithLabelQuery = (propName?: string) => {
  const fields = `
    label,
    ${slugQuery('url', 'internalPage->slug.current')}
  `

  return propName
    ? groq`
      ${propName} {
        ${fields}
      }
    `
    : groq`${fields}`
}

export default internalLinkWithLabelQuery
