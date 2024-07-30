// Singletons
import siteSettings from '@/sanity/schemas/singletons/siteSettings'
import homePage from '@/sanity/schemas/singletons/homePage'

// Documents
import projectPage from '@/sanity/schemas/documents/projectPage'

// Components
import bodyText from '@/sanity/schemas/components/bodyText'

// Objects
import externalLink from '@/sanity/schemas/objects/externalLink'
import externalLinkWithLabel from '@/sanity/schemas/objects/externalLinkWithLabel'
import flexiLink from '@/sanity/schemas/objects/flexiLink'
import flexiLinkWithLabel from '@/sanity/schemas/objects/flexiLinkWithLabel'
import flexiMedia from '@/sanity/schemas/objects/flexiMedia'
import internalLink from '@/sanity/schemas/objects/internalLink'
import internalLinkWithLabel from '@/sanity/schemas/objects/internalLinkWithLabel'
import metadata from '@/sanity/schemas/objects/metadata'
import richText from '@/sanity/schemas/objects/richText'
import seo from '@/sanity/schemas/objects/seo'
import menuText from '@/sanity/schemas/objects/menuText'

const schemas = [
  // Singletons
  siteSettings,
  homePage,

  // Documents
  projectPage,

  // Components
  bodyText,

  // Objects
  externalLink,
  externalLinkWithLabel,
  flexiLink,
  flexiLinkWithLabel,
  flexiMedia,
  internalLink,
  internalLinkWithLabel,
  metadata,
  richText,
  seo,
  menuText,
]

export default schemas
