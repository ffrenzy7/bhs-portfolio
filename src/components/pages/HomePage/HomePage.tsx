import HomeHero from '@/components/sections/HomeHero'
import Portfolio from '@/components/sections/Portfolio'
import About from '@/components/sections/About'

import type { IHomePage } from './HomePageTypes'

const HomePage = ({ data, social }: IHomePage) => {
  if (!data) return null

  console.log(data)

  return (
    <>
      <HomeHero data={data.homeHero} social={social} />
      <Portfolio data={data.portfolio} />
      <About />
    </>
  )
}

export default HomePage
