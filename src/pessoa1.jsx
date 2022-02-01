import React from "react";

export default props =>{
  return(
    <>
      <p>{"=".repeat(30)}</p>
      <p>Nome: {props.nom}</p>
      <p>Data de Nascimento: {props.nasc}</p>
      <p>Altura: {props.altu}</p>
    </>
  )
}