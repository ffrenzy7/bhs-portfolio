import { groq } from 'next-sanity'

const menuTextQuery = groq`
  menuText {
    home,
    portfolio,
    about,
  }
`

export default menuTextQuery
