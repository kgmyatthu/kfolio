import type { NextPage } from 'next'
import fs from 'fs';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { Article, PrismaClient } from '@prisma/client';
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
import { AiOutlineLink } from 'react-icons/ai';
import ReactDOMServer from 'react-dom/server';
import pickHeadingFromAST from '../../../utils/pickHeadingFromAst';
import markdownToAST from '../../../utils/markdownToAst';
import parseHeadingAST from '../../../utils/parseHeadingAST';
import TOC from '../../../component/toc/toc.compoment';

const Article: NextPage<any> = ({slug, title, body, date, tags}) => {
  useEffect(() => {
    console.log(tags)
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
      </div>
      <div className={css(styles, 'child col-2nd')}>
        <ReactMarkdown 
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
          onChangeHeading={(headingList) => {
            console.log(headingList)
          }}
          liClassName="li"
          activeAnchorClassName="activeAnchor"
        />
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(Article), {
  ssr: false
})


const prisma = new PrismaClient()
export async function getStaticPaths(){

  const articles = await prisma.article.findMany();

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
  const article = await prisma.article.findUnique({
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
