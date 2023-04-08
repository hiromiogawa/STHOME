import client from '@/libs/client'

export const getRecords = async (
  limit = 10,
  offset = 0,
  orders = '-createdAt'
) => {
  const data = await client.get({
    endpoint: 'record',
    queries: { limit: limit, offset: offset, orders: orders }
  })

  return {
    contents: data.contents
  }
}
