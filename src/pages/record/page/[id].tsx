import type { GetStaticProps } from 'next'
import type { ParsedUrlQuery } from 'node:querystring'
import type { RecordsType, RecordResData } from '@/types/data'
import { getRecords } from '@/functions/fetch'
import range from '@/functions/range'
import { PER_PAGE, MAX_LIMIT } from '@/config'

type PropTypes = {
  records: RecordsType
}

const RecordPages = ({ records }: PropTypes) => {
  return (
    <>
      {records.map((record) => {
        return <p key={record.title}>{record.title}</p>
      })}
    </>
  )
}

export default RecordPages

type ParamsTypes = ParsedUrlQuery & {
  id: string
}

// 動的なページを作成
export const getStaticPaths = async () => {
  const repos: { contents: RecordsType } & RecordResData = await getRecords(
    MAX_LIMIT
  )

  const paths = range(1, Math.ceil(repos.totalCount / PER_PAGE)).map(
    (repo) => `/record/page/${repo}`
  )

  return { paths, fallback: false }
}

// データを取得
export const getStaticProps: GetStaticProps<
  { records: RecordsType },
  ParamsTypes
> = async (context) => {
  const recordsData = await getRecords(
    PER_PAGE,
    (Number(context.params!.id) - 1) * PER_PAGE
  )

  // const categories = await client.get({ endpoint: 'categories' })

  return {
    props: {
      records: recordsData.contents
    }
  }
}
