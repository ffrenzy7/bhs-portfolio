import { groq } from 'next-sanity'

import aboutHeroQuery from '@/sanity/queries/components/aboutHero'
import awardsListQuery from '@/sanity/queries/components/awardsList'
import bodyTextQuery from '@/sanity/queries/components/bodyText'
import contactQuery from '@/sanity/queries/components/contact'
import projectMediaQuery from '@/sanity/queries/components/projectMedia'
import projectsListQuery from '@/sanity/queries/components/projectsList'
import technologiesQuery from '@/sanity/queries/components/technologies'

/**
 * This generic query is used for retrieving all of the components.
 */
const componentsQuery = groq`
  components[] {
    ${/* These parts are shared between the components */ ''}
    _type,
    _key,

    ${/* Parts that are specific for certain components should be added here */ ''}
    ${aboutHeroQuery},
    ${awardsListQuery},
    ${bodyTextQuery},
    ${contactQuery},
    ${projectMediaQuery},
    ${projectsListQuery},
    ${technologiesQuery},
  }
`

export default componentsQuery
