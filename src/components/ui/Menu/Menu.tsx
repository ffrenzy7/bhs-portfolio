import { useState, MouseEvent } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

import { IMenu } from './MenuTypes'

import s from './Menu.module.scss'

const Menu = ({ logoText, menuText }: IMenu) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const scrollToSection = (event: MouseEvent<HTMLAnchorElement>) => {
    setIsOpen(false)

    event.preventDefault()

    const linkElement = event.target as HTMLAnchorElement
    const id = linkElement.getAttribute('href')?.replace('/', '')
    const section = document.querySelector(id || '')

    if (!section) return

    section.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={clsx(s.header)}>
      <Link className={clsx(s.logo)} href="/">
        <span className={clsx(s.slash)}>/</span>
        {logoText || 'BHS'}
      </Link>

      <button
        className={clsx(s.button, { [s.isOpen]: isOpen })}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className={clsx(s.buttonTexts)}>
          <span className={clsx(s.buttonText, s.menuText, { [s.isVisible]: !isOpen })}>
            Menu
          </span>
          <span className={clsx(s.buttonText, { [s.isVisible]: isOpen })}>Fechar</span>
        </span>

        <div className={clsx(s.burger)}>
          <div className={clsx(s.burgerLine, s.first)} />
          <div className={clsx(s.burgerLine, s.middle)} />
          <div className={clsx(s.burgerLine, s.last)} />
        </div>
      </button>

      <nav className={clsx(s.nav, { [s.isOpen]: isOpen })}>
        <ul className={clsx(s.list)}>
          <li className={clsx(s.item)}>
            <Link href="/">{menuText?.home || 'Home'}</Link>
          </li>

          <li className={clsx(s.item)}>
            <Link href="/#portfolio" onClick={scrollToSection}>
              {menuText?.portfolio || 'Portfolio'}
            </Link>
          </li>

          <li className={clsx(s.item)}>
            <Link href="/#about" onClick={scrollToSection}>
              {menuText?.about || 'Sobre Mim'}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Menu
