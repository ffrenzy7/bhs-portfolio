import clsx from 'clsx'
import { FaLinkedinIn, FaBehance, FaEnvelope, FaWhatsapp } from 'react-icons/fa'

import { ISocial } from './SocialTypes'

import s from './Social.module.scss'

const Social = ({ type = 'hero' }: ISocial) => {
  return (
    <div className={clsx(s.social, [s[type]])}>
      <a href="https://www.linkedin.com/" target="_blank" className={clsx(s.link)}>
        <div className={clsx(s.wrapper)}>
          <FaLinkedinIn className={clsx(s.icon)} />
          <FaLinkedinIn className={clsx(s.icon, s.last)} />
        </div>
      </a>

      <a href="https://www.linkedin.com/" target="_blank" className={clsx(s.link)}>
        <div className={clsx(s.wrapper)}>
          <FaBehance className={clsx(s.icon)} />
          <FaBehance className={clsx(s.icon, s.last)} />
        </div>
      </a>

      <a href="https://www.linkedin.com/" target="_blank" className={clsx(s.link)}>
        <div className={clsx(s.wrapper)}>
          <FaEnvelope className={clsx(s.icon)} />
          <FaEnvelope className={clsx(s.icon, s.last)} />
        </div>
      </a>

      <a href="https://www.linkedin.com/" target="_blank" className={clsx(s.link)}>
        <div className={clsx(s.wrapper)}>
          <FaWhatsapp className={clsx(s.icon)} />
          <FaWhatsapp className={clsx(s.icon, s.last)} />
        </div>
      </a>
    </div>
  )
}

export default Social
