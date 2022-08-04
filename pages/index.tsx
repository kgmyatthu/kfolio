import { Article } from '@prisma/client'
import dynamic from 'next/dynamic';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import About from '../component/about/about.component'
import ArticleCard from '../component/article/articleCard.component'
import Intro from '../component/intro/intro.component'
import Nav from '../component/nav/nav.component'
import Work from '../component/work/work.component'
import db from '../storage'
import styles from './index.module.css'
import RecentArticles from '../component/article/recentArticles.component';

const Home: NextPage<any> = ({recentArticles}) => {
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
        <RecentArticles recentArticles={recentArticles}/>
        <div style={{"height":"100vh"}}></div>
      </Nav>
    </>
  )
}



export default dynamic(() => Promise.resolve(Home), {
  ssr: false
})


export async function getStaticProps() {
    let articles = await db.article.findMany();
    articles = articles.slice(-4);


    const recentArticles = []

    for await(const t of articles){
      const x = await db.article.findUnique({
        where: { slug: t.slug },
        include: { tags: true }
      }) 
      recentArticles.push( {
        title:x?.slug.replace(/-/g, ' '),
        slug: x?.slug,
        body: x?.body,
        date: x?.date.toJSON(),
        tags: x?.tags.map(tag => tag.name)
      })
    }

  
  return {
    props: {
      recentArticles: recentArticles
    },
  };
}

