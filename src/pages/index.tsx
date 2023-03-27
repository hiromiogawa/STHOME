import PageHead from '@/components/common/PageHead'
import Image from 'next/image'
import Link from 'next/link'

import Layout from '@/components/common/Layout'
import FirstView from '@/components/molecules/FirstView'

import Vision from '@/components/organisms/Vision'

import Contents from '@/components/common/Contents'

import Button1 from '@/components/atoms/button/Button1'
import Col2 from '@/components/molecules/Col2'
import img1 from '@/images/index/Business_ph01.png'
import TextButtonArea from '@/components/organisms/TextButtonArea'

const Home = () => {
  return (
    <Layout>
      <PageHead />
      <FirstView />
      <Vision />
      <section>
        <Contents>
          <Col2>
            {[
              <TextButtonArea
                key="col2"
                heading={{
                  children: 'VISION',
                  tag: 'h1'
                }}
                text={{
                  children: `子供の頃、空を走る車を想像したことはありませんか？<br>
                  未来は『バック・トゥ・ザ・フューチャー』のような世界が現実になるかもしれません。<br>
                  私たちは、未来の技術と建築を組み合わせ、より豊かな生活を手軽に実現するお手伝いをしています。<br>
                  あなたも、私たちのサービスをご利用いただければ、未来のモビリティに対応した住まいを手に入れ、新しいライフスタイルを手軽に始めることができます。`
                }}
                button={{
                  href: '/',
                  children: 'aaaa'
                }}
              />,
              <Image key="col1" src={img1} alt={''} />
            ]}
          </Col2>
        </Contents>
      </section>
      <Col2>{['aaa', 'bbb']}</Col2>
      <Button1 href="">aaa</Button1>
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
