import type { NextPage } from 'next'
import fs from 'fs';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { Article } from '@prisma/client';
import remarkGfm from 'remark-gfm';
import rehypePrism from 'rehype-prism-plus';
import remarkMath from 'remark-math';
import rehypeMathJaxSvg from 'rehype-mathjax';
import dynamic from 'next/dynamic';
import readingTime from 'reading-time';
import remarkHeadingGap from 'remark-heading-gap';
import styles from './article.module.css';
import { classNameHelper as css } from '../../../utils/utils';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { useEffect } from 'react';
import { AiFillGithub, AiOutlineHome, AiOutlineLink} from 'react-icons/ai';
import { RiArticleLine } from 'react-icons/ri';
import { BiShare } from 'react-icons/bi';
import ReactDOMServer from 'react-dom/server';
import TOC from '../../../component/toc/toc.compoment';
import Tag from '../../../component/tag/tag.component';
import Link from 'next/link';
import db from '../../../storage';

const Article: NextPage<any> = ({slug, title, body, date, tags}) => { useEffect(() => {
    const els = Array.from(
      document.getElementsByClassName('icon-link')
    );
    els.map(el => {
      el.innerHTML = ReactDOMServer.renderToString(<AiOutlineLink/>);
    })
  }, []);
  return (
    <div className={styles['container']}>
      <div className={css(styles, 'child col-1st')}>

       <div> <Link href="/"><AiOutlineHome/></Link>        </div> 
       <div> <Link href="/article"><RiArticleLine/></Link> </div> 
       <div> <Link href="https://github.com/kgmyatthu"><AiFillGithub/></Link>  </div> 
       <div> <Link href="https://github.com/kgmyatthu"><BiShare/></Link>  </div> 
      </div>
      <div className={css(styles, 'child col-2nd')}>
        <Tag tags={tags}/>
        <br/>
        <div className={styles['article-meta']}>  
          {new Date(date)
            .toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) } 
          | {readingTime(body).text}
        </div>
        <ReactMarkdown 
          className={styles.body}
          remarkPlugins={[remarkGfm, remarkMath, remarkHeadingGap]}
          rehypePlugins={[
            [rehypePrism, {showLineNumbers: true}], 
            rehypeMathJaxSvg, 
            rehypeSlug,
            rehypeAutolinkHeadings
            ]}>
          {body}
        </ReactMarkdown>
      </div>
      <div className={css(styles, 'child col-3rd')}>
        <TOC
          markdown={body}
          hyperlink={true}
          liClassName={styles["toc-li"]}
          activeAnchorClassName="activeAnchor"
        />
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(Article), {
  ssr: false
})


export async function getStaticPaths(){

  const articles = await db.article.findMany();

  const paths = articles.map( (article: Article) => {
    const { slug } = article
    return {
      params: { slug: slug }
    }
  })
  
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }: any) {
  // const fileName = fs.readFileSync(`articles/${slug.replace(/-/g,'_')}.md`, 'utf-8');
  // const { data: frontmatter, content } = matter(fileName);
  const article = await db.article.findUnique({
    where: { slug: slug },
    include: { tags: true }
  }) 
  
  return {
    props: {
      title: article?.slug.replace(/-/g, ' '),
      slug: article?.slug,
      body: article?.body,
      date: article?.date.toJSON(),
      tags: article?.tags.map(tag => tag.name)
    },
  };
}
