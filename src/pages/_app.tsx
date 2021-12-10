import 'styles/globals.css'
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import { defaultSeo } from 'next-seo.config'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo {...defaultSeo} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
