import { ISanityProjectThumbnail } from '@/sanity/schemas/documents/projectPage'

export interface IProjectCard extends ISanityProjectThumbnail {
  buttonText?: string
}
