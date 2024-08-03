import React, { useMemo } from 'react'
import clsx from 'clsx'
import { PortableText, PortableTextComponents } from '@portabletext/react'

// import { List, ListItem, ListMarker } from '@/components/ui/List'
// import { Body } from '@/components/ui/Text'
// import Clickable from '@/components/core/Clickable'

import type { IRichText } from './RichTextTypes'

import s from './RichText.module.scss'

const RichText = ({ value, className }: IRichText) => {
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
        h2: ({ children }: any) => <h2 className={clsx(s.title)}>{children}</h2>,
        // h3: ({ children }: any) => <Subtitle1 as="h5">{children}</Subtitle1>,
      },
      // list: {
      //   bullet: ({ children }: any) => <List>{children}</List>,
      //   number: ({ children }: any) => (
      //     <List as="ol" isOrderedList>
      //       {children}
      //     </List>
      //   ),
      // },
      // listItem: {
      //   bullet: ({ children }: any) => (
      //     <ListItem>
      //       <ListMarker>
      //         {/* <ListComponent as="span" /> */}
      //         <span></span>
      //       </ListMarker>

      //       {/* <ListComponent className={clsx(s.listChild)} as="span">
      //         {children}
      //       </ListComponent> */}
      //       <span className={clsx(s.listChild)}>{children}</span>
      //     </ListItem>
      //   ),
      //   number: ({ children }: any) => (
      //     <ListItem>
      //       <ListMarker>
      //         {/* <ListComponent as="span" /> */}
      //         <span></span>
      //       </ListMarker>

      //       {/* <ListComponent className={clsx(s.listChild)} as="span">
      //         {children}
      //       </ListComponent> */}
      //       <span className={clsx(s.listChild)}>{children}</span>
      //     </ListItem>
      //   ),
      // },
      // types: {
      // },
      marks: {
        strong: ({ children }: any) => (
          <strong className={clsx(s.strong)}>{children}</strong>
        ),
        em: ({ children }: any) => <em className={clsx(s.emphasis)}>{children}</em>,
        // flexiLink: ({ children, value }: any) => {
        //   return (
        //     <Clickable to={value.url} className={clsx(s.link)}>
        //       {children}
        //     </Clickable>
        //   )
        // },
      },
    }),
    // [DefaultTextComponent, ListComponent, useItalic],
    // [useItalic],
    [],
  )

  return (
    <div className={clsx(s.RichText, className)}>
      <PortableText value={value} components={components} />
    </div>
  )
}

export default RichText
