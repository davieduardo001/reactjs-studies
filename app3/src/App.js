import './App.css';

// 2 - reaproveitamento de estrutura
import { Outlet } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Footer from './components/Footer';

function App() {
  return (
    <div className='main_container'>
      <Navbar/> 
      <h1>React router</h1>
      <Outlet />
      <Footer/>
    </div>
  );
}

export default App;
