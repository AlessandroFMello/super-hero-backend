## Super Hero API

**Caso queira testar a api sem rodá-la localmente, ao fim do README.md constam os links do deploy da API** 

## Requisitos
* Linux / WSL Environment
* MySQL

# Instruções para iniciar a configuração do projeto para rodá-lo localmente:

1. Clone o repositório
  * http: `git clone https://github.com/AlessandroFMello/super-hero-backend.git`.
  ou
  * ssh: `git@github.com:AlessandroFMello/super-hero-backend.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd super-hero-backend`

2. Instale as dependências
  * `npm install`


#### Variáveis de ambiente

**Você irá precisar configurar as variáveis globais do MySQL.** Você pode usar esse [Conteúdo de variáveis de ambiente com NodeJS](https://blog.rocketseat.com.br/variaveis-ambiente-nodejs/) como referência.

**Faça essas configurações também para as variáveis de ambiente usadas neste arquivo:**

`super-hero-backend/src/database/config/config.js`

```
const options = {
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database:
    `${process.env.DB_NAME}${suffix[environment]}`,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
};

```

**É essencial usar essas 4 variáveis no arquivo acima:**

#### Variáveis:

`host: process.env.DB_HOST`

`user: process.env.DB_USER`

`password: process.env.DB_PASS`

`database: process.env.DB_NAME`

**Com elas que iremos conseguir conectar ao banco do avaliador automático**

***Instruções***
1. Renomeie o arquivo [super-hero-backend/.env.example](super-hero-backend/.env.example) para .env

2. Altere as variáveis DB_USER e DB_PASS para o seus respectivos usuário e senha do MySQL

3. Mantenha a variável DB_HOST como localhost e, se desejar, altere a variável DB_NAME (ela define o nome do banco de dados)

4. a variável DB_PORT define em qual porta o servidor irá rodar localmente. Por padrão ela está configurada para rodar o servidor na porta 3001

### Rotas da API (localmente)

* [http://localhost:3001/heroes](http://localhost:3001/heroes) lista todos os super-heróis e seus respectivos universos

* [http://localhost:3001/universes](http://localhost:3001/universes) lista todos os universos

* [http://localhost:3001/heroes/1](http://localhost:3001/heroes/1) lista um único super-herói (altere o número final da url para o id do heroi desejado)

* [http://localhost:3001/universes/1](http://localhost:3001/universes/1) lista todos os super-heróis de determinado universo (altere o número final da url para o id do universo desejado)

### Rotas da API (remotamente)

* [https://alessandro-super-hero-backend.herokuapp.com/heroes](https://alessandro-super-hero-backend.herokuapp.com/heroes) lista todos os super-heróis e seus respectivos universos

* [https://alessandro-super-hero-backend.herokuapp.com/universes](https://alessandro-super-hero-backend.herokuapp.com/universes) lista todos os universos

* [https://alessandro-super-hero-backend.herokuapp.com/heroes/1](https://alessandro-super-hero-backend.herokuapp.com/heroes/1) lista um único super-herói (altere o número final da url para o id do heroi desejado)

* [https://alessandro-super-hero-backend.herokuapp.com/universes/1](https://alessandro-super-hero-backend.herokuapp.com/universes/1) lista todos os super-heróis de determinado universo (altere o número final da url para o id do universo desejado)
