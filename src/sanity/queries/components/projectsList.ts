import { groq } from 'next-sanity'

import colorQuery from '@/sanity/queries/partials/color'
import imageQuery from '@/sanity/queries/partials/image'
import slugQuery from '@/sanity/queries/partials/slug'

const projectsListQuery = groq`
  _type == 'projectsList' => {
    projects[]-> {
      title,
      ${slugQuery('slug', 'slug.current')},
      ${colorQuery('primaryColor')},
      ${colorQuery('secondaryColor')},
      ${imageQuery('thumbnail')},
    }
  }
`

export default projectsListQuery
