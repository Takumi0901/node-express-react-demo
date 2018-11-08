import { BooksRecord } from 'src/redux/modules/books/records'
import { Book } from 'src/api/response'
import actionCreatorFactory from 'typescript-fsa'
import { reducerWithInitialState } from 'typescript-fsa-reducers/dist'

// Action types
const actionCreator = actionCreatorFactory()
export enum ActionTypes {
  REQUEST = 'get/books/REQUEST',
  SUCCESS = 'get/books/SUCCESS',
  FAILED = 'get/books/FAILED'
}

export const requestBooks = actionCreator(ActionTypes.REQUEST)
export const successBooks = actionCreator<Book[]>(ActionTypes.SUCCESS)
export const failedBooks = actionCreator(ActionTypes.FAILED)

// Reducer
export const booksReducer = reducerWithInitialState(new BooksRecord())
  .case(requestBooks, state => state.request())
  .case(successBooks, (state, payload) => state.success(payload))
  .case(failedBooks, state => state.failed())
