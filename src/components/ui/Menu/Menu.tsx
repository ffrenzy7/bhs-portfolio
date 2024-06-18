import Link from 'next/link'
import clsx from 'clsx'

import s from './Menu.module.scss'

const Menu = () => {
  return (
    <header className={clsx(s.header)}>
      <Link className={clsx(s.logo)} href="/">
        <span className={clsx(s.slash)}>/</span>BHS
      </Link>

      <button className={clsx(s.button)}>
        Menu
        <div className={clsx(s.burger)}>
          <div className={clsx(s.burgerLine, s.first)} />
          <div className={clsx(s.burgerLine)} />
          <div className={clsx(s.burgerLine, s.last)} />
        </div>
      </button>

      <nav className={clsx(s.nav)}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/#portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/#about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Menu
