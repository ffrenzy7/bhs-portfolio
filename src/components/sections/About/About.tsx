import clsx from 'clsx'

import s from './About.module.scss'

const About = () => {
  return (
    <section className={clsx(s.about)}>
      <span className={clsx(s.backTitle)}>Sobre Mim</span>

      <div className={clsx(s.content)}>
        <h2 className={clsx(s.title)}>
          Sobre Mim<span className={clsx(s.dash)}>_</span>
        </h2>

        <p className={clsx(s.description)}>
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
        </p>
      </div>
    </section>
  )
}

export default About
