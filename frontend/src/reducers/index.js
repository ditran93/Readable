import {
  CREATE_POST,
  GET_ALL_CATEGORIES,
  GET_ALL_POSTS,
  DELETE_POST,
  EDIT_POST,
  VOTE
} from '../actions/index'
import { combineReducers } from 'redux'
import { arrayToObject } from '../utils/helpers';

function categories (state = [], action) {
  const { categories } = action
  switch(action.type) {
    case GET_ALL_CATEGORIES:
      return state = categories
    default:
      return state
  }
}

function posts (state = {}, action) {
  const {post, posts} = action
  switch (action.type) {
    case CREATE_POST:
      return {
        ...state,
        [post.id]: post
      }
    case DELETE_POST:
      let newState = {...state}
      delete newState[post.id]
      return newState
    case GET_ALL_POSTS:
      return {
        ...state,
        ...arrayToObject(posts)
      }
    case EDIT_POST:
      return {
        ...state,
        [post.id]: post
    }
    default:
      return state
  }
}

function vote(state = {}, action) {
  switch(action.type) {
    case VOTE:
      return {
        ...state,
        [action.id]: action.score
      }
    default:
      return state
  }
}

export default combineReducers({
  posts,
  categories,
  vote
})