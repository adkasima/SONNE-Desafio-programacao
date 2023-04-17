import { useSelector, useDispatch } from "react-redux"

const App = (props) => {
  const name = useSelector((state) => state.data.name)
  const email = useSelector((state) => state.data.email)
  const address = useSelector((state) => state.data.address)
  const age = useSelector((state) => state.data.age)
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()

    const nameValue = document.getElementById("name").value
    const emailValue = document.getElementById("email").value
    const addressValue = document.getElementById("address").value
    const ageValue = document.getElementById("age").value

    dispatch({
      type: "data/add",
      payload: {
        name: nameValue,
        email: emailValue,
        address: addressValue,
        age: ageValue,
      },
    })
  }

  function handleDelete() {
    dispatch({ type: "data/delete" })
  }

  return (
    <div>
      <h2>Informações do Usuário</h2>
      <p>Nome: {name}</p>
      <input type="text" name="name" id="name" />
      <p>E-mail: {email}</p>
      <input type="email" name="email" id="email" />
      <p>Endereço: {address}</p>
      <input type="text" name="address" id="address" />
      <p>Age: {age}</p>
      <input type="text" name="age" id="age" />
      <br />
      <br />
      <button type="submit" onClick={handleSubmit}>
        Adicionar
      </button>
      <button onClick={handleDelete}>Deletar</button>
    </div>
  )
}
export default App
