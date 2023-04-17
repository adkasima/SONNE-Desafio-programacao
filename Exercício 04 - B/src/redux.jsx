import { createStore } from "redux"

const updateData = (name, email, address, age) => ({
  type: "data/add",
  payload: { name, email, address, age },
})

const initialState = {
  data: {
    name: "",
    email: "",
    address: "",
    age: "",
  },
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case "data/add": {
      return {
        ...state,
        data: {
          name: action.payload.name,
          email: action.payload.email,
          address: action.payload.address,
          age: action.payload.age,
        },
      }
    }
    case "data/delete": {
      return {
        ...state,
        data: {
          name: (state.data.name = ""),
          email: (state.data.email = ""),
          address: (state.data.address = ""),
          age: (state.data.age = ""),
        },
      }
    }
    default: {
      return state
    }
  }
}

export const store = createStore(reducer)
