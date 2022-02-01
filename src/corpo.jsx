import React from "react";

export default function Dados(props){
  return(
    <section>
      <p>{"=".repeat(30)}</p>
      <p> Canal:{props.canal}</p>
      <p> Youtube:{props.youtube}</p>
      <p> Curso:{props.curso}</p>
    </section>
  )
}
