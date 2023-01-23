import React from 'react'
import '../css/Productos.css';
import Data from '../zapato.json';
import Productoindividual from './Productoindividual';
const Productos = () => {
    const productos=[...Data]
    console.log('productos');
    console.log(productos);
    return (
        <div className='productos-contenedor'>
            <div className='productos-contenedor-in'>
                <div className='productos-title'>
                    PRODUCTOS RECOMENDADOS
                </div>
                <div className='productos-contenedor-lista'>
                    <ul>
                        {
                            productos.map((item,index)=>
                                <div key={index} className='item-productos'>
                                    <li>    
                                        <a href="#">
                                           <Productoindividual datos={item}/> 
                                        </a>
                                    </li>
                                </div>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Productos
