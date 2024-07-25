import ProjectHero from '@/components/sections/ProjectHero'
import ProjectMain from '@/components/sections/ProjectMain'
import Footer from '@/components/sections/Footer'

import type { IProjectPage } from './ProjectPageTypes'

const ProjectPage = ({ data }: IProjectPage) => {
  console.log(data)

  if (!data) return null

  return (
    <>
      <ProjectHero title={data.title} />
      <ProjectMain />
      <Footer />
    </>
  )
}

export default ProjectPage
