import React from 'react'

import { useContatosContext } from '../context/ContatosContext';
import Item from '../Item'

let ContainerContatos = ({children}) => (<div className="container-contato">{children}</div>)

export default function Contatos() {

  const {contatos} = useContatosContext();

  if(contatos.loading) return <ContainerContatos>Carregando...</ContainerContatos>

  return (
    <ContainerContatos>
      {contatos.itens.map((item, index)=>{
        return <Item key={index} item={item} />
      })} 
    </ContainerContatos>
  )
}
