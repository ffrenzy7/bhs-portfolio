import Hero from '@/components/sections/Hero'
import Portfolio from '@/components/sections/Portfolio'
import About from '@/components/sections/About'
import Footer from '@/components/sections/Footer'

import type { IHomePage } from './HomePageTypes'

const HomePage = ({ data }: IHomePage) => {
  console.log(data)

  if (!data) return null

  return (
    <>
      <Hero />
      <Portfolio />
      <About />
      <Footer />
    </>
  )
}

export default HomePage
