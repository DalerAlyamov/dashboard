import Themes from '../../themes'

const initialState = Themes.greyTheme

const themeReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'CHANGE_THEME': 
      return action.payload
    default: 
      return state
  }
}

export default themeReducer