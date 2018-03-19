import {
  GET_ALL_CATEGORIES,
} from './types';
import * as apiHelpers from '../utils/apiHelpers'

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