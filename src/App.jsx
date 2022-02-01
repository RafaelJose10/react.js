import React from 'react';
import Pessoas from "./Pessoas.jsx";
import Pess1 from "./pessoa1.jsx";
import Corpo from "./corpo.jsx";
import './App.css';

function App() {
  return (
    <main>
      <Pessoas/>

      <Pess1
        nom="Rafael"
        nasc="19/04/1997"
        altu="1.75"
      />


      <Corpo 
      canal="CFB Curso"
      youtube="youtube.com/cfbcurso.com"
      curso="react.js"
      />
    </main>
  );
}

export default App;