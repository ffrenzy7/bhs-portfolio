import { groq } from 'next-sanity'

import slugQuery from '@/sanity/queries/partials/slug'

const internalLinkQuery = (propName?: string) => {
  const fields = `
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

export default internalLinkQuery
