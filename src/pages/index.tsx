import PageHead from '@/components/common/PageHead'
import Image from 'next/image'
import Link from 'next/link'

import Layout from '@/components/common/Layout'
import FirstView from '@/components/molecules/FirstView'

import Vision from '@/components/molecules/Vision'

import Contents from '@/components/common/Contents'
import Heading1 from '@/components/atoms/heading/Heading1'
import Text2 from '@/components/atoms/text/Text2'
import Text1 from '@/components/atoms/text/Text1'

const Home = () => {
  return (
    <Layout>
      <PageHead />
      <FirstView />
      <Vision />
      <section>
        <Contents>
          <div>
            <Heading1>VISION</Heading1>
            <Text2>
              建築と未来の技術が、新しいライフスタイルを実現します。
            </Text2>
            <Text1>
              子供の頃、空を走る車を想像したことはありませんか？
              <br />
              未来は『バック・トゥ・ザ・フューチャー』のような世界が現実になるかもしれません。
              <br />
              私たちは、未来の技術と建築を組み合わせ、より豊かな生活を手軽に実現するお手伝いをしています。
              <br />
              あなたも、私たちのサービスをご利用いただければ、未来のモビリティに対応した住まいを手に入れ、新しいライフスタイルを手軽に始めることができます。
            </Text1>
          </div>
        </Contents>
      </section>
    </Layout>
  )
}

export default Home

// データをテンプレートに受け渡す部分の処理を記述します
// export const getStaticProps = async () => {
//   const navigationData = await getNavigation()

//   return {
//     props: {
//       navigation: navigationData.contents
//     }
//   }
// }
