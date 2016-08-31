function comments(state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [...state,{
        id: action.id,
        text: action.text,
        date: action.date
      }];
    case 'REMOVE_COMMENT':
      return [
        ...state.slice(0,action.i),
        ...state.slice(action.i + 1)
      ];
    default:
      return state;
  }
}



export default comments;
