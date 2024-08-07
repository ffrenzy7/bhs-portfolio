import clsx from 'clsx'

import ScrollingText from '@/components/ui/ScrollingText'
import RichTextAbout from '@/components/ui/RichTextAbout'

import type { IAbout } from '@/components/sections/About/AboutTypes'

import s from '@/components/sections/About/About.module.scss'

const About = ({ data }: IAbout) => {
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

        <RichTextAbout
          value={data?.richTextAbout?.body}
          // className={clsx(s.description)}
        />
      </div>
    </section>
  )
}

export default About
