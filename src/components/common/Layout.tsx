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
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@500&family=Raleway:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
    </>
  )
}
