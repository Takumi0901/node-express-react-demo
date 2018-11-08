import { Record } from 'immutable'
import { IBooks } from 'src/redux/modules/books/types'

export class BooksRecord extends Record({ list: [], isFetching: false, isSucceeded: false, isFailed: false })
  implements IBooks {
  request() {
    return this.withMutations(s => s.set('isFetching', true))
  }
  success(payload) {
    return this.withMutations(s =>
      s
        .set('isSucceeded', true)
        .set('isFetching', false)
        .set('list', payload)
    )
  }
  failed() {
    return this.withMutations(s => s.set('isFailed', true).set('isSucceeded', false))
  }
}
