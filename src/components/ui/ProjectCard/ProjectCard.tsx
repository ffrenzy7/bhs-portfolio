import { useRef, MouseEvent, Fragment } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

import NextImage from '@/components/core/NextImage'

import type { IProjectCard } from '@/components/ui/ProjectCard/ProjectCardTypes'

import s from '@/components/ui/ProjectCard/ProjectCard.module.scss'

const ProjectCard = ({ title, tags, thumbnail, slug, buttonText }: IProjectCard) => {
  const cardRef = useRef<HTMLAnchorElement>(null)
  const cardRect = useRef<DOMRect>()

  const onMouseEnter = () => {
    if (!cardRef.current) return

    cardRect.current = cardRef.current.getBoundingClientRect()
  }

  const onMouseMove = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!cardRect.current || !cardRef.current) return

    const mouseX = event.clientX
    const mouseY = event.clientY
    const leftX = mouseX - cardRect.current.x
    const topY = mouseY - cardRect.current.y

    const center = {
      x: leftX - cardRect.current.width / 2,
      y: topY - cardRect.current.height / 2,
    }
    const distance = Math.sqrt(center.x ** 2 + center.y ** 2)

    const intensity = 3

    cardRef.current.style.transform = `
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance) * intensity}deg
      )
    `
  }

  const onMouseLeave = () => {
    if (!cardRef.current) return

    cardRef.current.style.transform = ''
  }

  return (
    <div className={clsx(s.cardWrapper)}>
      <Link
        className={clsx(s.card)}
        href={slug}
        onMouseEnter={onMouseEnter}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        ref={cardRef}
      >
        <div className={clsx(s.imageWrapper)}>
          <NextImage
            image={thumbnail}
            alt={thumbnail?.alt || 'Project thumbnail'}
            className={clsx(s.image)}
          />
        </div>

        <div className={clsx(s.content)}>
          <h3 className={clsx(s.title)}>{title}</h3>

          <p className={clsx(s.tags)}>
            <span className={clsx(s.dash)}>- </span>
            {tags?.map((tag, index) => (
              <Fragment key={index}>
                <span className={clsx(s.tag)}>{tag}</span>
                <span className={clsx(s.comma)}>
                  {index < tags.length - 1 ? ', ' : ''}
                </span>
              </Fragment>
            ))}
          </p>
        </div>

        <div className={clsx(s.buttonWrapper)}>
          <div className={clsx(s.line)}></div>
          <button className={clsx(s.button)}>
            <div className={clsx(s.border, s.leftBottom)}></div>
            <div className={clsx(s.border, s.bottom)}></div>
            <div className={clsx(s.border, s.right)}></div>
            <div className={clsx(s.border, s.top)}></div>
            <div className={clsx(s.border, s.leftTop)}></div>
            {buttonText || 'Explorar'}
          </button>
        </div>
      </Link>
    </div>
  )
}

export default ProjectCard
