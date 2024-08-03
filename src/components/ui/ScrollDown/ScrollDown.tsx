import Link from 'next/link'
import clsx from 'clsx'
import { MouseEvent } from 'react'

import type { IScrollDown } from '@/components/ui/ScrollDown/ScrollDownTypes'

import s from '@/components/ui/ScrollDown/ScrollDown.module.scss'

const ScrollDown = ({ id }: IScrollDown) => {
  const scrollToSection = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()

    const section = document.querySelector(`#${id}`)

    if (!section) return

    section.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Link href={`#${id}`} className={clsx(s.scrollDown)} onClick={scrollToSection}>
      <div className={clsx(s.line)}></div>
      Desça para mais
    </Link>
  )
}

export default ScrollDown
