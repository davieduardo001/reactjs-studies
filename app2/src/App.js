import './App.css';
import { useState } from "react";

//import Evento from './src/components/Evento';
//import Formulario from './src/components/Formulario';
//wimport Form from './src/components/Form';
//import Condicional from './src/components/Condicional'
//import Listas from './src/components/Listas';
import StateLift from './components/StateLift';
import Saudacao from './components/Saudacao';

function App() {

  //const meusItens = ['react', 'view', 'angular']
  const [nome, setNome] = useState();

  return (
    <div className="App">
      <h1>State lift</h1>
      <StateLift setNome={setNome}/>
      <br></br>
      {nome}
      <br></br>
      <Saudacao nome={nome}/>
    </div>
  );
}

export default App;