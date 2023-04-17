import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import { useSelector, useDispatch } from "react-redux"

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  function handleIncrement() {
    dispatch({ type: "counter/increment" })
  }

  function handleIncrementFive() {
    dispatch({ type: "counter/incrementFive", payload: 5 })
  }

  function handleDecrement() {
    if (count <= 0) {
      count
    } else dispatch({ type: "counter/decrement" })
  }

  function handleDecrementFive() {
    if (count < 5) {
      count
    } else dispatch({ type: "counter/decrementFive", payload: 5 })
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>Total: {count}</h2>
      <div className="card">
        <button onClick={handleIncrement}>+ 1</button>
        <button onClick={handleIncrementFive}>+ 5</button>
        <button onClick={handleDecrement}>- 1</button>
        <button onClick={handleDecrementFive}>- 5</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}
export default App
