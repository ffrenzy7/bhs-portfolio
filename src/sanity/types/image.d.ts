import type { Image } from 'sanity'

export interface ISanityImage extends Image {
  _type: 'image'
  alt?: string
  asset: {
    _ref: string
    _type: 'reference'
  }
  dimensions: {
    width: number
    height: number
    aspectRatio: number
  }
}
