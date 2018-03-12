import * as apiHelpers from '../utils/apiHelpers'

export const CREATE_POST = 'CREATE_POST'
export const DELETE_POST = 'DELETE_POST'
export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES'
export const GET_ALL_POSTS = 'GET_ALL_POSTS'

/*********** Posts *************/
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

/***********Categories************/
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