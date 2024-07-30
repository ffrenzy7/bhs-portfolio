import type { ISanityHomePageHomeHero } from '@/sanity/schemas/singletons/homePage'
import type { ISanitySiteSettingsSocial } from '@/sanity/schemas/singletons/siteSettings'

export interface IHomeHero {
  data: ISanityHomePageHomeHero
  social: ISanitySiteSettingsSocial
}
