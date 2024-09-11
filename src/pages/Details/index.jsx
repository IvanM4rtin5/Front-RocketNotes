import { Container, Links, Content } from "./styles"

import { Tag } from "../../components/Tags"
import { Header } from "../../components/Header"
import { Button } from "../../components/button"
import { ButtonText } from "../../components/ButtonText"
import { Section } from "../../components/Section"

export function Details() {
  return (
    <Container>

      <Header />
      <main>
        <Content>

      <ButtonText title="Excluir nota"/>

      <h1>
        Introdução ao React
      </h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia possimus consequuntur similique numquam, quia voluptatem nulla sequi ullam eveniet molestias quas perspiciatis! Soluta, blanditiis. Omnis voluptatum qui dolore a adipisci?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit quasi nostrum incidunt nulla fugiat dignissimos distinctio beatae tenetur impedit, ea laudantium quo cum veniam deleniti ipsum dolore repudiandae earum ratione. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident neque deserunt doloremque magnam, accusantium sed suscipit dicta quidem rerum praesentium. Dignissimos illo nisi doloremque non rerum similique voluptate distinctio iure! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque voluptate sit, ipsam ducimus minima dignissimos culpa dolorem blanditiis, voluptatum dicta molestiae at aperiam molestias. Eum labore pariatur magnam sed facilis.
      </p>

      <Section title="Links Úteis">
        <Links>
          <li>
            <a
              href="https://www.linkedin.com/in/ivan-martins-2948572b1/"
              target="_blank"
              >
              https://www.linkedin.com/in/ivan-martins-2948572b1/
            </a>
          </li>
          <li>
            <a href="https://github.com/IvanM4rtin5" target="_blank">
              https://github.com/IvanM4rtin5
            </a>
          </li>
        </Links>
      </Section>

      <Section title="Marcadores">
        <Tag title="Nodejs" />
        <Tag title="Express" />
      </Section>

      <Button title="Login" loading/>
              </Content>
            </main>
    </Container>
  )
}
