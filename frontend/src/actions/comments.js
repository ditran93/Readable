import {
  GET_ALL_COMMENTS,
  UP_VOTE_COMMENT,
  DOWN_VOTE_COMMENT,
  DELETE_COMMENT,
  EDIT_COMMENT,
  CREATE_COMMENT
} from './types';
import * as apiHelpers from '../utils/apiHelpers'

export const getAllCommentsAction = (comments) => {
  return {
   type: GET_ALL_COMMENTS,
   comments
  }
}

export const getAllComments = (postId) => dispatch => {
  return apiHelpers.fetchComments(postId)
   .then(comments => dispatch(getAllCommentsAction(comments)))
}

export const upVoteCommentAction = (id) => {
 return {
   type: UP_VOTE_COMMENT,
   id,
 }
}

export const upVoteComment = (id) => dispatch => {
 return apiHelpers.upVoteComment(id)
   .then(data => dispatch(upVoteCommentAction(id)))
}

export const downVoteCommentAction = (id) => {
 return {
   type: DOWN_VOTE_COMMENT,
   id,
 }
}

export const downVoteComment = (id) => dispatch => {
 return apiHelpers.downVoteComment(id)
   .then(data => dispatch(downVoteCommentAction(id)))
}

export function deleteCommentAction(id) {
 return {
   type: DELETE_COMMENT,
   id
 }
}

export const deleteComment = (commentId) => (dispatch) => {
 return apiHelpers.deleteComment(commentId).then(post => dispatch(deleteCommentAction(commentId)))
}

export const editCommentAction = (comment) => {
 return {
   type: EDIT_COMMENT,
   comment
 }
}

export const editComment = (comment) => (dispatch) => {
 return apiHelpers.editComment(comment)
 .then(comment => {
   return dispatch(editCommentAction(comment))
 })
}

export function createCommentAction (comment) {
 return {
   type: CREATE_COMMENT,
   comment
 }
}

export const createComment = (comment) => (dispatch) => {
 return apiHelpers.createComment(comment).then(commentData => dispatch(createCommentAction(commentData)))
}