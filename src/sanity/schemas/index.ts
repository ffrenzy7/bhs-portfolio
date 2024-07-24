// Singletons
import siteSettings from '@/sanity/schemas/singletons/siteSettings'
import homePage from '@/sanity/schemas/singletons/homePage'

// Documents
import projectPage from '@/sanity/schemas/documents/projectPage'

// Components
import aboutHero from '@/sanity/schemas/components/aboutHero'
import awardsList from '@/sanity/schemas/components/awardsList'
import bodyText from '@/sanity/schemas/components/bodyText'
import contact from '@/sanity/schemas/components/contact'
import projectMedia from '@/sanity/schemas/components/projectMedia'
import projectsList from '@/sanity/schemas/components/projectsList'
import technologies from '@/sanity/schemas/components/technologies'

// Objects
import externalLink from '@/sanity/schemas/objects/externalLink'
import externalLinkWithLabel from '@/sanity/schemas/objects/externalLinkWithLabel'
import flexiLink from '@/sanity/schemas/objects/flexiLink'
import flexiLinkWithLabel from '@/sanity/schemas/objects/flexiLinkWithLabel'
import flexiMedia from '@/sanity/schemas/objects/flexiMedia'
import internalLink from '@/sanity/schemas/objects/internalLink'
import internalLinkWithLabel from '@/sanity/schemas/objects/internalLinkWithLabel'
import menu from '@/sanity/schemas/objects/menu'
import metadata from '@/sanity/schemas/objects/metadata'
import richText from '@/sanity/schemas/objects/richText'
import seo from '@/sanity/schemas/objects/seo'

const schemas = [
  // Singletons
  siteSettings,
  homePage,

  // Documents
  projectPage,

  // Components
  aboutHero,
  awardsList,
  bodyText,
  contact,
  projectMedia,
  projectsList,
  technologies,

  // Objects
  externalLink,
  externalLinkWithLabel,
  flexiLink,
  flexiLinkWithLabel,
  flexiMedia,
  internalLink,
  internalLinkWithLabel,
  menu,
  metadata,
  richText,
  seo,
]

export default schemas
