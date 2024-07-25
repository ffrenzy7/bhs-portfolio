import type { ISanityImage } from '@libs/cms'

import type { ISanityMetadata } from '@/sanity/schemas/objects/metadata'

export interface IMetadata {
  pageData: ISanityMetadata
  siteData: ISanityMetadata
  slug: string
  titlePrefix?: string
}

// TODO check it or remove it
// interface metadata {
//   title?: string
//   description?: string
//   image?: ISanityImage
//   url?: string
// }

// export interface IMetadata {
//   pageData: metadata
//   siteData: metadata
//   slug: string
//   titlePrefix?: string
// }
