import type { ISanityBodyText } from '@/sanity/schemas/components/bodyText'
import type { ISanityHomeHero } from '@/sanity/schemas/components/homeHero'

export enum EnumComponents {
  BodyText = 'bodyText',
  HomeHero = 'homeHero',
}

export type IComponents = {
  components: (ISanityBodyText | ISanityHomeHero)[]
}
