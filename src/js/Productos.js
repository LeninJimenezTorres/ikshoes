import React, {useState, useEffect} from 'react'
import '../css/Productos.css';
import Data from '../zapato.json';
import Productoindividual from './Productoindividual';
const Productos = ({opcion}) => {
    const productos=[...Data]
    
    //console.log('productos');
    //console.log(productos);

    const [productoselec, setproductoselec] = useState(undefined)
    const seleccion =(seleccionado)=>{
        setproductoselec(seleccionado)
        //console.log('Datos seleccionado:')
        //console.log(productoselec)
    }

    useEffect(() => {
        if(productoselec!=undefined){
            opcion(productoselec)
        }
    })

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
                                           <Productoindividual datos={item} seleccion={seleccion}/> 
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
