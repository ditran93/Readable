export const CREATE_POST = 'CREATE_POST'
export const DELETE_POST = 'DELETE_POST'
export const LOAD_CATEGORY = 'LOAD_CATEGORY'

export function createPost (post) {
  console.log(post)
  debugger
  return {
    type: CREATE_POST,
    post
  }
}

export function loadCategory ({ categories }) {
  return {
    type: LOAD_CATEGORY,
    categories
  }
}