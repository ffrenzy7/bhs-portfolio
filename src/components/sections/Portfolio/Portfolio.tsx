import { useEffect, useRef } from 'react'
import clsx from 'clsx'

import ProjectCard from '@/components/ui/ProjectCard'

import s from './Portfolio.module.scss'

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

const Portfolio = () => {
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const onScroll = () => {
      if (!titleRef.current) return

      const { top, bottom } = titleRef.current?.getBoundingClientRect() as DOMRect
      const isTitleVisible = top < window.innerHeight && bottom > 0

      if (isTitleVisible) {
        titleRef.current.style.transform = `translateX(${-window.scrollY * 0.02}%)`
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className={clsx(s.portfolio)} id="portfolio">
      <h2 className={clsx(s.title)} ref={titleRef}>
        Portfolio
      </h2>

      <div className={clsx(s.projects)}>
        {mockData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Portfolio
