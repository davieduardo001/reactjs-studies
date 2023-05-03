import './App.css';

//import Evento from './src/components/Evento';
//import Formulario from './src/components/Formulario';
//wimport Form from './src/components/Form';
import Condicional from './src/components/Condicional'
import Listas from './src/components/Listas';

function App() {

  const meusItens = ['react', 'view', 'angular']

  return (
    <div className="App">
      <h1>Rendenizacao condicional</h1>
      <Condicional/>
      <Listas itens={meusItens}/>
    </div>
  );
}

export default App;