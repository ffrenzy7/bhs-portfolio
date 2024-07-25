import { groq } from 'next-sanity'

import bodyTextQuery from '@/sanity/queries/components/bodyText'
import homeHeroQuery from '@/sanity/queries/components/homeHero'

/**
 * This generic query is used for retrieving all of the components.
 */
const componentsQuery = groq`
  components[] {
    ${/* These parts are shared between the components */ ''}
    _type,
    _key,

    ${/* Parts that are specific for certain components should be added here */ ''}
    ${bodyTextQuery},
    ${homeHeroQuery},
  }
`

export default componentsQuery
