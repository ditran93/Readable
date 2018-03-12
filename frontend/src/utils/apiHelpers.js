import { arrayToObject } from './helpers'

const url = 'http://localhost:3001';
const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': 'userId'
};

/*********** Posts *************/
export function getAllPosts() {
  return fetch(
    `${url}/posts`,
    {
      headers
    }
  )
  .then(response => response.json())
  .then(data => {
    return arrayToObject(data)
  })
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

/***********Categories************/
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
