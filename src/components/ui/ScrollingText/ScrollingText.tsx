import clsx from 'clsx'
import { useEffect, useRef } from 'react'

import type { IScrollingText } from '@/components/ui/ScrollingText/ScrollingTextTypes'

import s from '@/components/ui/ScrollingText/ScrollingText.module.scss'

const ScrollingText = ({ children, className }: IScrollingText) => {
  const elementRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const onScroll = () => {
      if (!elementRef.current) return

      const { top, bottom } = elementRef.current?.getBoundingClientRect() as DOMRect
      const isElementVisible = top < window.innerHeight && bottom > 0

      if (isElementVisible) {
        elementRef.current.style.transform = `translateX(${-window.scrollY * 0.02}%)`
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={clsx(s.wrapper, className)} ref={elementRef}>
      {children}
    </div>
  )
}

export default ScrollingText
