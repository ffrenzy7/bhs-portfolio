import Portfolio from '@/components/sections/Portfolio'
import About from '@/components/sections/About'
import Footer from '@/components/sections/Footer'
import ComponentsRenderer from '@/components/core/ComponentsRenderer'

import type { IHomePage } from './HomePageTypes'

const HomePage = ({ data }: IHomePage) => {
  console.log(data)

  if (!data) return null

  return (
    <>
      <ComponentsRenderer components={data.components} />

      {/* <HomeHero /> */}
      <Portfolio />
      <About />
      <Footer />
    </>
  )
}

export default HomePage
