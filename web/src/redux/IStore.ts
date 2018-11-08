import { ICounter } from 'src/redux/modules/counter/types'
import { IBooks } from 'src/redux/modules/books/types'

export interface IStore {
  routing: any
  counter: ICounter
  books: IBooks
  form: any
}
