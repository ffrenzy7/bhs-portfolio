import clsx from 'clsx'

import s from './Contact.module.scss'
import Social from '@/components/ui/Social'

const Contact = () => {
  return (
    <footer className={clsx(s.contact)}>
      <div className={clsx(s.content)}>
        <p className={clsx(s.title)}>
          Entre em contato<span className={clsx(s.underscore)}>_</span>
        </p>
        <Social type="alternate" />
      </div>

      <p className={clsx(s.copyright)}>Copyright © 2024. Todos os direitos reservados.</p>
    </footer>
  )
}

export default Contact
