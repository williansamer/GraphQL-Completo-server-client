import React from "react";
import { useContatosContext } from "../context/ContatosContext";
import { GET_CONTATOS } from "../graphql";
//import { GET_CONTATOS } from "../graphql";

export default function Item({ item }) {
  const {contatos, form} = useContatosContext();


  return (
    <div className="container-item">
      <div className="header-item">
        <a href="name" className="link" onClick={(e)=>{
          e.preventDefault();
          form.handleUpdate(item);
        }
        }>
          <h4>{item.nome}</h4>
        </a>
        <button type="button" className="close" 
        onClick={()=>
          contatos.deletarContato({
            variables: {id: item.id},
            refetchQueries: [{query: GET_CONTATOS}] // refetchQueries é um array que retorna algo após ocorrer a mutation. Neste caso está retornando um obj contendo a query GET_CONTATOS que será executada após a adição da variable.
          })}>  {/* OBS: não tem como fazer atualização dos dados via 'cache'(3ª opção). A menos que trate esta situação no BACKEND */}
            <span>&times;</span>
        </button>
      </div>
      <div className="main-item">
        <p>{item.email}</p>
        <p>{item.telefone}</p>
      </div>
    </div>
  );
}
