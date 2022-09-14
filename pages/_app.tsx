import '../styles/globals.css'
import '../styles/highlight.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return (
        <Component {...pageProps} />
  )
}

export default MyApp
