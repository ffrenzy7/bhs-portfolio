import Link from 'next/link'
import clsx from 'clsx'
import { FaLinkedinIn, FaBehance, FaEnvelope, FaWhatsapp } from 'react-icons/fa'

import s from './Social.module.scss'

const Social = () => {
  return (
    <div className={clsx(s.social)}>
      <div className={clsx(s.wrapper)}>
        <FaLinkedinIn className={clsx(s.icon)} />
        <FaLinkedinIn className={clsx(s.icon, s.last)} />
      </div>

      <div className={clsx(s.wrapper)}>
        <FaBehance className={clsx(s.icon)} />
        <FaBehance className={clsx(s.icon, s.last)} />
      </div>

      <div className={clsx(s.wrapper)}>
        <FaEnvelope className={clsx(s.icon)} />
        <FaEnvelope className={clsx(s.icon, s.last)} />
      </div>

      <div className={clsx(s.wrapper)}>
        <FaWhatsapp className={clsx(s.icon)} />
        <FaWhatsapp className={clsx(s.icon, s.last)} />
      </div>
    </div>
  )
}
export default Social
