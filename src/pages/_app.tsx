import { useRouter } from 'next/router'
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
  const isStudio = useRouter().pathname.includes('[...studio]')

  return isStudio ? (
    <Component {...pageProps} />
  ) : (
    <div className={poppins.className}>
      <Menu />
      <BackToTop />
      <Component {...pageProps} />
    </div>
  )
}
