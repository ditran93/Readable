import {
  CREATE_POST,
  LOAD_CATEGORY
} from '../actions/index'
import { combineReducers } from 'redux'

const intitialCategoryState = {
  categories: [
      {
        name: 'react',
        path: 'react'
      },
      {
        name: 'redux',
        path: 'redux'
      },
      {
        name: 'udacity',
        path: 'udacity'
      }
  ]
}

function categories (state = intitialCategoryState, action) {
  const { categories } = action
  switch(action.type) {
    case LOAD_CATEGORY:
      return {
        categories: state
      }
    default:
      return state
  }
}

const initialPostState = {
  '8xf0y6ziyjabvozdd253nd': {
    id: '8xf0y6ziyjabvozdd253nd',
    timestamp: 1467166872634,
    title: 'Udacity is the best place to learn React',
    body: 'Everyone says so after all.',
    author: 'thingtwo',
    category: 'react',
    voteScore: 6,
    deleted: false,
    commentCount: 2
  },
  '6ni6ok3ym7mf1p33lnez': {
    id: '6ni6ok3ym7mf1p33lnez',
    timestamp: 1468479767190,
    title: 'Learn Redux in 10 minutes!',
    body: 'Just kidding. It takes more than 10 minutes to learn technology.',
    author: 'thingone',
    category: 'redux',
    voteScore: -5,
    deleted: false,
    commentCount: 0
  }
}


function posts (state = initialPostState, action) {
  const {post} = action
  switch (action.type) {
    case CREATE_POST:
      return {
        ...state,
        [post.id]: post
      }
    default:
      return state
  }
}

export default combineReducers({
  posts,
  categories
})