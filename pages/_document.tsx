import Document, {Html, Head, Main, NextScript} from 'next/document'
import MetaConfig from '../component/meta/meta.component'
export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            <meta name="title" content={"Kaung Myatthu | portfolio"}/>
            <meta name="description" content={"Read technical articles on math and computer science"}/>

            <meta property="og:type" content="website"/>
            <meta property="og:url" content={"kaungmyatthu.dev"}/>
            <meta property="og:title" content={"Kaung Myatthu | portfolio"}/>
            <meta property="og:description" content={"Read technical articles on math and computer science"}/>
            <meta property="og:image" content={'/banner.png'}/>

            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content={"kaungmyatthu.dev"}/>
            <meta property="twitter:title" content={"Kaung Myatthu | portfolio"}/>
            <meta property="twitter:description" content={"Read technical articles on math and computer science"}/>
            <meta property="twitter:image" content={'/banner.png'}/>
          </Head>
          <body>
            <Main/>
          </body>
          <NextScript/>
      </Html>
    )
  }
}
