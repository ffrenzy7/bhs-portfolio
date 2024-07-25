import { groq } from 'next-sanity'

const homeHero = groq`
  _type == 'homeHero' => {
    title,
    roles[],
  }
`

export default homeHero
