import Metadata from '@/components/core/Metadata'
import Hero from '@/components/sections/Hero'
import Portfolio from '@/components/sections/Portfolio'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'

// import type { IHomePage } from './HomePageTypes'

const HomePage = () => {
  return (
    <>
      <Metadata
        title="BHS Portfolio"
        description="Bruno Henrique Engenheiro"
        metatags="portfolio, engenheiro, bhs"
      />

      <Hero />
      <Portfolio />
      <About />
      <Contact />
    </>
  )
}

export default HomePage
