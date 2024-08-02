import { groq } from 'next-sanity'

const menuQuery = groq`
  menu {
    logoText,
    home,
    portfolio,
    about,
  }
`

export default menuQuery
