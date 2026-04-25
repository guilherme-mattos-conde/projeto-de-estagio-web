# Bem vindo(a) ao meu repositório ✌
Frontend da aplicação de gerenciamento de pranchas CAD, responsável pela interface do usuário e integração com a API REST.

## Tecnologias

- React
- TypeScript
- Vite
- Redux Toolkit
- RTK Query
- React Hook Form
- Material UI

## Como executar o projeto

### Pré-requisitos

- Node.js (v18+)
- npm ou yarn
- Git

## Executando a aplicação

### Acesse a pasta do projeto:

```bash
cd projeto-de-estagio-web
```

### Instale as dependências:

```bash
npm install
```

### Execute o projeto:

```bash
npm run dev
```

---

## Acesso

http://localhost:5173

## Integração com a API

A aplicação consome a API backend em:

http://localhost:8080

Certifique-se de que o backend esteja em execução.

## Estrutura do Projeto

- features → funcionalidades organizadas por domínio
- shared → componentes, hooks e utilitários reutilizáveis
- app → configuração global (store, providers)
- api → comunicação com backend via RTK Query

## Funcionalidades

- Listagem de projetos com paginação e ordenação
- Criação de projetos
- Edição de projetos
- Exclusão de projetos
- Atualização de status
- Estados de loading, erro e vazio

## Observações

- Paginação e ordenação são controladas pelo backend
- A aplicação utiliza RTK Query para gerenciamento de dados
- Estilização inicial focada em funcionalidade

## Segurança

Atualmente a aplicação não possui autenticação.

Futuramente será implementado:
- Login com JWT
- Controle de acesso por usuário