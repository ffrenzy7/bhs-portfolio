import { groq } from 'next-sanity'

const externalLinkWithLabelQuery = (propName?: string) => {
  const fields = `
    label,
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

export default externalLinkWithLabelQuery
