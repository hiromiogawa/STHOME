import Head from 'next/head'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import Header from '../organisms/Header'

const GlobalStyle = createGlobalStyle`
    ${reset}
    /* other styles */
    *, *::after, *::before {
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
    }
`

type PropTypes = {
  children: React.ReactNode
}

const Layout = ({ children }: PropTypes) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout
