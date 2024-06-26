import clsx from 'clsx'

import Social from '@/components/ui/Social'
import ScrollDown from '@/components/ui/ScrollDown'

import s from './Hero.module.scss'

const Hero = () => {
  return (
    <main className={clsx(s.hero)}>
      <div>
        <h1 className={clsx(s.name)}>
          Bruno
          <br />
          Henrique
        </h1>

        <h2 className={clsx(s.role)}>
          Cargo 1<span className={clsx(s.slash)}> / </span>
          Cargo 2<span className={clsx(s.slash)}> / </span>
          Cargo 3
        </h2>
      </div>

      <Social />

      <ScrollDown id="portfolio" />
    </main>
  )
}

export default Hero
