// add comment
export function addComment(id, text, date, location) {
  return {
    type: 'ADD_COMMENT',
    id,
    text,
    date,
    location
  }
}
