import PageHead from '@/components/common/PageHead'
import Image from 'next/image'
import Link from 'next/link'

import Layout from '@/components/common/Layout'
import FirstView from '@/components/molecules/FirstView'

export default function Home() {
  return (
    <Layout>
      <PageHead />
      <FirstView />
    </Layout>
  )
}

// データをテンプレートに受け渡す部分の処理を記述します
// export const getStaticProps = async () => {
//   const navigationData = await getNavigation()

//   return {
//     props: {
//       navigation: navigationData.contents
//     }
//   }
// }
