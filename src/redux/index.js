import { createStore } from "redux"

//types constant
export const types = {
  INCREASE: "INCREASE",
  DECREASE: "DECREASE",
  RESET: "RESET",
  INCREASE_ODD: "INCREASE_ODD",
  INCREASE_SPECIFIC_VALUE: "INCREASE_SPECIFIC_VALUE"
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

export const increaseOdd = () => {
  return {
    type: types.INCREASE_ODD,
  }
}

export const increaseSpecificValue = (value) => {
  return {
    type: types.INCREASE_SPECIFIC_VALUE,
    value: value,
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

      case types.INCREASE_ODD:
        if (state.count%2==1) {
          return {
            ...state,
            count: state.count + 1,
          }

        } else {
          return state
        }
      case types.INCREASE_SPECIFIC_VALUE:
        //A developper
          return state
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
