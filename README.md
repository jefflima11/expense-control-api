# expense-control-api
 API para gerenciamento de finanças pessoais, permitindo o cadastro e controle de receitas e despesas fixas e temporárias. Desenvolvida em Node.js com Express e utilizando PostgreSQL como banco de dados. O objetivo do projeto é oferecer um sistema simples e eficiente para acompanhar os gastos e manter um controle financeiro organizado.  Se quiser adicionar mais detalhes, como funcionalidades futuras ou instruções de uso, me avise! 🚀


# Expense Control API

Este é o back-end da aplicação **Expense Control**. A API foi desenvolvida usando **Express** e **PostgreSQL**, com o objetivo de gerenciar o controle de gastos pessoais. A API permite o cadastro de despesas e receitas fixas e temporárias.

### Tecnologias Utilizadas
- **Node.js** com **Express** para o back-end.
- **PostgreSQL** como banco de dados.
- **JWT** para autenticação (em implementação).
- **dotenv** para gerenciar variáveis de ambiente.

### Instruções para o Front-End

#### Endpoints

A API possui os seguintes endpoints principais:

- **POST** `/api/expenses` - Cadastro de uma nova despesa.
- **POST** `/api/incomes` - Cadastro de uma nova receita.
- **GET** `/api/expenses` - Listagem de todas as despesas.
- **GET** `/api/incomes` - Listagem de todas as receitas.

#### Autenticação
A API utiliza **JWT** para autenticação. Para realizar chamadas protegidas, como criar ou editar despesas e receitas, o front-end deve enviar o token JWT no cabeçalho da requisição.

- **Exemplo de cabeçalho com JWT:**

  ```javascript
  headers: {
    'Authorization': `Bearer <seu_token_jwt_aqui>`
  }

### Estrutura das requisições

- #### Exemplo de criação de despesas (POST/api/expenses): ##

  ```javascript
  {
    "amount": 150.00,
    "description": "Aluguel",
    "type": "fixo",  // ou "temporário"
    "dueDate": "2025-04-01"
  }

- #### Exemplo de criação de despesas (POST/api/expenses): ##

  ```javascript
  {
    "amount": 2000.00,
    "description": "Salário",
    "type": "fixo",  // ou "temporário"
    "dueDate": "2025-04-01"
  }

### Como rodar a API localmente

- #### Clone este repositório para sua máquina local:
  ```bash
  git clone <url_do_repositório>
  cd finance-manager-api

- #### Instale as dependências:
  ```bash
  npm install

- #### Crie um arquivo .env na raiz do projeto com as seguintes variáveis:
  ```env
  DB_HOST=localhost
  DB_PORT=5432
  DB_USER=seu_usuario
  DB_PASSWORD=sua_senha
  DB_NAME=finance_manager
  JWT_SECRET=seu_segredo_jwt

- #### Crie o banco de dados no PostgreSQL e rode as migrações (se houver).

- #### Inicie o servidor:
  ```bash
  npm start

- #### A API estará rodando em http://localhost:3000.

# Como contribuir

- Faça um fork deste repositório.
- Crie uma branch para sua feature. Exemplo:
  ```bash
  (git checkout - b feature/nova-feature).
- Faça commit das suas alterações. Exemplo:
  ```bash
  (git commit -am 'Adiciona nova feature').
- Envie para o repositório remoto. Exemplo:
  ```bash
  (git push origin feature/nova-feature).
- Abra um Pull Request.

# Licença

Este projeto está licenciado sob a MIT License - Veja o arquivo LICENSE para mais detalhes.
  


