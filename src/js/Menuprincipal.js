import React,{useState} from 'react'
import '../css/Menuprincipal.css'

const Menuprincipal = () => {
    const [carrito, setcarrito] = useState(0)
  return (
    <div className='manu-main-container'>
        <div className='manu-main-in'>
            <div className='menu-logo'>
                <div className='logo-container'>
                    <div className='logo'></div>
                    <div className='logo-letras'>Hush Puppies</div>
                </div>
                <div className='submenu'>
                    <ul>
                        <li><a href="#">Hombre</a></li>
                        <li><a href="#">Mujer</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Historia</a></li>
                        <li><a href="#">Tiendas</a></li>
                    </ul>
                </div>
            </div>
            <div className='menu-info'>
                <div className='menu-info-in buscar'>
                    <input type="text" name="buscar" placeholder='BUSCAR'/>
                    <span class="arrow">&nbsp;</span> 
                </div>
                <div className='menu-info-in pedidos'>
                    <p> ENVÍO GRATIS PARA PEDIDOS SUPERIORES A $300.000</p>
                </div>
                <div className='menu-info-in carrito'>
                    <span class="bag">&nbsp;</span> 
                    <p>CARRITO {carrito}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Menuprincipal
