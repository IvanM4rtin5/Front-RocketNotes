import {useState} from "react";
import { Container, Form } from "./style"
import { Link } from "react-router-dom"
import { TextArea } from "../../components/TexteArea"
import { NoteItem } from "../../components/NoteItem"
import { Section } from "../../components/Section"
import { Header } from "../../components/Header"
import { Button } from "../../components/button"
import { Input } from "../../components/Input"

export function New() {
  const[links, setLinks] = useState([]);
  conat [newLink, setNewLink]=useState("")

  function handleAddLink(){
    setLinks(prevState => [...prevState, newLink]);
    setNewLink("");
  }
 function handleRemoveLink(deleted){
   setLinks(prevState => prevState.filter(link => link !== deleted))
 } 
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
          {
            links.map((link,index)=> (
            <NoteItem
            key={String(index)}
            value={link}
            onClick={() => handleRemoveLink(link)}
            />
            ))
          }
          <NoteItem 
            isNew 
            placeholder="Novo link"/>
            value={newLink}
            onChange={e => setNewLink(e.target.value)}
            onClick={handleAddLink}
          />
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
