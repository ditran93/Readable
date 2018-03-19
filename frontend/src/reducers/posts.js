import {
  CREATE_POST,
  GET_ALL_POSTS,
  DELETE_POST,
  EDIT_POST,
  UP_VOTE,
  DOWN_VOTE,
  SORT_BY_TIME,
  SORT_BY_VOTE
} from '../actions/types';
import { arrayToObject, objectToArray } from '../utils/helpers';
import sortBy from 'sort-by'

export default function posts (state = {}, action) {
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