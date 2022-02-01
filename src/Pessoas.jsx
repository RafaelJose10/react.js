import React from 'react';
import Pessoa2 from './pessoa2.jsx';
import Pessoa3 from "./pessoa3.jsx"
import Pessoa4 from "./pessoa4.jsx";

export default () => {

  const Nome = "Leafar";
  const Data = "19/04/1999";
  const Altura = "1.75";
  const Peso = "59";

  /////////////////

  const Nome4 = "Rafael Jose de freitas Antunes";
  const Data4 = "19/04/1997";
  const Altura4  ="1.75";
  const Peso4 = "59kg";

  return(
    <>
      <Pessoa2
        N = "Rafaela"
        D = "19/04/2002"
        A = "170"
        P = "55"
      />

      <Pessoa3
        No={Nome} Da={Data} Al={Altura} Pe={Peso} />


        <Pessoa4 N={Nome4} D={Data4} A={Altura4} P={Peso4}/>
    </>
  );
}
