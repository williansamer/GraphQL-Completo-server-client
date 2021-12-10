
module.exports = {
  Query: {//O que é cada parametro está abaixo.
    contatos: async(obj,args,{handle})=>{ //O handle é um contexto que vem do apollo server e este contexto esta sendo desestruturado para pegar o handle.
      return await handle.contatos();
    }
  },

  Mutation: {
    criarContato: async (_, {data}, {handle})=>{
      return await handle.criarContato(data);
    },

    atualizarContato: async (_, {id, data}, {handle})=>{
      return await handle.atualizarContato(id, data);
    },

    deletarContato: async (_, {filtro: {id, email}}, {handle}) =>{
      return await handle.deletarContato(id, email);
    }
  }
}


/* 
Referente aos parâmentos.. 
OBJ: Obj passa por todas as funções do GraphQL e caso seja necessário, pode ser utilizado para tratar algumas informações.
ARGS: argumentos passados dos tipos(Query, Mutation, Subscription) para os resolvers
CONTEXT: contexto do servidor. Passa dados como, por exemplo, o usuário logado, o token, authenticação, etc.
INFO: Info passa informações adversas como, por exemplo, o erro, o sucesso, etc.
*/