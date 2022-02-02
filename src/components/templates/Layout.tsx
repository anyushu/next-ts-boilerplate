import { ReactNode } from 'react'
import Footer from 'components/templates/Footer'
import Header from 'components/templates/Header'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
