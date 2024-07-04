import { Poppins } from 'next/font/google'
import type { AppProps } from 'next/app'

import Menu from '@/components/ui/Menu'
import BackToTop from '@/components/ui/BackToTop'

import 'wipe.css'
import '@/styles/styles.scss'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={poppins.className}>
      <Menu />
      <BackToTop />
      <Component {...pageProps} />
    </div>
  )
}
