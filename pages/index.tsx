import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Intro from '../component/intro/intro.component'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Intro/>
    </>
  )
}

export default Home
