import clsx from 'clsx'

import snorlax from '@/assets/images/snorlax-404.png'
import Clickable from '@/components/core/Clickable'

import s from './Page404.module.scss'

const Page404 = () => {
  return (
    <main className={clsx(s.container)}>
      <img className={clsx(s.image)} src={snorlax.src} alt="404" />
      <h1 className={clsx(s.title)}>Erro 404_</h1>
      <h2 className={clsx(s.subtitle)}>Página não encontrada.</h2>
      <Clickable to="/" className={clsx(s.link)}>
        Voltar para o início
      </Clickable>
    </main>
  )
}

export default Page404
