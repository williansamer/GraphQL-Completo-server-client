const db = require("../db");

class UsuarioCadastroService {

  contatos = async()=>{
    return await db("contato")
  };

  criarContato = async (data)=>{
    return await (await db("contato").insert(data).returning("*"))[0]
  };

  atualizarContato = async (id, data)=>{
    return await (await db("contato").where({id: id}).update(data).returning("*"))[0]
  };

  deletarContato = async (id, email) =>{
    if(id){
      return await(await db("contato").where({id: id}).delete())
    }
    if(email){
      return await(await db("contato").where({email: email}).delete())
    }

    throw new Error("Digite ao menos um parâmetro")
  }
}

module.exports = new UsuarioCadastroService();