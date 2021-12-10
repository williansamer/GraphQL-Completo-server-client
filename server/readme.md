### Instalações iniciais 
> npm init -y - 

> npm install nodemon apollo-server graphql graphql-tools/load-files graphql-tools/merge knex pg

> para rodar o docker, utilizei o script: docker run --name postgres -p 5432:5432 -e POSTGRES_PASSWORD=docker -d postgres

> npx knex init(Gera um arquivo knexfile.js que só será executado) - terá que fazer algumas atualizações

> npx knex migrate:make create_table_contato(Irá criar o DB)

### Para executar a migrate: npx knex migrate:latest