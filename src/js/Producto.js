import React,{useState, useEffect} from 'react'
import '../css/Producto.css';
import UseFetch from '../Funciones/UseFetch';
import Data from '../zapato.json';
const Producto = () => {
    console.log(Data);
    const [previewproduct, setPreviewproduct] = useState({
        nombre:undefined,
        precio:undefined,
        referencia:undefined,
        foto:undefined
    });
    console.log('----------------------');
    console.log('Datos preview: ');
    console.log(previewproduct);
    console.log('----------------------');

    /*
    const [nombre, setnombre] = useState(undefined);
    const [precio, setprecio] = useState(undefined);
    const [referencia, setreferencia] = useState(undefined);
    const [foto, setfoto] = useState(undefined);
    */
    const [url, seturl] = useState('http://localhost:3000/zapato.json')
    //const estado=UseFetch(url);
    //console.log(estado);

    const images_thumbs=[
        {
            'id':'1',
            'url':'../img/preview/1.jpg'
        },
        {
            'id':'2',
            'url':'../img/preview/2.jpg'
        },
        {
            'id':'3',
            'url':'../img/preview/3.jpg'
        },
        {
            'id':'4',
            'url':'../img/preview/4.jpg'
        }
    ]

    useEffect(() => {
        if(Data){
            setPreviewproduct({
                ...previewproduct, 
                nombre:Data[0].nombre,
                precio:Data[0].precio,
                referencia:Data[0].referencia,
                foto:Data[0].foto
            });        
            console.log('----------------------');
            console.log('Datos preview: ');
            console.log(previewproduct);
            console.log('----------------------');
        
            
        }
    }, [])

    return (
        <div className='producto-container'>
            <div className='producto-in'>
                <div className='producto-section'>
                    HUSHPUPPIESCO / CALZADO / ZAPATILLA HOMBRE PELIKAN
                </div>
                <div className='producto-sub'>
                    <div className='producto-sub-in'>
                        <div className='producto-preview'>
                            <div className='producto-imagen'>
                                <img src="../img/preview/2.jpg" alt=""/>
                            </div>
                            <div className='producto-imagenes'>
                                <ul>
                                    {
                                        images_thumbs.map(thumb=>
                                            <li key={thumb.id}><img src={thumb.url} alt=""/></li>
                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className='producto-options'>
                            <div className='producto-membrete'>
                                <div className='producto-nombre'>
                                    {previewproduct.nombre}
                                </div>
                                <div className='producto-costo'>
                                    ${previewproduct.precio}
                                </div>
                                <div className='producto-codigo'>
                                    Cod. de producto {previewproduct.referencia} 
                                </div>
                            </div>
                            <div className='producto-color'>
                                <p>COLOR</p>
                                <ul>
                                    <li><img src='../img/preview/1.jpg' alt=""/></li>
                                    <li><img src='../img/preview/1.jpg' alt=""/></li>
                                </ul>
                            </div>
                            <div className='producto-talla'>
                                <p>TALLA</p>
                                <ul>
                                    <li>5</li>
                                    <li>5.5</li>
                                    <li>6</li>
                                    <li>6.5</li>
                                    <li>7</li>
                                    <li>7.5</li>
                                    <li>8</li>
                                    <li>8.5</li>
                                    <li>9</li>
                                    <li>9.5</li>
                                </ul>
                                <div className='guia-tallas'>
                                    <a href="#">GUIA DE TALLAS</a>
                                </div>
                            </div>
                            <div className='comprar'>
                                <button type="submit">AÑADIR AL CARRITO</button>
                                <div className='corazon'></div>
                            </div>
                        </div>
                    </div>
                    <div className='producto-detalles'>
                        <div className='detalles-producto'>
                            <h3>DETALLES DEL PRODUCTO</h3>
                            <p></p>
                        </div>
                        <div className='tecnologias-producto'>
                            <h3>TECNOLOGÍAS</h3>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Producto
