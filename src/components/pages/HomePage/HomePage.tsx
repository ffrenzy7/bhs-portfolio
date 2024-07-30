import HomeHero from '@/components/sections/HomeHero'
import Portfolio from '@/components/sections/Portfolio'
import About from '@/components/sections/About'

import type { IHomePage } from './HomePageTypes'

const HomePage = ({ data, social }: IHomePage) => {
  if (!data) return null

  return (
    <>
      <HomeHero data={data.homeHero} social={social} />
      <Portfolio />
      <About />
    </>
  )
}

export default HomePage
