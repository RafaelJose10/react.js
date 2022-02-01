import React from "react";

export default props => {
  return(<>
      <p>{"=".repeat(30)}</p>
      <p>Nome: {props.No}</p>
      <p>Data de Nascimento: {props.Da}</p>
      <p>Altura: {props.Al}</p>
      <p>Peso: {props.Pe}</p>
  </>)
}