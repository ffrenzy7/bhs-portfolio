import clsx from 'clsx'
import { Fragment, useEffect, useRef } from 'react'

import Social from '@/components/ui/Social'
import ScrollDown from '@/components/ui/ScrollDown'

import type { IHomeHero } from './HomeHeroTypes'

import s from './HomeHero.module.scss'

const HomeHero = ({ data, social }: IHomeHero) => {
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
          {data.firstName}
          <br />
          {data.lastName}
        </h1>

        <h2 className={clsx(s.role)}>
          {data?.roles?.map((role, index) => (
            <Fragment key={index}>
              {role}
              {index < data.roles.length - 1 && (
                <span className={clsx(s.slash)}> / </span>
              )}
            </Fragment>
          ))}
        </h2>
      </div>

      <Social data={social} />

      <ScrollDown buttonText={data?.scrollDown} id="portfolio" />
    </main>
  )
}

export default HomeHero
