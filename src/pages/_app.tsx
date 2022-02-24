import '@/styles/globals.css'
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import { defaultSeo } from '@/libs/next-seo.config'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <DefaultSeo {...defaultSeo} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
