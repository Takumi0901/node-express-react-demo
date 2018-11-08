import * as Redux from 'redux'
import { IStore } from 'src/redux/IStore'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'
import { countUpReducer } from 'src/redux/modules/counter'
import { booksReducer } from 'src/redux/modules/books'

const rootReducer: Redux.Reducer<IStore> = Redux.combineReducers<IStore>({
  routing: routerReducer,
  form: formReducer,
  counter: countUpReducer,
  books: booksReducer
})
export default rootReducer
