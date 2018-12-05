export default interface APIResponse<T> extends APIError {
  status: number
  body?: T
  error?: {
    code?: string
    message?: string
  }
  errors?: string[]
}

export interface APIError {
  error?: {
    code?: string
    message?: string
  }
  errors?: string[]
}

export interface User {
  id: string
  name: string
  created_at?: string
  updated_at?: string
}
