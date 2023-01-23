import logo from './logo.svg';
import './App.css';
import Descuentos from './js/Descuentos';
import Menusecundario from './js/Menusecundario';
import Menuprincipal from './js/Menuprincipal';
import Producto from './js/Producto';
import Footer from './js/Footer';
import Productos from './js/Productos';
import { useState } from 'react';

function App() {
  const [datoproducto, setdatoproducto] = useState(undefined)
  const opcion = (escogido)=>{
    if(escogido){
      setdatoproducto(escogido)
      console.log('Datos seleccionado:')
      console.log(escogido)
    }
  }
  return (
    <div className="App">
      <Descuentos/>
      <Menusecundario/>
      <Menuprincipal/>
      <Producto datoproducto={datoproducto}/>
      <Productos opcion={opcion}/>
      <Footer/>
    </div>
  );
}

export default App;
