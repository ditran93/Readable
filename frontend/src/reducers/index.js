import {
  CREATE_POST,
  GET_ALL_POSTS,
  DELETE_POST,
  EDIT_POST,
  UP_VOTE,
  DOWN_VOTE,
  SORT_BY_TIME,
  SORT_BY_VOTE,

  GET_ALL_CATEGORIES,
  
  GET_ALL_COMMENTS,
  UP_VOTE_COMMENT,
  DOWN_VOTE_COMMENT,
  DELETE_COMMENT,
  EDIT_COMMENT,
  CREATE_COMMENT
} from '../actions/index'
import { combineReducers } from 'redux'
import { arrayToObject, objectToArray } from '../utils/helpers';
import sortBy from 'sort-by'

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
  const {post, posts, id} = action
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
    case UP_VOTE:
      return {
        ...state,
        [id]: {
          ...state[id],
          'voteScore': state[id]['voteScore'] + 1
        }
      }
    case DOWN_VOTE:
    return {
      ...state,
        [id]: {
          ...state[id],
          'voteScore': state[id]['voteScore'] - 1
        }
    }
    case SORT_BY_TIME:
      let tempState = objectToArray(state)
      tempState = [...tempState].sort(sortBy('timestamp'))
      tempState = arrayToObject(tempState)
      return tempState
    case SORT_BY_VOTE:
      let tempState1 = objectToArray(state)
      tempState1 = [...tempState1].sort(sortBy('voteScore'))
      tempState1 = arrayToObject(tempState1)
      return tempState1
    default:
      return state
  }
}

function comments(state = {}, action) {
  const {comments, id, comment} = action
  switch(action.type) {
    case GET_ALL_COMMENTS:
      return {
        ...state,
        ...arrayToObject(comments)
      }
    case UP_VOTE_COMMENT:
      return {
        ...state,
        [id]: {
          ...state[id],
          'voteScore': state[id]['voteScore'] + 1
        }
      }
    case DOWN_VOTE_COMMENT:
      return {
      ...state,
        [id]: {
          ...state[id],
          'voteScore': state[id]['voteScore'] - 1
        }
    }
    case DELETE_COMMENT:
      let newState = {...state}
      delete newState[id]
      return newState
    case EDIT_COMMENT:
      return {
        ...state,
        [comment.id]: comment
    }
    case CREATE_COMMENT:
    return {
      ...state,
      [comment.id]: comment
    }
    default:
      return state
  }
}

export default combineReducers({
  posts,
  categories,
  comments
})