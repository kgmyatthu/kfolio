import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Intro from '../component/intro/intro.component'
import Work from '../component/work/work.component'

const Home: NextPage = () => {
  return (
    <>
       
      <Head>
        <title>Kaung Myat Thu | Portfolio </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Intro/>
      <Work/>
    </>
  )
}

export default Home
