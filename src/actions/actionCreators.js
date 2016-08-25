// add comment
export function addComment(id, text, date) {
  return {
    type: 'ADD_COMMENT',
    id,
    text,
    date
  }
}
