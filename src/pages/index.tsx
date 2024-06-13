import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import Metadata from '@/components/core/Metadata'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Metadata
        title='BHS Portfolio'
        description='Bruno Henrique Engenheiro'
        metatags='portfolio, engenheiro, bhs'
      />

      <h1>BHS</h1>
    </>
  )
}
