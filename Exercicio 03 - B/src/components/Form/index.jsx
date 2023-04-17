import bcrypt from "bcryptjs"
import { useState } from "react"
import { Container } from "./styles"

export function Form() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleSubmit(event) {
    event.preventDefault()

    if (!name || !email || !password) {
      alert("Dados inválidos!")
    } else {
      const saltRounds = 10
      const passwordHash = bcrypt.hash(password, saltRounds)
      const dados = { name, email, passwordHash }
      fetch("https://jsonplaceholder.typicode.com", {
        method: "POST",
        body: JSON.stringify(dados),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Dados enviados:", dados)

          setName("")
          setEmail("")
          setPassword("")
        })
        .catch((error) => console.error("Erro ao enviar dados:", error))
    }
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Nome:
          <input
            type="text"
            value={name}
            name="name"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label htmlFor="email">
          Email:
          <input
            type="email"
            value={email}
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label htmlFor="password">
          Senha:
          <input
            type="password"
            value={password}
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button type="submit">Cadastrar</button>
      </form>
    </Container>
  )
}
