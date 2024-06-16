import { Inter } from 'next/font/google'
import type { AppProps } from 'next/app'

import Menu from '@/components/ui/Menu'

import 'wipe.css'
import '@/styles/styles.scss'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Menu />
      <Component {...pageProps} />
    </>
  )
}
