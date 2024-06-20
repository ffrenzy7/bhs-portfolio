import clsx from 'clsx'

import Social from '@/components/ui/Social'

import s from './Hero.module.scss'

const Hero = () => {
  return (
    <>
      <main className={clsx(s.hero)}>
        <div className={clsx(s.content)}>
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
      </main>
    </>
  )
}
export default Hero
