import './App.css';
import freeLogo from '../src/img/free-logo.png'
import Boton from './components/boton'
import Contador from './components/contador'
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = ()=>{
    setNumClics(numClics + 1);
  }

  const reiniciarContador = ()=>{
    setNumClics(0)
  }

  return (
    <div className="App">
     <div className='freecodecamp-logo-contenedor'>
      <img
      className='freecodecamp-logo'
      src={freeLogo}
      alt='Logo de freecodecamp' />
     </div>
     <div className='contador-contenedor'>
        <Contador numClics={numClics} />
        <Boton
        texto='Clic'
        botonClic={true}
        manejarClic={manejarClic} />
        <Boton
        texto='Reiniciar'
        botonClic={false}
        manejarClic={reiniciarContador} />
     </div>
    </div>
  );
}

export default App;
