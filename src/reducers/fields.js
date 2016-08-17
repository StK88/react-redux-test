const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TEXT':
      return {
        id: action.id,
        text: action.text,
        selected: false
      }
    case 'TOGGLE_FIELD':
      if (state.id == action.id) {
        return Object.assign({}, state, {
          selected: !state.selected
        })
      }
    default:
      return state
  }
}

const fields = (state = [], action) => {

  switch (action.type) {
    case 'ADD_TEXT':
      return [ todo(undefined, action), ...state ]
    case 'TOGGLE_FIELD':
      return state.map(t =>
        todo(t, action)
      )
    case 'REMOVE_FIELD':
      return state.filter(f => f.id !== action.id)
    default:
      return state
  }
}

export default fields
