import React, { useMemo } from 'react'
import clsx from 'clsx'
import { PortableText, PortableTextComponents } from '@portabletext/react'

import NextImage from '@/components/core/NextImage'
import Clickable from '@/components/core/Clickable'

import type { IRichText } from './RichTextTypes'

import s from './RichText.module.scss'

const RichText = ({ value, className }: IRichText) => {
  console.log('VALUE', value)

  const components: PortableTextComponents = useMemo(
    () => ({
      block: {
        // don't render empty <p>s, check the length for it
        normal: ({ children }: any) => {
          return typeof children[0] === 'object' ||
            (typeof children[0] === 'string' && children[0]?.length > 0) ? (
            <p className={clsx(s.paragraph)}>{children}</p>
          ) : null
        },
        h2: ({ children }: any) => (
          <h2 className={clsx(s.title)}>
            {children}
            <span className={clsx(s.underscore)}>_</span>
          </h2>
        ),
      },
      types: {
        image: ({ value }: any) => (
          <div
            className={clsx(s.imageWrapper)}
            style={{ aspectRatio: value?.dimensions?.aspectRatio }}
          >
            <NextImage
              image={value}
              alt={value?.alt || 'Project image'}
              className={clsx(s.image)}
            />
          </div>
        ),
      },
      marks: {
        flexiLink: ({ children, value }: any) => {
          return (
            <Clickable to={value.url} className={clsx(s.link)}>
              {children}
            </Clickable>
          )
        },
        strong: ({ children }: any) => {
          return <strong className={clsx(s.highlight)}>{children}</strong>
        },
      },
    }),
    [],
  )

  return (
    <div className={clsx(s.RichText, className)}>
      <PortableText value={value} components={components} />
    </div>
  )
}

export default RichText
