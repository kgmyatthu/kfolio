import type { NextPage } from "next";
import Head from 'next/head'

interface MetaProps {
  title: string
  description: string
  imagePath: string
  url: string
}
const MetaConfig: NextPage<MetaProps> = ({title, description, imagePath, url}) => {
  return (
   <Head>
      <meta name="title" content={title}/>
      <meta name="description" content={description}/>

      <meta property="og:type" content="website"/>
      <meta property="og:url" content={url}/>
      <meta property="og:title" content={title}/>
      <meta property="og:description" content={description}/>
      <meta property="og:image" content={imagePath}/>

      <meta property="twitter:card" content={title}/>
      <meta property="twitter:url" content={url}/>
      <meta property="twitter:title" content={title}/>
      <meta property="twitter:description" content={description}/>
      <meta property="twitter:image" content={imagePath}/>
   </Head>
  )
}

export default MetaConfig
