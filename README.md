# RocketNotes

**RocketNotes** é uma aplicação desenvolvida com React que permite aos usuários fazerem anotações de maneira simples e eficiente. O projeto utiliza Vite como bundler, Styled-components para estilização, React Router para navegação, e Axios para chamadas HTTP.

## Tecnologias

- **React** - Biblioteca para construção de interfaces de usuário.
- **Vite** - Ferramenta de build moderna e rápida.
- **Styled-components** - Biblioteca para estilização de componentes.
- **React Router DOM** - Biblioteca para navegação e gerenciamento de rotas.
- **Axios** - Cliente HTTP para realizar chamadas para APIs.
- **ESLint** - Ferramenta de linting para manter o código limpo e consistente.

## Funcionalidades

- **Autenticação de usuários**: Redireciona o usuário para rotas específicas dependendo do seu estado de login.
- **Navegação condicional**: Usuários autenticados são direcionados para o conteúdo das anotações, enquanto usuários não autenticados são direcionados para as páginas de login e registro.
  
## Estrutura do Projeto

- **`src`**: Contém o código-fonte da aplicação.
  - **`hooks/`**: Contém hooks personalizados, como o `useAuth` para gerenciamento de autenticação.
  - **`router/`**: Gerencia as rotas da aplicação com o `react-router-dom`.
  - **`styles/`**: Contém as configurações de tema e estilos globais da aplicação.

## Instalação

Para rodar o projeto localmente, siga os passos abaixo:

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/rocketnotes.git
cd rocketnotes
