import logo from './logo.svg';
import './App.css';
import Descuentos from './js/Descuentos';
import Menusecundario from './js/Menusecundario';
import Menuprincipal from './js/Menuprincipal';
import Producto from './js/Producto';
import Footer from './js/Footer';
import Productos from './js/Productos';
function App() {
  return (
    <div className="App">
      <Descuentos/>
      <Menusecundario/>
      <Menuprincipal/>
      <Producto/>
      <Productos/>
      <Footer/>
    </div>
  );
}

export default App;
