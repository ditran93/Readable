import {
  GET_ALL_CATEGORIES,
} from '../actions/types'

export default function categories (state = [], action) {
  const { categories } = action
  switch(action.type) {
    case GET_ALL_CATEGORIES:
      return state = categories
    default:
      return state
  }
}