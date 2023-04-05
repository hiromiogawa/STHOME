import PageHead from '@/components/common/PageHead'
import Image, { ImageProps } from 'next/image'
import Link from 'next/link'

import Layout from '@/components/common/Layout'
import FirstView from '@/components/molecules/FirstView'

import Vision from '@/components/organisms/Vision'
import Business from '@/components/organisms/Business'

import Contents from '@/components/common/Contents'

import styled from 'styled-components'
import dammyImg from '@/images/index/dammy.png'
import ContinuousSlider from '@/components/animation/ContinuousSlider'

const Home = () => {
  const slideItems = [
    {
      src: dammyImg,
      alt: 'ダミー',
      href: '/'
    },
    {
      src: dammyImg,
      alt: 'ダミー',
      href: '/'
    },
    {
      src: dammyImg,
      alt: 'ダミー',
      href: '/'
    },
    {
      src: dammyImg,
      alt: 'ダミー',
      href: '/'
    },
    {
      src: dammyImg,
      alt: 'ダミー',
      href: '/'
    },
    {
      src: dammyImg,
      alt: 'ダミー',
      href: '/'
    },
    {
      src: dammyImg,
      alt: 'ダミー',
      href: '/'
    },
    {
      src: dammyImg,
      alt: 'ダミー',
      href: '/'
    },
    {
      src: dammyImg,
      alt: 'ダミー',
      href: '/'
    },
    {
      src: dammyImg,
      alt: 'ダミー',
      href: '/'
    },
    {
      src: dammyImg,
      alt: 'ダミー',
      href: '/'
    },
    {
      src: dammyImg,
      alt: 'ダミー',
      href: '/'
    }
  ]

  return (
    <Layout>
      <PageHead />
      <FirstView />
      <Vision />
      <Business />
      <StyledPastRecord>
        <StyledBg />
        <ContinuousSlider items={slideItems} />
      </StyledPastRecord>
    </Layout>
  )
}

export default Home

const StyledPastRecord = styled.section`
  margin-top: 148px;
  position: relative;
  padding-bottom: 48px;
`

const StyledBg = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #f4f3f1;
  width: 100%;
  height: 75%;
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
