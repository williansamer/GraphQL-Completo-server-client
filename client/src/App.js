import "./App.css";
import React from "react";

import { client } from "./components/config/client-graphql";
import { ApolloProvider } from "@apollo/client";

import ContatosContextProvider from "./components/context/ContatosContext";
import Header from "./components/Header";
import Form from "./components/Form";
import Contatos from "./components/Contatos";

function App() {

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Header />
        <ContatosContextProvider>
          <main>
            <Form />
            <Contatos />
          </main>
        </ContatosContextProvider>
      </div>
    </ApolloProvider>
  );
}

export default App;
