import * as apiHelpers from '../utils/apiHelpers'

export const CREATE_POST = 'CREATE_POST'
export const DELETE_POST = 'DELETE_POST'
export const GET_ALL_POSTS = 'GET_ALL_POSTS'
export const EDIT_POST = 'EDIT_POST'
export const UP_VOTE = 'UP_VOTE'
export const DOWN_VOTE = 'DOWN_VOTE'
export const SORT_BY_TIME = 'SORT_BY_TIME'
export const SORT_BY_VOTE = 'SORT_BY_VOTE'

export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES'

export const UP_VOTE_COMMENT = 'UP_VOTE_COMMENT'
export const DOWN_VOTE_COMMENT = 'DOWN_VOTE_COMMENT'

export const GET_ALL_COMMENTS = 'GET_ALL_COMMENTS'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const CREATE_COMMENT = 'CREATE_COMMENT'
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

/**
 * COMMENT
 **/

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