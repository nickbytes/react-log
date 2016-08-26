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
