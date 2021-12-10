
exports.up = function(knex) { // Esta função será executada quando o comando migrate for executado para criar a tabela
  return knex.schema.createTable('contato', table => { // O comando createTable irá criar a tabela contato
    table.increments("id").primary();
    table.string("nome").notNull();
    table.string("email").notNull().unique();
    table.string("telefone").notNull();
  });
};

exports.down = function(knex) { // Esta função será executada quando o comando migrate for executado para voltar atrás na tabela
  return knex.shema.dropTable('contato'); // O comando dropTable irá apagar a tabela contato
};
