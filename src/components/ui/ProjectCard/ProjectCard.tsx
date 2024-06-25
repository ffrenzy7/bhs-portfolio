// import { useState } from 'react'
import { useRef } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

import { IProjectCard } from './ProjectCardTypes'

import s from './ProjectCard.module.scss'

const THRESHOLD = 15

const ProjectCard = ({ title, tags, image, url }: IProjectCard) => {
  const cardRef = useRef<HTMLAnchorElement>(null)

  const handleHover = (event: MouseEvent) => {
    const { clientX, clientY, currentTarget } = event
    const { clientWidth, clientHeight, offsetLeft, offsetTop } =
      currentTarget as HTMLAnchorElement

    const horizontal = (clientX - offsetLeft) / clientWidth
    const vertical = (clientY - offsetTop) / clientHeight
    const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2)
    const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2)

    cardRef.current.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`
  }

  const resetStyles = (event: MouseEvent) => {
    cardRef.current.style.transform = `perspective(${event.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`
  }

  return (
    <Link
      className={clsx(s.card)}
      href={url}
      onMouseMove={handleHover}
      onMouseLeave={resetStyles}
      ref={cardRef}
    >
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

      <div className={clsx(s.buttonWrapper)}>
        <div className={clsx(s.line)}></div>
        <button className={clsx(s.button)}>
          <div className={clsx(s.border, s.leftBottom)}></div>
          <div className={clsx(s.border, s.bottom)}></div>
          <div className={clsx(s.border, s.right)}></div>
          <div className={clsx(s.border, s.top)}></div>
          <div className={clsx(s.border, s.leftTop)}></div>
          Explorar
        </button>
      </div>
    </Link>
  )
}

export default ProjectCard
