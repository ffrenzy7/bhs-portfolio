import { ISanitySiteSettingsSocial } from '@/sanity/schemas/singletons/siteSettings'

export interface ISocial {
  data: ISanitySiteSettingsSocial
  type?: 'hero' | 'footer'
}
