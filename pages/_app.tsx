import '../styles/globals.css'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import Head from 'next/head'

function MyApp({
  Component,
  pageProps,
}: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Courses-rating</title>
        <link key={1} rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />{' '}
    </>
  )
}

export default MyApp
