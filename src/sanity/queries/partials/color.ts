import { groq } from 'next-sanity'

const colorQuery = (propName: string) => groq`
  "${propName}": ${propName}.hex
`

export default colorQuery
