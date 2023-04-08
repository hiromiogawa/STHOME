export type NavigationType = {
  href: string
  text: string
  showInHeader: boolean
  showInFooter: boolean
}[]

export type Category = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  name: string
}

export type Record = {
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
  category: Category[]
}

export type Records = Record[]
