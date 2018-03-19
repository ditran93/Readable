import {
  CREATE_POST,
  DELETE_POST,
  GET_ALL_POSTS,
  EDIT_POST,
  UP_VOTE,
  DOWN_VOTE,
  SORT_BY_TIME,
  SORT_BY_VOTE
} from './types';
import * as apiHelpers from '../utils/apiHelpers'

export function createPostAction (post) {
  return {
    type: CREATE_POST,
    post
  }
}

export const createPost = (post) => (dispatch) => {
  return apiHelpers.createPost(post).then(postData => dispatch(createPostAction(postData)))
}

export function getAllPosts (posts) {
  return {
    type: GET_ALL_POSTS,
    posts,
  }
}

export const fetchPosts = () => (dispatch) => {
  return apiHelpers.getAllPosts()
    .then((posts) => {
      return dispatch(getAllPosts(posts))
    })
}

export function deletePostAction(post) {
  return {
    type: DELETE_POST,
    post
  }
}

export const deletePost = (post) => (dispatch) => {
  return apiHelpers.deletePost(post).then(post => dispatch(deletePostAction(post)))
}

export const editPostAction = (post) => {
  return {
    type: EDIT_POST,
    post
  }
}

export const editPost = (post) => (dispatch) => {
  return apiHelpers.editPost(post)
  .then(post => {
    return dispatch(editPostAction(post))
  })
}

export const sortByTime = (posts) => {
  return {
    type: SORT_BY_TIME,
    posts
  }
}

export const sortByVote = (posts) => {
  return {
    type: SORT_BY_VOTE,
    posts
  }
}

export const upVotePostAction = (id) => {
  return {
    type: UP_VOTE,
    id,
  }
}

export const upVotePost = (id) => dispatch => {
  return apiHelpers.upVotePost(id)
    .then(data => dispatch(upVotePostAction(id)))
}

export const downVotePostAction = (id) => {
  return {
    type: DOWN_VOTE,
    id,
  }
}

export const downVotePost = (id) => dispatch => {
  return apiHelpers.downVotePost(id)
    .then(data => dispatch(downVotePostAction(id)))
}
