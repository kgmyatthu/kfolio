import { NextPage } from "next"
import ArticleCard from "./articleCard.component"
import styles from './recentArticles.module.css'


const RecentArticles: NextPage<any> = ({recentArticles}) => {
  return (
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
  )
}

export default RecentArticles
