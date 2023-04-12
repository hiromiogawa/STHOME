import { getRecord, getRecords } from '@/functions/fetch'
import Html from '@/components/elements/Html'

import type { GetStaticProps } from 'next'
import type { RecordType, RecordsType } from '@/types/data'
import type { ParsedUrlQuery } from 'node:querystring'

type PropTypes = RecordType

export default function BlogId({
  id,
  title,
  publishedAt,
  content,
  category
}: PropTypes) {
  return (
    <main>
      <h1>{title}</h1>
      <p>{publishedAt}</p>
      <Html>{content}</Html>
    </main>
  )
}

type ParamsTypes = ParsedUrlQuery & {
  id: string
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const recordsData: { contents: RecordsType } = await getRecords()
  const paths = recordsData.contents.map(
    (content) => `/record/detail/${content.id}`
  )
  return { paths, fallback: false }
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps: GetStaticProps<RecordType, ParamsTypes> = async (
  context
) => {
  const recordData: RecordType = await getRecord(context.params!.id)

  return {
    props: recordData
  }
}
