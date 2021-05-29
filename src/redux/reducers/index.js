// import all reducers
import { createStore, combineReducers } from 'redux'

// name in localStorage, where you will save your state
const localStorageItemName = 'state'

// save the state to localStorage
const saveToLocalStorage = state => {
  const serializedState = JSON.stringify(state)
  localStorage.setItem(localStorageItemName, serializedState)
}

// load the state from localStorage
const loadFromLocalStorage = () => {
  const serializedState = localStorage.getItem(localStorageItemName)
  if (serializedState === null) 
    return undefined
  return JSON.parse(serializedState)
}

// combining all reducers to one
const allReducers = combineReducers({
  
})

// setting start state, from localStorage
const presistedState = loadFromLocalStorage()

// creating store
const store = createStore(
  allReducers,
  presistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  
)
  
// sharing to function "saveToLocalStorage" all state, when state will be changing 
store.subscribe(() => saveToLocalStorage(store.getState()))

export default store