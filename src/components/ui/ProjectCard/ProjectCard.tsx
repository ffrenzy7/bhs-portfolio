// import { useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

import { IProjectCard } from './ProjectCardTypes'

import s from './ProjectCard.module.scss'

const ProjectCard = ({ title, tags, image, url }: IProjectCard) => {
  return (
    <Link className={clsx(s.card)} href={url}>
      <div className={clsx(s.imageWrapper)}>
        <img className={clsx(s.image)} src={image} />
      </div>

      <div className={clsx(s.content)}>
        <h3 className={clsx(s.title)}>{title}</h3>

        <div className={clsx(s.tags)}>
          <span className={clsx(s.dash)}>- </span>
          {tags.map((tag, index) => (
            <span key={index} className={clsx(s.tag)}>
              {tag}
              {index < tags.length - 1 ? ', ' : ''}
            </span>
          ))}
        </div>
      </div>

      <button className={clsx(s.button)}>Explorar</button>
    </Link>
  )
}

export default ProjectCard
