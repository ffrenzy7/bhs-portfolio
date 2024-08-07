import ProjectHero from '@/components/sections/ProjectHero'
import ProjectMain from '@/components/sections/ProjectMain'

import type { IProjectPage } from './ProjectPageTypes'

const ProjectPage = ({ data }: IProjectPage) => {
  if (!data) return null

  return (
    <>
      <ProjectHero title={data.title} />
      <ProjectMain data={data.richText} />
    </>
  )
}

export default ProjectPage
