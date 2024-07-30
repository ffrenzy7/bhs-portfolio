import type { ISanityHomePage } from '@/sanity/schemas/singletons/homePage'
import type { ISanitySiteSettingsSocial } from '@/sanity/schemas/singletons/siteSettings'

export interface IHomePage {
  data: ISanityHomePage
  social: ISanitySiteSettingsSocial
}
