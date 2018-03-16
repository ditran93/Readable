import * as apiHelpers from '../utils/apiHelpers'

export const CREATE_POST = 'CREATE_POST'
export const DELETE_POST = 'DELETE_POST'
export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES'
export const GET_ALL_POSTS = 'GET_ALL_POSTS'
export const EDIT_POST = 'EDIT_POST'
export const VOTE = 'VOTE'

/**
 * Posts
 **/
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

/**
 * Categories
 **/
export function getAllCategories (categories) {
  return {
    type: GET_ALL_CATEGORIES,
    categories
  }
}

export const fetchCategories = () => (dispatch) => {
  return apiHelpers.getAllCategories()
  .then((categories) => {
    return dispatch(getAllCategories(categories))
  })
}

/**
 * VOTE
 **/
export const voteAction = (id, score) => {
  return {
    type: VOTE,
    id,
    score
  }
}

export const vote = (id, option, type) => dispatch => {
  return apiHelpers.vote(id, option, type)
    .then(data => dispatch(voteAction(id, data.voteScore)))
}