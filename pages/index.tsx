import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import About from '../component/about/about.component'
import Intro from '../component/intro/intro.component'
import Nav from '../component/nav/nav.component'
import Work from '../component/work/work.component'

const Home: NextPage = () => {
  return (
    <>
      <Nav>       
        <Head>
          <title>Kaung Myat Thu | Portfolio </title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Intro/>
        <Work/>
        <About/>
        <div style={{height:"100vh"}}></div>
      </Nav>
    </>
  )
}

export default Home
