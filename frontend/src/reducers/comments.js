import {
  GET_ALL_COMMENTS,
  UP_VOTE_COMMENT,
  DOWN_VOTE_COMMENT,
  DELETE_COMMENT,
  EDIT_COMMENT,
  CREATE_COMMENT
} from '../actions/types'
import { arrayToObject } from '../utils/helpers';

export default function comments(state = {}, action) {
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