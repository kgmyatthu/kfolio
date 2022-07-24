import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Tag from '../tag/tag.component'
import styles from './articleCard.module.css'
import readingTime from 'reading-time';
import { useEffect } from 'react'

type ArticleCardProp = {
    title: string
    slug: string
    body: string
    tags: string[]
    date: Date
}
const ArticleCard: NextPage<ArticleCardProp> = ({title, slug, body, date, tags}) => {

    const stringLimiter = (str: string) => {

        let titleArr = str.split(' ')

        if(titleArr.length > 24){
           titleArr = titleArr.slice(0,23)
           titleArr.push('...')
        }

        return titleArr.join(' ')
    }

    useEffect(()=>{
        
        
    },[])
  return (
    <Link href={`/article/${slug}`}>
        <div className={styles.container}>
            <div className={styles.date}>{date.toDateString()}</div>
            <br/>
            <div className={styles.title}>
                {stringLimiter(title)}
            </div>
            <br/>
            <Tag tags={tags} />
            <br/>
            <small className={styles.readtime}>{readingTime(body).text}</small>
            <br/>

        </div>
    </Link>
  )
}

export default ArticleCard
