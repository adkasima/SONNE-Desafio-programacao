import React from "react"
import ReactDOM from "react-dom/client"
import UserComponent from "./App"
import "./index.css"
import { Provider } from "react-redux"
import { store } from "./redux"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <UserComponent />
    </Provider>
  </React.StrictMode>
)
