import clsx from 'clsx'
import { useEffect, useRef } from 'react'

import Social from '@/components/ui/Social'
import ScrollDown from '@/components/ui/ScrollDown'

import { IHomeHero } from './HomeHeroTypes'

import s from './HomeHero.module.scss'

const HomeHero = ({ data }: IHomeHero) => {
  console.log('home hero data:', data)

  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      if (!overlayRef.current) return

      let opacity = window.scrollY / (window.innerHeight * 0.66)

      opacity = opacity < 1 ? opacity : 1

      overlayRef.current.style.opacity = `${opacity}`

      opacity > 0.5
        ? (overlayRef.current.style.pointerEvents = 'auto')
        : (overlayRef.current.style.pointerEvents = 'none')
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <main className={clsx(s.hero)}>
      <div className={clsx(s.overlay)} ref={overlayRef} />
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

export default HomeHero
