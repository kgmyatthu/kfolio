import { NextPage } from "next"
import Link from "next/link"
import ArticleCard from "./articleCard.component"
import styles from './recentArticles.module.css'


const RecentArticles: NextPage<any> = ({recentArticles}) => {
  return (
    <div className={styles.container}>
        <h1 className={styles.header}>Recent Articles</h1>
        <div className={styles.articles}>
        {recentArticles.map((t:any, i: any) =>{
          return <ArticleCard 
            key={i}
            title={t.title}
            slug={t.slug}
            date={new Date(t.date)}
            body={t.body}
            tags={t.tags} />
        })}
        </div>
        <Link href='/article'>
          <div className={styles.button}>
            MORE ARTICLES
          </div>
        </Link>
        <div style={{height:"5vh"}}></div>
    </div>
  )
}

export default RecentArticles
