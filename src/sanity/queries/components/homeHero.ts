import { groq } from 'next-sanity'

const homeHero = groq`
  _type == 'homeHero' => {
    firstName,
    lastName,
    roles[],
    scrollDown,
  }
`

export default homeHero
