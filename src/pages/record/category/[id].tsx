import { getCategories, getRecordsByCategory } from '@/functions/fetch'

import type { GetStaticProps } from 'next'
import type { RecordsType, CategoriesType } from '@/types/data'
import type { ParsedUrlQuery } from 'node:querystring'

type PropTypes = {
  records: RecordsType
}

const Category = ({ records }: PropTypes) => {
  return (
    <>
      {records.map((record) => {
        return <p key={record.title}>{record.title}</p>
      })}
    </>
  )
}

export default Category

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const categoriesData: { contents: CategoriesType } = await getCategories()
  const paths = categoriesData.contents.map(
    (content) => `/record/category/${content.id}`
  )
  return { paths, fallback: false }
}

type ParamsTypes = ParsedUrlQuery & {
  id: string
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps: GetStaticProps<
  { records: RecordsType },
  ParamsTypes
> = async (context) => {
  const recordsData: { contents: RecordsType } = await getRecordsByCategory(
    context.params!.id
  )

  return {
    props: {
      records: recordsData.contents
    }
  }
}
