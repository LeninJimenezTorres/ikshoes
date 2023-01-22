import React from 'react'
import '../css/Footer.css'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='product-social'>
                <div className='product-category-title'>
                    @HUSHPUPPIESCO
                </div>
                <div className='product-category-social'>
                    <ul>
                        <li className='icon-facebook'><a href="#"></a></li>
                        <li className='icon-instagram'><a href="#"></a></li>
                    </ul>
                </div>
            </div>
            <div className='footer-info'>
                <div className='footer-info-in'>
                    <div className='servicio-cliente'>
                        <div className='footer-title'>
                            SERVICIO AL CLIENTE
                        </div>
                        <ul className='footer-container-list'>
                            <li><a href="#">CONTÁCTENOS</a></li>
                            <li><a href="#">CAMBIOS Y DEVOLUCIONE</a></li>
                            <li><a href="#">POLÍTICAS DE LA TIENDA</a></li>
                            <li><a href="#">POLÍTICAS DE DATOS</a></li>
                        </ul>
                    </div>
                    <div className='mi-cuenta'>
                        <div className='footer-title'>
                            MI CUENTA
                        </div>
                        <ul className='footer-container-list'>
                            <li><a href="#">MIS PEDIDOS</a></li>
                            <li><a href="#">MIS DEVOLUCIONES</a></li>
                        </ul>
                    </div>
                    <div className='recursos'>
                        <div className='footer-title'>
                            RECURSOS
                        </div>
                        <ul className='footer-container-list'>
                            <li><a href="#">TIENDAS</a></li>
                            <li><a href="#">DEVOLUCIONES</a></li>
                        </ul>
                    </div>
                    <div className='newsletter'>
                        <div className='footer-title'>
                            NEWSLETTER
                        </div>
                        <div className='registrate'>
                            Regístrate para ser el primero en recibir nuestras noticias
                        </div>
                        <div className='email'>
                            <input type="email" name="" value="" placeholder='E-MAIL'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sponsors'>
                <div className='sponsors-in'>
                    <div className='desarrollado'>
                        <div className='sponsors-titles'>
                            Desarrollado por:
                        </div>
                        <div className='sponsors-image desarrollado-imagen'></div>
                    </div>
                    <div className='tecnologia'>
                        <div className='sponsors-titles'>
                            Tecnología:
                        </div>
                        <div className='sponsors-image tecnologia-imagen'></div>
                    </div>
                    <div className='espacio espacio-left'></div>
                    <div className='espacio'></div>
                    <div className='certificado'>
                        <div className='sponsors-titles'>
                            Certificado por:
                        </div>
                        <div className='sponsors-image certificado-imagen'></div>
                    </div>
                    <div className='espacio espacio-left'></div>
                    <div className='espacio'></div>
                    <div className='metodos-pago'>
                        <div className='sponsors-titles'>
                            Métodos de pago:
                        </div>
                        <div className='sponsors-image metodos-imagen'>
                            <ul className='sponsors-metodos-list'>
                                <li className='paypal'></li>
                                <li className='visa'></li>
                                <li className='efecty'></li>
                                <li className='dinners'></li>
                                <li className='master'></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
