import React from 'react'
import '../css/Productoindividual.css';
const Productoindividual = ({datos}) => {
    return (
        <div className='producto-individual-container'>
            <div className='thumbles-items'>
                <img src={'../img/'+datos.foto} alt=""/>
            </div>
            <div className='thumbles-items-preview'>
                <img src={'../img/'+datos.foto} alt=""/>
                <img src={'../img/'+datos.foto} alt=""/>
                <img src={'../img/'+datos.foto} alt=""/>
                <img src={'../img/'+datos.foto} alt=""/>
            </div>
            <div className='nombre-producto-item'>
                {datos.nombre}
            </div>
            <div className='precio-producto-item'>
                ${datos.precio}
            </div>
        </div>
    )
}

export default Productoindividual
