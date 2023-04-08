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

// タイプ
import type { Records } from '@/types/data'

import { useRef, useState } from 'react'
import useScrollTrigger from '@/hooks/useScrollTrigger'
import img1 from '@/images/index/Business_ph01.png'
import Heading2 from '@/components/atoms/heading/Heading2'
import FadeInAnimation from '@/components/animation/FadeInAnimation'
import Col2TextImg from '@/components/molecules/Col2TextImg'

type PropTypes = {
  records: Records
}

const Home = ({ records }: PropTypes) => {
  console.log(records)

  const slideCards = records.map((record) => ({
    href: `/record/detail/${record.id}`,
    src: record.eyecatch.url,
    alt: record.title,
    width: record.eyecatch.width,
    height: record.eyecatch.height
  }))

  const elementsRef = useRef(null)
  const inView = useScrollTrigger(elementsRef)
  return (
    <Layout>
      <PageHead />
      <FirstView />
      <Vision />
      <Business />
      <StyledRecord slideCards={slideCards} />
      <StyledCompany />
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
  const recordData = await getRecords()

  return {
    props: {
      records: recordData.contents
    }
  }
}
