const pageReducer = (state = [], action) => {
  switch(action.type) {
    case 'CHANGE_PAGE': 
      console.log(action.payload)
      return action.payload
    default: 
      return state
  }
}

export default pageReducer