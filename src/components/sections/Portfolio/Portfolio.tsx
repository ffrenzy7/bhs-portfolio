import { useState } from 'react'

import clsx from 'clsx'

import ProjectCard from '@/components/ui/ProjectCard'
import ScrollingText from '@/components/ui/ScrollingText'

import type { IPortfolio } from '@/components/sections/Portfolio/PortfolioTypes'

import s from '@/components/sections/Portfolio/Portfolio.module.scss'

const Portfolio = ({ data }: IPortfolio) => {
  const [numberOfCards, setNumberOfCards] = useState<number>(4)

  const loadMore = () => {
    setNumberOfCards((prev) => prev + 4)
  }

  return (
    <section className={clsx(s.portfolio)} id="portfolio">
      <ScrollingText className={clsx(s.titleWrapper)}>
        <h2 className={clsx(s.title)}>{data?.backTitle || 'Portfolio'}</h2>
      </ScrollingText>

      <div className={clsx(s.projects)}>
        {data?.projects
          ?.slice(0, numberOfCards)
          ?.map((project, index) => (
            <ProjectCard buttonText={data?.buttonText} key={index} {...project} />
          ))}
      </div>

      {numberOfCards < data?.projects?.length && (
        <button className={clsx(s.loadMore)} onClick={loadMore}>
          Ver mais
        </button>
      )}
    </section>
  )
}

export default Portfolio
