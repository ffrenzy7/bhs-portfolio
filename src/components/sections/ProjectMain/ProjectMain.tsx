import clsx from 'clsx'

import s from '@/components/sections/ProjectMain/ProjectMain.module.scss'

const ProjectMain = () => {
  return (
    <main className={clsx(s.main)}>
      <h2 className={clsx(s.title)}>Título</h2>

      <p className={clsx(s.content)}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium magni facere
        animi, sunt culpa, rem laborum aspernatur quia mollitia, officia delectus adipisci
        voluptate? Dolorem, ex aspernatur accusamus nostrum dolores eum illo quos
        perspiciatis quisquam animi assumenda illum commodi praesentium debitis adipisci,
        accusantium exercitationem? Obcaecati illo iste impedit, soluta libero nostrum.
      </p>

      <p className={clsx(s.content)}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla accusantium animi
        omnis quod aspernatur facere modi distinctio possimus labore quia illo, sapiente
        ea deleniti dicta, harum molestias dolore necessitatibus earum sed ab adipisci vel
        a! Quae quos nihil quaerat animi voluptatem, non corporis tempora hic, a ipsam
        fugit beatae officia nemo veniam sed voluptates! Rerum facere, magnam ipsum error
        officia voluptatem alias omnis debitis quibusdam! Placeat porro vitae, aperiam
        magni mollitia reiciendis minima maiores voluptatem sequi totam blanditiis nulla
        deleniti ipsa quidem laboriosam possimus odit. Incidunt exercitationem eum ex vero
        voluptas! Officiis tempore quidem cupiditate, temporibus quos omnis odit ea.
      </p>
    </main>
  )
}

export default ProjectMain
