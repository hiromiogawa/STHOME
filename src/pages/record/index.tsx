import { getRecords } from '@/functions/fetch'

// タイプ
import type { RecordsType } from '@/types/data'

type PropTypes = {
  records: RecordsType
}

const Record = ({ records }: PropTypes) => {
  return (
    <>
      {records.map((record) => {
        return <p key={record.title}>{record.title}</p>
      })}
    </>
  )
}

export default Record

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const recordsData = await getRecords()

  return {
    props: {
      records: recordsData.contents
    }
  }
}
