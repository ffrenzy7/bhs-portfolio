import Link from 'next/link'
import clsx from 'clsx'

import { IScrollDown } from './ScrollDownTypes'

import s from './ScrollDown.module.scss'

const ScrollDown = ({ id }: IScrollDown) => {
  return (
    <Link href={`#${id}`} className={clsx(s.scrollDown)}>
      <div className={clsx(s.line)}></div>
      Desça para mais
    </Link>
  )
}

export default ScrollDown
