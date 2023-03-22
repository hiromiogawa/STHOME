import client from '@/libs/client'

export const getNavigation = async (limit = 10) => {
  const data = await client.get({
    endpoint: 'navigation',
    queries: { limit: 10 }
  })

  return {
    contents: data.contents
  }
}
