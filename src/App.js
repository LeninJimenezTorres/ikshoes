import logo from './logo.svg';
import './App.css';
import Descuentos from './js/Descuentos';
import Menusecundario from './js/Menusecundario';
import Menuprincipal from './js/Menuprincipal';
import Producto from './js/Producto';
function App() {
  return (
    <div className="App">
      <Descuentos/>
      <Menusecundario/>
      <Menuprincipal/>
      <Producto/>
    </div>
  );
}

export default App;
