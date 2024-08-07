import React, { useMemo } from 'react'
import clsx from 'clsx'
import { PortableText, PortableTextComponents } from '@portabletext/react'

import type { IRichTextAbout } from './RichTextAboutTypes'

import s from './RichTextAbout.module.scss'

const RichTextAbout = ({ value, className }: IRichTextAbout) => {
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
      },
      marks: {
        strong: ({ children }: any) => {
          return <strong className={clsx(s.highlight)}>{children}</strong>
        },
      },
    }),
    [],
  )

  return (
    <div className={clsx(s.RichTextAbout, className)}>
      <PortableText value={value} components={components} />
    </div>
  )
}

export default RichTextAbout
