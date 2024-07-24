import createImageUrlBuilder from '@sanity/image-url'

import { dataset, projectId } from '@/sanity/lib/constants'
import type { ISanityImage } from '@/sanity/types/image'

export const createSlug = (title: string) => {
  // Convert the title to lowercase
  title = title.toLowerCase()

  // Remove diacritical marks (e.g., convert "åäö" to "aao")
  title = title.normalize('NFD').replace(/[\u0300-\u036f]/g, '')

  // Replace non-alphanumeric characters with dashes
  title = title.replace(/[^\w\s-]/g, '')

  // Replace whitespace characters with dashes
  title = title.replace(/\s+/g, '-')

  // Remove consecutive dashes
  title = title.replace(/-{2,}/g, '-')

  // Trim dashes from the beginning and end
  title = title.replace(/^-+|-+$/g, '')

  return title
}

export const formatSlug = (slug: string) => (slug === '/' ? '/' : `/${slug}`)

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const urlFor = (source: ISanityImage) =>
  createImageUrlBuilder({ dataset, projectId }).image(source)

export const altWarningMessage =
  'Alternative text should be provided to improve accessibility and SEO'
