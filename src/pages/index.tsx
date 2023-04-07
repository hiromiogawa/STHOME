import PageHead from '@/components/common/PageHead'
import Image, { ImageProps } from 'next/image'
import Link from 'next/link'

import Layout from '@/components/common/Layout'
import FirstView from '@/components/molecules/FirstView'
import Vision from '@/components/organisms/Vision'
import Business from '@/components/organisms/Business'
import Record from '@/components/organisms/Record'

import Contents from '@/components/common/Contents'

import { useCallback } from 'react'
import ParticleData from '@/data/particles.json'
import { loadFull } from 'tsparticles'
import Particles from 'react-tsparticles'
import type { ISourceOptions, Container, Main } from 'tsparticles-engine/types/'
import styled from 'styled-components'

const Home = () => {
  const particlesInit = useCallback(async (engine: Main) => {
    await loadFull(engine)
  }, [])

  // const particlesLoaded = useCallback(async (container?: Container) => {
  //   await console.log(container)
  // }, [])
  return (
    <Layout>
      <PageHead />

      <StyledParticles
        id="tsparticles"
        init={particlesInit}
        //loaded={particlesLoaded}
        options={ParticleData as ISourceOptions}
      />
      <FirstView />
      <Vision />
      <Business />
      <Record />
    </Layout>
  )
}

export default Home

const StyledParticles = styled(Particles)`
  position: fixed;
  width: 100%;
  height: 100vh;
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
