/**
 * Generate a random id
 */
export function randomId() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

/**
 * Convert array to object
 */
export function arrayToObject(arr, key='id') {
  return arr.reduce((acc, cur) => {
    acc[cur[key]] = cur;
    return acc;
  }, {})
}

/**
 * Convert object to array
 */
export function objectToArray(obj) {
  return Object.keys(obj).map(key => obj[key])
}