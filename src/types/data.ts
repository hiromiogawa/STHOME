export type NavigationType = {
  href: string
  text: string
  showInHeader: boolean
  showInFooter: boolean
}[]

export type CategoryType = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  name: string
}

export type RecordType = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title: string
  content: string
  eyecatch: {
    url: string
    height: number
    width: number
  }
  category: CategoryType[]
}

export type RecordsType = RecordType[]
