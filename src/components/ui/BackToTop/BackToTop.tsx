import { useEffect, useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { IoIosArrowUp } from 'react-icons/io'

import s from './BackToTop.module.scss'

const BackToTop = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {
    const onScroll = () => {
      setIsOpen(window.scrollY > window.innerHeight * 0.2)
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <Link className={clsx(s.backToTop, { [s.isOpen]: isOpen })} href={'#top'}>
      <div className={clsx(s.wrapper)}>
        <IoIosArrowUp className={clsx(s.icon)} />
        <IoIosArrowUp className={clsx(s.icon, s.last)} />
      </div>
    </Link>
  )
}

export default BackToTop
