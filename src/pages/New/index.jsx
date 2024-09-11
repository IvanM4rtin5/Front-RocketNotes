import { Container, Form } from "./style"
import { Link } from "react-router-dom"
import { TextArea } from "../../components/TexteArea"
import { NoteItem } from "../../components/NoteItem"
import { Section } from "../../components/Section"
import { Header } from "../../components/Header"
import { Button } from "../../components/button"
import { Input } from "../../components/Input"

export function New() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1> Criar Nota</h1>
            <Link to="/">Voltar</Link>
          </header>
          <Input placeholder="Titulo" />
          <TextArea placeholder="Observações"/>

        <Section title="Links Úteis">
          <NoteItem value="https://github.com/IvanM4rtin5"/>
          <NoteItem isNew placeholder="Novo link"/>
        </Section>
        <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="react"/>
              <NoteItem isNew placeholder="Nova Tag"/>
            </div>
        </Section>
        <Button title="Salvar"/>
        </Form>
      </main>
    </Container>
  )
}
