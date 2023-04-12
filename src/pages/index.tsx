import styled from 'styled-components'
import { getRecords } from '@/functions/fetch'

// コンポーネント
import PageHead from '@/components/common/PageHead'
import Image, { ImageProps } from 'next/image'
import Link from 'next/link'
import Contents from '@/components/common/Contents'
import Layout from '@/components/common/Layout'
import FirstView from '@/components/molecules/FirstView'
import Vision from '@/components/organisms/Vision'
import Business from '@/components/organisms/Business'
import Record from '@/components/organisms/Record'
import Company from '@/components/organisms/Company'
import Footer from '@/components/organisms/Footer'

// タイプ
import type { RecordsType } from '@/types/data'

type PropTypes = {
  records: RecordsType
}

const Home = ({ records }: PropTypes) => {
  const slideCards = records.map((record) => ({
    href: `/record/detail/${record.id}`,
    src: record.eyecatch.url,
    alt: record.title,
    width: record.eyecatch.width,
    height: record.eyecatch.height
  }))

  return (
    <Layout>
      <PageHead />
      <FirstView />
      <Vision />
      <Business />
      <StyledRecord slideCards={slideCards} />
      <StyledCompany />
      <Footer />
    </Layout>
  )
}

export default Home

const StyledRecord = styled(Record)`
  margin-top: 148px;
`

const StyledCompany = styled(Company)`
  margin-top: 128px;
`

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const recordsData = await getRecords()

  return {
    props: {
      recordsData.contents
    }
  }
}
