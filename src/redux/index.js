import { createStore } from "redux"

//types constant
export const types = {
  INCREASE: "INCREASE",
  DECREASE: "DECREASE",
  RESET: "RESET",
  INCREASEODD: "INCREASEODD",
}

// actions
// action = objet
export const increase = () => {
  //action
  return {
    // type: "INCREASE"
    type: types.INCREASE,
  }
}
export const decrease = () => {
  return {
    type: types.DECREASE,
  }
}

export const reset = () => {
  return {
    type: types.RESET,
  }
}

export const increaseodd = () => {
  return {
    type: types.INCREASEODD,
  }
}


//initial state in the store
const initState = {
  count: 0,
  name: "",
  age: 18,
}
// REDUCERS ==> toujours (state, action)=> newState
const counter = (state = initState, action) => {
  switch (action.type) {
    case types.INCREASE:
      const newState = {
        ...state,
        count: state.count + 1,
      }
      return newState

      case types.INCREASEODD:
        if (state.count%2==0) {
          return {
            ...state,
            count: state.count + 2,
          }
        } else {
          return {
            ...state,
            count: 0,
          }
        }
    case types.DECREASE:
      return {
        ...state,
        count: state.count - 1,
      }
      case types.RESET:
        return {
          ...state,
          count: 0,
        }

    
    default:
      return state
  }
}

const tasks = (state = initState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
//create store
const store = createStore(
  counter,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
console.log(store.getState())

export default store

// montrer ici comment faire avec combine reducer
// const rootReducer = () => {
//   return combineReducers({
//     counter,
//     tasks,
//   })
// }
// const store = createStore(
//   rootReducer(),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )
