import React from "react";

export default props => {
  return(
    <>
      <p>{"=".repeat(30)}</p>
      <p>Nome: {props.N}</p>
      <p>Data de Nascimento: {props.D} </p>
      <p>Altura: {props.A}</p>
      <p>Peso: {props.P}</p>
    </>
  )
}