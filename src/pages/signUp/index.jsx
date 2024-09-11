import { FiMail, FiLock, FiUser } from "react-icons/fi"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

import { api } from "../../services/api"

import { Input } from "../../components/Input"
import { Button } from "../../components/button"
import { Container, Form, Background } from "./style"

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confPassword, setConfPassword] = useState("")

  const navigate = useNavigate()

  async function handleSingup() {
    if (!name || !email || !password || !confPassword) {
      return alert("Preencha todos os campos!")
    }
    if (confPassword !== password) {
      return alert("senha não confere")
    }
    await api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!")
        navigate("/")
      })
      .catch((error) => {
        if (error.response) {
          alert("Email já cadastrado")
        } else {
          alert(" Não foi possivel cadastrar")
        }
      })
  }

  return (
    <Container>
      <Background />
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis</p>

        <h2>Crie sua Conta</h2>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="E-mail"
          type="Text"
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="Password"
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Input
          placeholder="Confirme sua Senha"
          type="Password"
          icon={FiLock}
          onChange={(e) => setConfPassword(e.target.value)}
        />

        <Button
          title="Cadastrar"
          onClick={handleSingup}
        />

        <Link to="/">Voltar para o Login</Link>
      </Form>
    </Container>
  )
}
