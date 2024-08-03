import clsx from 'clsx'

import ScrollingText from '@/components/ui/ScrollingText'
import RichTextAbout from '@/components/ui/RichTextAbout'

import type { IAbout } from '@/components/sections/About/AboutTypes'

import s from '@/components/sections/About/About.module.scss'

const About = ({ data }: IAbout) => {
  console.log(data)

  return (
    <section className={clsx(s.about)} id="about">
      <ScrollingText className={clsx(s.backTitleWrapper)}>
        <span className={clsx(s.backTitle)}>{data?.backTitle || 'Sobre Mim'}</span>
      </ScrollingText>

      <div className={clsx(s.content)}>
        <h2 className={clsx(s.title)}>
          {data?.title || 'Sobre Mim'}
          <span className={clsx(s.underscore)}>_</span>
        </h2>

        {/* <p className={clsx(s.description)}>
          Lorem ipsum dolor sit amet{' '}
          <span className={clsx(s.highlight)}>
            <span className={clsx(s.highlightText)}>consectetur</span>
          </span>{' '}
          adipisicing elit. Magni, quidem. Lorem ipsum dolor sit amet consectetur{' '}
          <span className={clsx(s.highlight)}>
            <span className={clsx(s.highlightText)}>adipisicing</span>
          </span>{' '}
          elit. Magni, quidem. Lorem ipsum dolor sit{' '}
          <span className={clsx(s.highlight)}>
            <span className={clsx(s.highlightText)}>amet</span>
          </span>
          , consectetur adipisicing elit.
        </p> */}

        <RichTextAbout
          value={data?.richTextAbout?.body}
          className={clsx(s.description)}
        />
      </div>
    </section>
  )
}

export default About
