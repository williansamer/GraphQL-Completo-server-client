import { gql } from "@apollo/client";

//IMPORTANTE: As palavras que dão nome as Queries(contatos) e Mutations(criarContato e deletarContato) TEM QUE SER IGUAL AO QUE ESTÁ NO BACKEND

export const GET_CONTATOS = gql`
  query Show {
    contatos {
      id
      nome
      email
      telefone
    }
  }
`

export const ADD_CONTATO = gql`
  mutation criarContato($nome: String!, $email: String!, $telefone: String) {
    criarContato(data: { nome: $nome, email: $email, telefone: $telefone }) {
      id
      nome
      email
      telefone
    }
  }
`

export const REMOVE_CONTATO = gql`
  mutation deletarContato($id: Int){
    deletarContato(filtro: {id: $id})
  }
`

export const UPDATE_CONTATO = gql`
  mutation Atualizar($id: Int!, $nome: String!, $email: String!, $telefone: String){
    atualizarContato(
    id: $id, 
    data: {nome: $nome, email: $email, telefone: $telefone})
    {
      id
      nome
      email
      telefone
    }
  }
`