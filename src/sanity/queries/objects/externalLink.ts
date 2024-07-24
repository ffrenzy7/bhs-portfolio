import { groq } from 'next-sanity'

const externalLinkQuery = (propName?: string) => {
  const fields = `
    url
  `

  return propName
    ? groq`
      ${propName} {
        ${fields}
      }
    `
    : groq`${fields}`
}

export default externalLinkQuery
