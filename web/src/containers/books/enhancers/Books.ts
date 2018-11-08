import { connect } from 'react-redux'
import { IStore } from 'src/redux/IStore'
import { compose, lifecycle } from 'recompose'
import { failedBooks, requestBooks, successBooks } from 'src/redux/modules/books/index'
import { IBooks } from 'src/redux/modules/books/types'
import API from 'src/api/API'

export interface Props {
  books: IBooks
  getBooks(): void
}

const mapStateToProps = (state: IStore) => state

const mapDispatchToProps = dispatch => ({ dispatch })

const mergeProps = (state: IStore, { dispatch }, props: Props) => {
  return {
    ...props,
    books: state.books,
    getBooks() {
      dispatch(requestBooks())
      API.getBooks()
        .then(res => dispatch(successBooks(res.body)))
        .catch(err => dispatch(failedBooks(err)))
    }
  }
}

export const booksEnhancer = compose<Props, {}>(
  connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
  ),
  lifecycle({
    componentDidMount() {
      this.props.getBooks()
    }
  })
)
