import {ApolloClient, InMemoryCache} from '@apollo/client';

export const client = new ApolloClient({ //Chamando a API com o ApolloClient
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(
    { typePolicies:{ //typePolicies é um objeto que define as regras de como o ApolloClient deve lidar com os dados
      Query: { //Query é o tipo de dados que a API retorna
        fields: { //field é o nome do atributo que a API retorna
          contatos: {
            merge(_, incoming){ //merge é um método que recebe dois parâmetros, o primeiro é o valor que já existe no cache, o segundo é o valor que veio da API
              return incoming; //retornando incoming para que o cache seja atualizado
            }
          }
        }
      }
    }}
  )
});