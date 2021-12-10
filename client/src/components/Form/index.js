import React from "react";

import { useContatosContext } from "../context/ContatosContext";

export default function Form() {
  const { form } = useContatosContext();

  return (
    <form onSubmit={form.handleSubmit} className="container-form">
      <input
        ref={form.refId}
        name="id"
        type="hidden"

      />
      <label className="label-form">
        <h3>Nome</h3>
        <input
          ref={form.refNome}
          name="nome"
          type="text"
          placeholder="Digite o nome"
        />
      </label>
      <label className="label-form">
        <h3>Email</h3>
        <input
          ref={form.refEmail}
          name="email"
          type="email"
          placeholder="Digite o email"
        />
      </label>
      <label className="label-form">
        <h3>Telefone</h3>
        <input
          ref={form.refTelefone}
          name="telefone"
          type="text"
          placeholder="Digite o telefone"
        />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}
