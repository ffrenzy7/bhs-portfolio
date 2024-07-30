import clsx from 'clsx'

import type { IFooter } from './FooterTypes'

import s from './Footer.module.scss'
import Social from '@/components/ui/Social'

const Footer = ({ social }: IFooter) => {
  return (
    <footer className={clsx(s.footer)}>
      <div className={clsx(s.content)}>
        <p className={clsx(s.title)}>
          Entre em contato<span className={clsx(s.underscore)}>_</span>
        </p>
        <Social data={social} type="footer" />
      </div>

      <p className={clsx(s.copyright)}>
        Copyright © 2024. Todos os direitos reservados.
      </p>
    </footer>
  )
}

export default Footer
