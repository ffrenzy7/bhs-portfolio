import clsx from 'clsx'

import RichText from '@/components/ui/RichText/RichText'

import type { IProjectMain } from '@/components/sections/ProjectMain/ProjectMainTypes'

import s from '@/components/sections/ProjectMain/ProjectMain.module.scss'

const ProjectMain = ({ data }: IProjectMain) => {
  return (
    <main className={clsx(s.main)}>
      <RichText value={data?.body} />
    </main>
  )
}

export default ProjectMain
