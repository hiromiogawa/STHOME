import client from '@/libs/client'
import { PER_PAGE } from '@/config'

export const getRecords = async (
  limit = PER_PAGE,
  offset = 0,
  orders = '-createdAt'
) => {
  const data = await client.get({
    endpoint: 'record',
    queries: { limit: limit, offset: offset, orders: orders }
  })

  return {
    contents: data.contents,
    totalCount: data.totalCount,
    offset: data.offset,
    limit: data.limit
  }
}

export const getRecordsByCategory = async (
  categoryId: string,
  limit = PER_PAGE,
  offset = 0,
  orders = '-createdAt'
) => {
  const data = await client.get({
    endpoint: 'record',
    queries: {
      limit: limit,
      offset: offset,
      orders: orders,
      filters: `category[contains]${categoryId}`
    }
  })

  return {
    contents: data.contents
  }
}

export const getRecord = async (id: string) => {
  const data = await client.get({ endpoint: 'record', contentId: id })
  return data
}

export const getCategories = async () => {
  const data = await client.get({
    endpoint: 'categories'
  })

  return {
    contents: data.contents
  }
}

export const getCategory = async (id: string) => {
  const data = await client.get({ endpoint: 'categories', contentId: id })
  return data
}
