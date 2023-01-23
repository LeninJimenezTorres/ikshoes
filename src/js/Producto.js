import React,{useState, useEffect} from 'react'
import '../css/Producto.css';
import UseFetch from '../Funciones/UseFetch';
import Data from '../zapato.json';
const Producto = ({datoproducto}) => {
    //console.log(Data);
    const [previewproduct, setPreviewproduct] = useState({
        nombre:undefined,
        precio:undefined,
        referencia:undefined,
        foto:undefined
    });
    /*
    console.log('----------------------');
    console.log('Datos preview: ');
    console.log(previewproduct);
    console.log('----------------------');
    */
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

    if(datoproducto && datoproducto!=undefined){
        console.log('VERGA LLEGO');
        console.log(datoproducto)
    }
    
    useEffect(() => {
        if(Data && !datoproducto || datoproducto==undefined){
            setPreviewproduct({
                ...previewproduct, 
                nombre:Data[0].nombre,
                precio:Data[0].precio,
                referencia:Data[0].referencia,
                foto:Data[0].foto
            });   
            /*     
            console.log('----------------------');
            console.log('Datos preview: ');
            console.log(previewproduct);
            console.log('----------------------');
            */
        }
        if(datoproducto && datoproducto!=undefined){
            console.log('Dato producto foto: ');
            console.log(datoproducto.foto);
            console.log('*************');
    
            setPreviewproduct({
                ...previewproduct, 
                nombre:datoproducto.nombre,
                precio:datoproducto.precio,
                referencia:datoproducto.referencia,
                foto:'../img/'+datoproducto.foto
            });      
        }
    }, [datoproducto])

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
                                {
                                    (datoproducto && datoproducto.foto && datoproducto.foto!=undefined)?
                                    <img src={previewproduct.foto} alt=""/>
                                    :
                                    <img src="../img/preview/1.jpg" alt=""/>
                                }
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
                                <div className='talla-in'>TALLA</div>
                                <div className='talla-list'>
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
                                </div>
                            </div>
                            <div className='guia-tallas'>
                                <a href="#">GUÍA DE TALLAS</a>
                            </div>
                            <div className='comprar'>
                                <button type="submit">AÑADIR AL CARRITO</button>
                                <div className='corazon'></div>
                            </div>
                        </div>
                    </div>
                    <div className='producto-detalles'>
                        <div className='detalles-producto'>
                            <div className='detalles-in'>
                                <h3>DETALLES DE PRODUCTO</h3>
                            </div>   
                            <div className='detalles-content'>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div> 
                        </div>
                        <div className='tecnologias-producto'>
                            <div className='tecnologias-in'>
                                <h3>TECNOLOGÍAS</h3>
                            </div>   
                            <div className='tecnologias-content'>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Producto
