import { Record } from 'immutable'
import { IUsers } from 'src/redux/modules/users/types'

export class UsersRecord extends Record({ list: [], isFetching: false, isSucceeded: false, isFailed: false })
  implements IUsers {
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
