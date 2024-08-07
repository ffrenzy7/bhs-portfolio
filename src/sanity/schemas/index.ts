// Singletons
import siteSettings from '@/sanity/schemas/singletons/siteSettings'
import homePage from '@/sanity/schemas/singletons/homePage'

// Documents
import projectPage from '@/sanity/schemas/documents/projectPage'

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
import richTextAbout from '@/sanity/schemas/objects/richTextAbout'
import seo from '@/sanity/schemas/objects/seo'
import menu from '@/sanity/schemas/objects/menu'
import portfolio from '@/sanity/schemas/objects/portfolio'
import about from '@/sanity/schemas/objects/about'

const schemas = [
  // Singletons
  siteSettings,
  homePage,

  // Documents
  projectPage,

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
  richTextAbout,
  seo,
  menu,
  portfolio,
  about,
]

export default schemas
