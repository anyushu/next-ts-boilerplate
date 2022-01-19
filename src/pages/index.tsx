import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import React from 'react'
import Layout from 'components/templates/Layout'

const Home: NextPage = () => {
  return (
    <>
      <NextSeo title="トップページ" />
      <Layout>Hello World !</Layout>
    </>
  )
}

export default Home
