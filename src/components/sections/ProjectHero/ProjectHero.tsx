import clsx from 'clsx'

import { IProjectHero } from './ProjectHeroTypes'

import s from './ProjectHero.module.scss'

const ProjectHero = ({ breadcrumbs }: IProjectHero) => {
  return (
    <header className={clsx(s.hero)}>
      <div className={clsx(s.content)}>
        <h1 className={clsx(s.title)}>Título Projeto</h1>
        <nav className={clsx(s.nav)}>
          <ul className={clsx(s.list)}>
            {breadcrumbs.map((breadcrumb, index) => (
              <>
                <li key={index} className={clsx(s.item)}>
                  {breadcrumb}
                </li>

                {index < breadcrumbs.length - 1 ? '/' : ''}
              </>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default ProjectHero
