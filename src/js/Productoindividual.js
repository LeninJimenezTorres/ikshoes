import React from 'react'
import '../css/Productoindividual.css';
const Productoindividual = ({datos, seleccion}) => {
    const seleccionado=datos;
    const imagePreviewGaleryUrl = 'https://raw.githubusercontent.com/LeninJimenezTorres/ikshoes/master/src/img/preview/';
    const imageGaleryUrl = 'https://raw.githubusercontent.com/LeninJimenezTorres/ikshoes/master/src/img/';
    //const imagePreviewGaleryUrl = '../img/preview/';
    //const imageGaleryUrl = '../img/';
  
    return (
        <div className='producto-individual-container' onClick={()=>{seleccion(seleccionado)}}>
            <div className='thumbles-items'>
                <img src={imageGaleryUrl+datos.foto} alt=""/>
            </div>
            <div className='thumbles-items-preview'>
                <img src={imageGaleryUrl+datos.foto} alt=""/>
                <img src={imageGaleryUrl+datos.foto} alt=""/>
                <img src={imageGaleryUrl+datos.foto} alt=""/>
                <img src={imageGaleryUrl+datos.foto} alt=""/>
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
