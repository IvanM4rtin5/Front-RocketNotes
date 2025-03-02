# RocketNotes

[![JS](https://img.shields.io/badge/logo-javascript-blue?logo=javascript)](JavaScript)
![NPM](https://img.shields.io/npm/v/npm.svg?logo=nodedotjs)
[![Bundler](https://img.shields.io/badge/Bundler-Vite-B73BFE?logo=vite)](https://vitejs.dev/)
[![Backend](https://img.shields.io/badge/Backend-Node.js-339933?logo=node.js)](https://nodejs.org/)


RocketNotes é uma aplicação desenvolvida com React que permite aos usuários fazerem anotações de maneira simples e eficiente. O projeto utiliza Vite como bundler, Styled-components para estilização, React Router para navegação e Axios para chamadas HTTP. Desenvolvido com as aulas da @Rocketseat.

---
![Image](https://github.com/IvanM4rtin5/Front-RocketNotes/blob/main/src/assets/note.png)
---

## 🚀 Por que RocketNotes?
O RocketNotes foi criado para demonstrar minhas habilidades no desenvolvimento frontend, utilizando tecnologias modernas e boas práticas de programação. A aplicação é intuitiva, responsiva e fácil de usar, proporcionando uma experiência agradável para os usuários.

## 🛠️ Tecnologias Utilizadas
![Frontend](https://img.shields.io/badge/Frontend-React-61DAFB?logo=react)

<div align="left"> <img src="https://img.shields.io/badge/React-18.x-61DAFB?logo=react" alt="React" /> <img src="https://img.shields.io/badge/Vite-4.x-B73BFE?logo=vite" alt="Vite" /> <img src="https://img.shields.io/badge/Styled%20Components-5.x-DB7093?logo=styled-components" alt="Styled Components" /> <img src="https://img.shields.io/badge/React%20Router-6.x-CA4245?logo=react-router" alt="React Router" /> <img src="https://img.shields.io/badge/Axios-1.x-5A29E4?logo=axios" alt="Axios" /> <img src="https://img.shields.io/badge/ESLint-8.x-4B32C3?logo=eslint" alt="ESLint" /> </div>

## 📂 Estrutura do Projeto

O repositório está organizado da seguinte forma:

```Copy
rocketnotes/
├── assets/                  # Arquivos estáticos (imagens, ícones, etc.)
│   ├── avatar_placeholder.png
│   └── note.png
├── components/              # Componentes reutilizáveis
│   ├── ButtonText/
│   │   ├── index.jsx
│   │   └── style.js
│   ├── Header/
│   │   ├── index.jsx
│   │   └── style.js
│   ├── Input/
│   │   ├── index.jsx
│   │   └── style.js
│   ├── Note/
│   │   ├── index.jsx
│   │   └── style.js
│   ├── NoteItem/
│   │   ├── index.jsx
│   │   └── style.js
│   ├── Section/
│   │   ├── index.jsx
│   │   └── style.js
│   ├── Tags/
│   │   ├── index.jsx
│   │   └── style.js
│   ├── TexteArea/
│   │   ├── index.jsx
│   │   └── style.js
│   └── button/
│       ├── index.jsx
│       └── styles.js
├── hooks/                   # Hooks personalizados
│   └── auth.jsx             # Hook para gerenciamento de autenticação
├── pages/                   # Páginas da aplicação
│   ├── Details/             # Página de detalhes da nota
│   │   ├── index.jsx
│   │   └── styles.js
│   ├── Home/                # Página inicial
│   │   ├── index.jsx
│   │   └── styles.js
│   ├── New/                 # Página para criar nova nota
│   │   ├── index.jsx
│   │   └── style.js
│   ├── Profile/             # Página de perfil do usuário
│   │   ├── index.jsx
│   │   └── style.js
│   ├── signIn/              # Página de login
│   │   ├── index.jsx
│   │   └── style.js
│   └── signUp/              # Página de registro
│       ├── index.jsx
│       └── style.js
├── router/                  # Configuração de rotas
│   ├── app.routes.jsx       # Rotas para usuários autenticados
│   ├── auth.routes.jsx      # Rotas para usuários não autenticados
│   └── index.jsx           # Configuração principal das rotas
├── services/                # Serviços externos (API, etc.)
│   └── api.js              # Configuração do Axios para chamadas HTTP
├── styles/                  # Estilos globais e temas
│   ├── global.js           # Estilos globais
│   └── theme.js            # Configuração de temas
├── main.jsx                 # Ponto de entrada da aplicação
├── .gitignore              # Arquivos ignorados pelo Git
├── README.md               # Documentação do projeto
├── index.html              # Arquivo HTML principal
├── package-lock.json       # Versões exatas das dependências
├── package.json            # Dependências e scripts do projeto
└── vite.config.js          # Configuração do Vite
```

## 🔗 Links Relacionados

- Repositório do Backend: [RocketNotes- Backend](https://github.com/IvanM4rtin5/Backend-Notes)

## 🧩 Funcionalidades do Projeto
![Frontend](https://img.shields.io/badge/Frontend-React-61DAFB?logo=react)

**Autenticação de usuários**: Redireciona o usuário para rotas específicas dependendo do seu estado de login.

**Navegação condicional**: Usuários autenticados são direcionados para o conteúdo das anotações, enquanto usuários não autenticados são direcionados para as páginas de login e registro.

**Criação e gerenciamento de notas**: Os usuários podem criar, editar e excluir anotações.

**Perfil do usuário**: Os usuários podem atualizar suas informações de perfil, como nome e foto.

## 🚀 Como Executar o Projeto

1. Clone o repositório
```bash
Copy
git clone https://github.com/IvanM4rtin5/Front-RocketNotes.git

```
```
cd rocketnotes
```
2. Instale as dependências

```bash
Copy
npm install
```
3. Execute o projeto

```bash
Copy
npm run dev

```
O projeto estará disponível em http://localhost:3000.

## 💡 Funcionalidades Futuras
Pesquisa de notas: Adicionar funcionalidade de pesquisa para encontrar notas específicas.

Categorias de notas: Permitir que os usuários categorizem suas notas.

Integração com APIs externas: Adicionar suporte para integração com serviços como Google Drive ou Dropbox.


## 🙏 Agradecimentos
Agradeço à @Rocketseat pelas aulas incríveis e pelo suporte durante o desenvolvimento deste projeto. Também gostaria de agradecer à comunidade de desenvolvedores por todo o conhecimento compartilhado.

## 📧 Contato
Se você tiver alguma dúvida ou quiser entrar em contato, sinta-se à vontade para me enviar uma mensagem:

**Nome**: Ivan Martins

**E-mail**: ivanmarti.alves@gmail.com

**LinkedIn**: https://www.linkedin.com/in/ivan-martins-alves/

---
Obrigado por conferir o RocketNotes! Espero que ele demonstre minhas habilidades como desenvolvedor frontend e inspire outros a criar projetos incríveis. 😊
---
