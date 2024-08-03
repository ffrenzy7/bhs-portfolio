import clsx from 'clsx'

import ProjectCard from '@/components/ui/ProjectCard'
import ScrollingText from '@/components/ui/ScrollingText'

import type { IPortfolio } from '@/components/sections/Portfolio/PortfolioTypes'

import s from '@/components/sections/Portfolio/Portfolio.module.scss'

const mockData = [
  {
    title: 'Projeto 1',
    tags: ['tag1', 'tag2'],
    image: 'https://dlfilix.droitlab.com/wp-content/uploads/2019/04/portfolio_img_1.jpg',
    url: '/',
  },
  {
    title: 'Projeto 2',
    tags: ['tag1', 'tag2'],
    image: 'https://dlfilix.droitlab.com/wp-content/uploads/2019/04/portfolio_img_2.jpg',
    url: '/',
  },
  {
    title: 'Projeto 3',
    tags: ['tag1', 'tag2'],
    image: 'https://dlfilix.droitlab.com/wp-content/uploads/2019/04/portfolio_img_4.jpg',
    url: '/',
  },
  {
    title: 'Projeto 4',
    tags: ['tag1', 'tag2'],
    image: 'https://dlfilix.droitlab.com/wp-content/uploads/2019/04/portfolio_img_3.jpg',
    url: '/',
  },
  {
    title: 'Projeto 5',
    tags: ['tag1', 'tag2'],
    image: 'https://dlfilix.droitlab.com/wp-content/uploads/2019/04/portfolio_img_5.jpg',
    url: '/',
  },
  {
    title: 'Projeto 6',
    tags: ['tag1', 'tag2'],
    image: 'https://dlfilix.droitlab.com/wp-content/uploads/2019/04/portfolio_img_6.jpg',
    url: '/',
  },
]

const Portfolio = ({ data }: IPortfolio) => {
  return (
    <section className={clsx(s.portfolio)} id="portfolio">
      <ScrollingText className={clsx(s.titleWrapper)}>
        <h2 className={clsx(s.title)}>{data?.backTitle || 'Portfolio'}</h2>
      </ScrollingText>

      <div className={clsx(s.projects)}>
        {data?.projects?.map((project, index) => (
          <ProjectCard buttonText={data?.buttonText} key={index} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Portfolio
