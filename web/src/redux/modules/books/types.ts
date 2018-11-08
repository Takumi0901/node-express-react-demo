export interface IBooks {
  list: IBook[]
}

export interface IBook {
  id: number
  name: string
  description: string
  createdAt: string
  updatedAt?: string
  deleted: number
  author?: string
  url?: string
  categoryId?: number
  picture?: string
}
