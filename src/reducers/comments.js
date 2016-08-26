function comments(state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [...state,{
        id: action.id,
        text: action.text,
        date: action.date
      }];
    default:
      return state;
  }
}



export default comments;
