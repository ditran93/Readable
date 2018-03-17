
const url = 'http://localhost:3001';
const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': 'userId'
};

/**
 * Posts
 **/
export function getAllPosts() {
  return fetch(
    `${url}/posts`,
    {
      headers
    }
  )
  .then(response => response.json())
  .then(data => data)
}

export function createPost(post) {
  return fetch(
    `${url}/posts`,
    {
      method: 'POST',
      body: JSON.stringify(post),
      headers
    }
  )
  .then(response => response.json())
  .then(data => data)
}

export function deletePost(post) {
  return fetch(
    `${url}/posts/${post.id}`,
    {
      method: 'DELETE',
      headers
    }
  )
  .then(response => response.json())
  .then(data => data)
}

export function editPost(post) {
  const postData = {
    ...post,
    timestamp: Date.now()
  }

  return fetch(
    `${url}/posts/${post.id}`,
    {
      method: 'PUT',
      body: JSON.stringify(postData),
      headers
    }
  )
  .then(response => response.json())
  .then(data => data)
}

/**
 * Categories
 **/
export function getAllCategories() {
  return fetch(
    `${url}/categories`,
    {
      headers
    }
  )
  .then(response => response.json())
  .then(data => data.categories)
  .then(data => data)
}

/**
 * VOTE
 **/
export const upVotePost = (id, option = "upVote") => {
  const voteData = { id, option }
    return fetch(
      `${url}/posts/${id}`,
      {
        method: 'POST',
        body: JSON.stringify(voteData),
        headers
      }
    )
    .then(response => response.json())
    .then(data => data)
}

export const downVotePost = (id, option = "downVote") => {
  const voteData = { id, option }
    return fetch(
      `${url}/posts/${id}`,
      {
        method: 'POST',
        body: JSON.stringify(voteData),
        headers
      }
    )
    .then(response => response.json())
    .then(data => data)
}

/**
 * COMMENT
 **/
export const fetchComments = (postId) => {
  return fetch(
    `${url}/posts/${postId}/comments`,
    {
      method: 'GET',
      headers
    }
  )
  .then(response => response.json())
  .then(data => {
    return data})
}

export const upVoteComment = (id, option = "upVote") => {
  const voteData = { id, option }
    return fetch(
      `${url}/comments/${id}`,
      {
        method: 'POST',
        body: JSON.stringify(voteData),
        headers
      }
    )
    .then(response => response.json())
    .then(data => data)
}

export const downVoteComment = (id, option = "downVote") => {
  const voteData = { id, option }
    return fetch(
      `${url}/comments/${id}`,
      {
        method: 'POST',
        body: JSON.stringify(voteData),
        headers
      }
    )
    .then(response => response.json())
    .then(data => data)
}

export const deleteComment = (commentId) => {
  return fetch(
    `${url}/comments/${commentId}`,
    {
      method: 'DELETE',
      headers
    }
  )
  .then(response => response.json())
  .then(data => data)
}

export function editComment(comment) {
  const commentData = {
    ...comment,
    timestamp: Date.now()
  }

  return fetch(
    `${url}/comments/${comment.id}`,
    {
      method: 'PUT',
      body: JSON.stringify(commentData),
      headers
    }
  )
  .then(response => response.json())
  .then(data => data)
}

export function createComment(comment) {
  return fetch(
    `${url}/comments`,
    {
      method: 'POST',
      body: JSON.stringify(comment),
      headers
    }
  )
  .then(response => response.json())
  .then(data => data)
}