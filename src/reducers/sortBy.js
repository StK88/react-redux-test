const sortBy = (state = 'NEW_ADDED', action) => {
  switch (action.type) {
    case 'SET_SORT_BY':
      return action.sortBy
    default:
      return state
  }
}

export default sortBy;
