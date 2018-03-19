import { combineReducers } from 'redux'
import categories from './categories'
import posts from './posts'
import comments from './comments'

export default combineReducers({
  posts,
  categories,
  comments
})