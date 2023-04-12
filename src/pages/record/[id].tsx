import Router from 'next/router'
import type { GetStaticProps } from 'next'
import type { ParsedUrlQuery } from 'node:querystring'
import type { RecordsType, RecordResData } from '@/types/data'
import { getRecords } from '@/functions/fetch'
import getRange from '@/functions/getRange'
import { PER_PAGE, MAX_LIMIT } from '@/config'
import ReactPaginate from 'react-paginate'

import Link from 'next/link'

type PropTypes = {
  records: RecordsType
  totalCount: number
  currentPage: number
}

const RecordPages = ({ records, totalCount, currentPage }: PropTypes) => {
  const handlePaginate = (selectedItem: { selected: number }) => {
    Router.push(`/record/${selectedItem.selected + 1}`)
  }
  return (
    <>
      {records.map((record) => {
        return <p key={record.title}>{record.title}</p>
      })}
      <ReactPaginate
        pageCount={Math.ceil(totalCount / PER_PAGE)}
        marginPagesDisplayed={currentPage}
        pageRangeDisplayed={3}
        onPageChange={handlePaginate}
      />
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

  const paths = getRange(1, Math.ceil(repos.totalCount / PER_PAGE)).map(
    (repo) => `/record/${repo}`
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
      records: recordsData.contents,
      totalCount: recordsData.totalCount,
      currentPage: context.params!.id
    }
  }
}
