const { ApolloServer} = require('apollo-server');
const graphql = require('./src/graphql');
const UsuarioCadastroService = require('./src/services/UsuarioCadastroService');

const server = new ApolloServer({
  ...graphql,

  formatError: (error)=>{
    if(error.message.startsWith("Digite ao menos um parâmetro")){
      return new Error(error.message);
    }
    return error;
  },

  context: ()=>({
    handle: UsuarioCadastroService
  })
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});