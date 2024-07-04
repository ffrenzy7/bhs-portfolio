import { useState, MouseEvent } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

import s from './Menu.module.scss'

const Menu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const scrollToSection = (event: MouseEvent<HTMLAnchorElement, MouseEvent>) => {
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
        <span className={clsx(s.slash)}>/</span>BHS
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
            <Link href="/">Home</Link>
          </li>
          <li className={clsx(s.item)}>
            {/* <Link href="#portfolio" onClick={() => setIsOpen(false)}> */}
            <Link href="#portfolio" onClick={scrollToSection}>
              Projetos
            </Link>
          </li>
          {/* <li className={clsx(s.item)} onClick={() => setIsOpen(false)}> */}
          <li className={clsx(s.item)} onClick={scrollToSection}>
            <Link href="#about">Sobre Mim</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Menu
