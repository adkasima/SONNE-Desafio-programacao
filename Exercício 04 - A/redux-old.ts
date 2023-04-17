import { createStore } from "redux"
const initialState = {
  counter: {
    value: 0,
  },
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case "counter/increment": {
      return {
        ...state,
        counter: {
          value: state.counter.value + 1,
        },
      }
    }
    case "counter/incrementFive": {
      return {
        ...state,
        counter: {
          value: state.counter.value + action.payload,
        },
      }
    }
    case "counter/decrement": {
      return {
        ...state,
        counter: {
          value: state.counter.value - 1,
        },
      }
    }
    case "counter/decrementFive": {
      return {
        ...state,
        counter: {
          value: state.counter.value - action.payload,
        },
      }
    }
    default: {
      return state
    }
  }
}

export const store = createStore(reducer)
