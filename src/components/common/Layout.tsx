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

interface props {
  readonly children: React.ReactNode
}

export default function Layout({ children }: props) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
    </>
  )
}
