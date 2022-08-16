
import { Article, Tag } from '@prisma/client';
import type { NextPage } from 'next'
import dynamic from 'next/dynamic';
import ArticleCard from '../../component/article/articleCard.component';
import MetaConfig from '../../component/meta/meta.component';
import Nav from '../../component/nav/nav.component';
import db from '../../storage';
import styles from './article.module.css';

type ArticleHomeProps = {
  articles: Article[]
  tags: Tag[]
}
const ArticleHome: NextPage<ArticleHomeProps> = ({articles, tags}) => {  
  return (
      <>
        <MetaConfig
          title="Kaung Myat Thu | Portfolio"
          description='Kaung is a software engineer, specifically build things for the web.'
          url="https://kaungmyatthu.dev"
          imagePath='/'
          />
      <Nav>       
        <div className={styles.container}>
          <div className={styles.articles}>
            {articles.map((t:any, i: any) =>{
              return <ArticleCard 
                key={i}
                title={t.title}
                slug={t.slug}
                date={new Date(t.date)}
                body={t.body}
                tags={t.tags} />
            })}
          </div>
        </div>
      </Nav>
      </>
  );
}

export default dynamic(() => Promise.resolve(ArticleHome), {
  ssr: false
})

export async function getStaticProps() {

  const tags = await db.tag.findMany()
  //   include: { articles: true }
  // })
  const articles = await db.article.findMany({
    include: { tags: true },
  });
  const _articles = articles.map((t: Article & { tags: Tag[] }) => {
    return {
      title:t?.slug.replace(/-/g, ' '),
      slug: t?.slug,
      date: t?.date.toJSON(),
      body: t?.body,
      tags: t?.tags.map((tag: any) => tag.name)
    }
  })
  
  
  return {
    props: {
      tags: tags,
      articles: _articles
    },
  };
}
