let nextFieldId = 0;

export const addText = (text) => {
  return {
    type: 'ADD_TEXT',
    id: nextFieldId++,
    text
  }
}

export const toggleField = (id) => {
  return {
    type: 'TOGGLE_FIELD',
    id
  }
}

export const removeField = (id) => {
  return {
    type: 'REMOVE_FIELD',
    id
  }
}

export const setSortBy = (sortBy) => {
  return {
    type: 'SET_SORT_BY',
    sortBy
  }
}
