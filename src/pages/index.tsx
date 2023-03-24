import PageHead from '@/components/common/PageHead'
import Image from 'next/image'
import Link from 'next/link'

import Layout from '@/components/common/Layout'
import FirstView from '@/components/molecules/FirstView'

import styled from 'styled-components'
import { useRef } from 'react'
import useScrollTrigger from '@/hooks/useScrollTrigger'
import Heading1 from '@/components/atoms/heading/Heading1'

const Home = () => {
  const testRef = useRef(null)
  const testRef2 = useRef(null)
  const inView = useScrollTrigger(testRef)
  const inView2 = useScrollTrigger(testRef2)
  console.log(inView)
  console.log(inView2)
  return (
    <Layout>
      <PageHead />
      <FirstView />
      <StyledDiv ref={testRef}>
        <Heading1>みだし</Heading1>
      </StyledDiv>
      <StyledDiv ref={testRef2}>
        <Heading1>みだし2</Heading1>
      </StyledDiv>
    </Layout>
  )
}

export default Home

const StyledDiv = styled.div`
  margin-top: 100vh;
`

// データをテンプレートに受け渡す部分の処理を記述します
// export const getStaticProps = async () => {
//   const navigationData = await getNavigation()

//   return {
//     props: {
//       navigation: navigationData.contents
//     }
//   }
// }
