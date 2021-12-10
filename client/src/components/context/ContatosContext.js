import React, { createContext, useContext } from "react";
import { useMutation, useQuery } from "@apollo/client";

import { GET_CONTATOS, ADD_CONTATO, REMOVE_CONTATO, UPDATE_CONTATO } from "../graphql";

const MyContext = createContext();

const createCache = {
  //criarContato é uma função.

  //>>>3ª<<< Forma de atualizar a página ao criar um novo contato. O melhor método entre os 3 apresentados, pois utiliza menos memória já que pega os dados do cache.

  //Podemos colocar um outro parâmetro depois do ADD_CONTATO, que é um objeto
  update(cache, { data }) {
    //update é uma função que recebe o cache e o data. É utilizado para atualizar o cache.
    //Qdo criar o contato, ele vai atualizar o cache, e o data vai ser o que está dentro do cache
    const newContactResponse = data?.criarContato; //data.criarContato é o retorno ao ser executado o mutation
    const existingContacts = cache.readQuery({ query: GET_CONTATOS }); //Pegando os contatos do cache

    cache.writeQuery({
      //Atualizando o cache
      query: GET_CONTATOS, //Pegando o query que está no GET_CONTATOS
      data: {
        contatos: [...existingContacts.contatos, newContactResponse], //Pegando os contatos do cache, e adicionando o novo contato
      },
    });
  },
};

export default function ContatosContextProvider({ children }) {
  const { data, loading } = useQuery(GET_CONTATOS);
  const [criarContato] = useMutation(ADD_CONTATO, createCache);
  const [deletarContato] = useMutation(REMOVE_CONTATO);
  const [atualizarContato] = useMutation(UPDATE_CONTATO); 
  //OBS IMPORTANTE: Ñ precisa fazer tratativa em cache ou refetch em 'atualizarContato', em 'criarContato' e 'deletarContato' já faz isso..
  //..e ao atualizar, ele pega estes dados do cache e atualiza, não havendo portanto necessidade de refetch.

  const [refId, refNome, refEmail, refTelefone] = useMyRefs(4);

  function handleSubmit(event) {
    event.preventDefault();

    if(refId.current.value === ""){
      criarContato({
        variables: {
          id: refId.current.value, //O refId é inteiro, mas ao ser armazenado no cache, ele vira string.
          nome: refNome.current.value,
          email: refEmail.current.value,
          telefone: refTelefone.current.value,
        },
    });
    } else{
      atualizarContato({
        variables: {
          id: parseInt(refId.current.value), //O refid.current.value retorna um string, então precisamos converter para inteiro, já que no backend o id é um inteiro.
          nome: refNome.current.value,
          email: refEmail.current.value,
          telefone: refTelefone.current.value,
        }
      })
    }

    refId.current.value = '';
    refNome.current.value = '';
    refEmail.current.value = '';
    refTelefone.current.value = '';
  }

  function handleUpdate(item){
    refId.current.value = item.id;
    refNome.current.value = item.nome;
    refEmail.current.value = item.email;
    refTelefone.current.value = item.telefone;
  }

  return (
    <MyContext.Provider
      value={{
        contatos: {
          itens: data ? data.contatos : [],
          loading,
          deletarContato,
        },
        form: { 
          handleSubmit, 
          handleUpdate,
          refId,
          refNome, 
          refEmail, 
          refTelefone 
        },
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export function useContatosContext() {
  const context = useContext(MyContext); // pega o contexto do provider e retorna o valor dele
  return context;
}

function useMyRefs(size) {
  return Array(size).fill(0).map(() => React.createRef());
  //Criando um array de refs, com o tamanho de length passado por parâmetro e preenchendo com 0 para cada posição.
}