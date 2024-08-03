import clsx from 'clsx'
import Link from 'next/link'

import type { IProjectHero } from '@/components/sections/ProjectHero/ProjectHeroTypes'

import s from '@/components/sections/ProjectHero/ProjectHero.module.scss'

const ProjectHero = ({ title }: IProjectHero) => {
  return (
    <header className={clsx(s.hero)}>
      <div className={clsx(s.content)}>
        <h1 className={clsx(s.title)}>{title}</h1>
        <nav>
          <ul className={clsx(s.list)}>
            <li className={clsx(s.item)}>
              <Link href="/">Home</Link>
            </li>
            <li className={clsx(s.slash)}>/</li>
            <li className={clsx(s.item)}>{title}</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default ProjectHero
