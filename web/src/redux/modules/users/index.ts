import { UsersRecord } from 'src/redux/modules/users/records'
import { User } from 'src/api/response'
import actionCreatorFactory from 'typescript-fsa'
import { reducerWithInitialState } from 'typescript-fsa-reducers/dist'

// Action types
const actionCreator = actionCreatorFactory()
export enum ActionTypes {
  REQUEST = 'get/users/REQUEST',
  SUCCESS = 'get/users/SUCCESS',
  FAILED = 'get/users/FAILED'
}

export const requestUsers = actionCreator(ActionTypes.REQUEST)
export const successUsers = actionCreator<User[]>(ActionTypes.SUCCESS)
export const failedUsers = actionCreator(ActionTypes.FAILED)

// Reducer
export const usersReducer = reducerWithInitialState(new UsersRecord())
  .case(requestUsers, state => state.request())
  .case(successUsers, (state, payload) => state.success(payload))
  .case(failedUsers, state => state.failed())
