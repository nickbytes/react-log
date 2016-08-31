// add comment
export function addComment(id, text, date) {
  console.log('dispatching add comment')
  return {
    type: 'ADD_COMMENT',
    id,
    text,
    date
  }
}

// remove comment
export function removeComment(id, i) {
  console.log('get rid of this thing')
  return {
    type: 'REMOVE_COMMENT',
    id,
    i
  }
}
