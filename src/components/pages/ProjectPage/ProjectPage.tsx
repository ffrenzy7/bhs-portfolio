import Metadata from '@/components/core/Metadata'
import ProjectHero from '@/components/sections/ProjectHero'
import ProjectMain from '@/components/sections/ProjectMain'
import Contact from '@/components/sections/Contact'

const ProjectPage = ({ data }: any) => {
  return (
    <>
      <Metadata
        title="BHS Portfolio"
        description="Bruno Henrique Engenheiro"
        metatags="portfolio, engenheiro, bhs"
      />

      <ProjectHero title={data.title} />
      <ProjectMain />
      <Contact />
    </>
  )
}

export default ProjectPage
