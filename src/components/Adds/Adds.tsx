import logo from '../../img/logo.svg'
import icono_wc from '../../img/icono_wc.svg'
import icono_estacionamiento from '../../img/icono_estacionamiento.svg'
import icono_dormitorio from '../../img/icono_dormitorio.svg'
import anuncio1 from '../../img/anuncio1.jpg'
import anuncio2 from '../../img/anuncio2.jpg'
import anuncio3 from '../../img/anuncio3.jpg'
import anuncio4 from '../../img/anuncio4.jpg'
import anuncio5 from '../../img/anuncio5.jpg'
import anuncio6 from '../../img/anuncio6.jpg'
import { changeMode } from "../../utils/DarkMode";

const Adds = () => {
    return (
        <div>
            <header className="header">
                <div className="contenedor contenido-header">
                    <div className="barra">
                        <a href="/real_state_template/">
                            <img src={logo} alt="Logotipo de Bienes Raices"/>
                        </a>

                        <div className="derecha mb-4">
                        <button onClick={changeMode} className='theme-toggle-light btn bi bi-sun-fill rounded-pill' id="dm-icon"></button>
                            <button className="btn d-md-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offCanvaNavBar" aria-controls="offCanvaNavBar">
                                <i className="bi bi-list"></i>
                            </button>
                            <div className="navegacion d-lg-flex">
                                <a href="/real_state_template/">Inicio</a>
                                <a href="/real_state_template/AboutUs">Nosotros</a>
                                <a href="/real_state_template/ContactUs">Contacto</a>
                                <a href="/real_state_template/Blog">Blog</a>         
                            </div>

                            <div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabIndex={-1} id="offCanvaNavBar" aria-labelledby="offCanvaNavBarLabel">
                                <div className="offcanvas-header">
                                        <h2 className="offcanvas-title" id="offCanvaNavBarLabel">Bienes Raíces</h2>
                                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body">  
                                    <ul className='list-group list-group-flush mx-3 mt-4'>
                                    <a className="nav-item list-group-item list-group-item-action py-2 ripple" href="/">Inicio</a>
                                    <a className="nav-item list-group-item list-group-item-action py-2 ripple" href="/real_state_template/Aboutus">Nosotros</a>
                                        <a className="nav-item list-group-item list-group-item-action py-2 ripple active" href="/real_state_template/Adds">Anuncios</a>
                                        <a className="nav-item list-group-item list-group-item-action py-2 ripple" href="/real_state_template/Blog">Blog</a>
                                        <a className="nav-item list-group-item list-group-item-action py-2 ripple" href="/real_state_template/ContactUs">Contacto</a>
                                    </ul>      
                                </div>  
                            </div>
                        </div>
                    </div> 
                </div>
            </header>     

            {/** Adds */}   

            {/**Add 1 */}

            <div className="container">

                <h2 className="m-4">Casas y Depas en Venta</h2>

                <div className="row">
                    <div className="col-sm-12 col-xl-4 mb-3">
                        <div className="card bg-body-tertiary">
                            <div className="card-body">
                            <img loading="lazy" src={anuncio1} alt="anuncio"/>
                                <div className="card-title">
                                    <h3 className="m-4">Lake House</h3>
                                </div>
                                <div className="card-text">
                                    <p>Casa en el lago con excelente vista, acabados de lujo a un excelente precio</p>
                                    <p className="precio">$3,0000,000</p>
                                    <ul className="icons">
                                        <li>
                                            <img className="icon" loading="lazy" src={icono_wc} alt="icono wc"/>
                                            <p>3</p>
                                        </li>
                                        <li>
                                            <img className="icon" loading="lazy" src={icono_estacionamiento} alt="icono estacionamiento"/>
                                            <p>3</p>
                                        </li>
                                        <li>
                                            <img className="icon" loading="lazy" src={icono_dormitorio} alt="icono habitaciones"/>
                                            <p>4</p>
                                        </li>
                                    </ul>

                                    <a href="/real_state_template/Add" className="btn orangeBtn btn-lg btn-block">
                                        Ver Propiedad
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                        {/**Add 2 */}

                    <div className="col-sm-12 col-xl-4 mb-3">
                        <div className="card-block">
                            <div className="card bg-body-tertiary">
                                <div className="card-body">
                                <img loading="lazy" src={anuncio2} alt="anuncio"/>
                                    <div className="card-title">
                                        <h3 className="m-4">Lake House</h3>
                                    </div>
                                    <div className="card-text">
                                        <p>Casa en el lago con excelente vista, acabados de lujo a un excelente precio</p>
                                        <p className="precio">$3,0000,000</p>
                                        <ul className="icons">
                                            <li>
                                                <img className="icon" loading="lazy" src={icono_wc} alt="icono wc"/>
                                                <p>3</p>
                                            </li>
                                            <li>
                                                <img className="icon" loading="lazy" src={icono_estacionamiento} alt="icono estacionamiento"/>
                                                <p>3</p>
                                            </li>
                                            <li>
                                                <img className="icon" loading="lazy" src={icono_dormitorio} alt="icono habitaciones"/>
                                                <p>4</p>
                                            </li>
                                        </ul>

                                        <a href="/real_state_template/Add" className="orangeBtn btn btn-lg btn-block">
                                            Ver Propiedad
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/**Add 3 */}

                    <div className="col-sm-12 col-xl-4 mb-3">
                        <div className="card bg-body-tertiary">
                            <div className="card-body">
                            <img loading="lazy" src={anuncio3} alt="anuncio"/>
                                <div className="card-title">
                                    <h3 className="m-4">Lake House</h3>
                                </div>
                                <div className="card-text">
                                    <p>Casa en el lago con excelente vista, acabados de lujo a un excelente precio</p>
                                    <p className="precio">$3,0000,000</p>
                                    <ul className="icons">
                                        <li>
                                            <img className="icon" loading="lazy" src={icono_wc} alt="icono wc"/>
                                            <p>3</p>
                                        </li>
                                        <li>
                                            <img className="icon" loading="lazy" src={icono_estacionamiento} alt="icono estacionamiento"/>
                                            <p>3</p>
                                        </li>
                                        <li>
                                            <img className="icon" loading="lazy" src={icono_dormitorio} alt="icono habitaciones"/>
                                            <p>4</p>
                                        </li>
                                    </ul>

                                    <a href="/real_state_template/Add" id="PropertyButton" className="orangeBtn btn btn-lg btn-block">
                                        Ver Propiedad
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/**Add 4 */}

                    <div className="col-sm-12 col-xl-4 mb-3">
                        <div className="card bg-body-tertiary">
                            <div className="card-body">
                            <img loading="lazy" src={anuncio4} alt="anuncio"/>
                                <div className="card-title">
                                    <h3 className="m-4">Lake House</h3>
                                </div>
                                <div className="card-text">
                                    <p>Casa en el lago con excelente vista, acabados de lujo a un excelente precio</p>
                                    <p className="precio">$3,0000,000</p>
                                    <ul className="icons">
                                        <li>
                                            <img className="icon" loading="lazy" src={icono_wc} alt="icono wc"/>
                                            <p>3</p>
                                        </li>
                                        <li>
                                            <img className="icon" loading="lazy" src={icono_estacionamiento} alt="icono estacionamiento"/>
                                            <p>3</p>
                                        </li>
                                        <li>
                                            <img className="icon" loading="lazy" src={icono_dormitorio} alt="icono habitaciones"/>
                                            <p>4</p>
                                        </li>
                                    </ul>

                                    <a href="/real_state_template/Add" className="btn orangeBtn btn-lg btn-block">
                                        Ver Propiedad
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                        {/**Add 5 */}

                    <div className="col-sm-12 col-xl-4 mb-3">
                        <div className="card-block">
                            <div className="card bg-body-tertiary">
                                <div className="card-body">
                                <img loading="lazy" src={anuncio5} alt="anuncio"/>
                                    <div className="card-title">
                                        <h3 className="m-4">Lake House</h3>
                                    </div>
                                    <div className="card-text">
                                        <p>Casa en el lago con excelente vista, acabados de lujo a un excelente precio</p>
                                        <p className="precio">$3,0000,000</p>
                                        <ul className="icons">
                                            <li>
                                                <img className="icon" loading="lazy" src={icono_wc} alt="icono wc"/>
                                                <p>3</p>
                                            </li>
                                            <li>
                                                <img className="icon" loading="lazy" src={icono_estacionamiento} alt="icono estacionamiento"/>
                                                <p>3</p>
                                            </li>
                                            <li>
                                                <img className="icon" loading="lazy" src={icono_dormitorio} alt="icono habitaciones"/>
                                                <p>4</p>
                                            </li>
                                        </ul>

                                        <a href="/real_state_template/Add" className="orangeBtn btn btn-lg btn-block">
                                            Ver Propiedad
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/**Add 6 */}

                    <div className="col-sm-12 col-xl-4 mb-3">
                        <div className="card bg-body-tertiary">
                            <div className="card-body">
                            <img loading="lazy" src={anuncio6} alt="anuncio"/>
                                <div className="card-title">
                                    <h3 className="m-4">Lake House</h3>
                                </div>
                                <div className="card-text">
                                    <p>Casa en el lago con excelente vista, acabados de lujo a un excelente precio</p>
                                    <p className="precio">$3,0000,000</p>
                                    <ul className="icons">
                                        <li>
                                            <img className="icon" loading="lazy" src={icono_wc} alt="icono wc"/>
                                            <p>3</p>
                                        </li>
                                        <li>
                                            <img className="icon" loading="lazy" src={icono_estacionamiento} alt="icono estacionamiento"/>
                                            <p>3</p>
                                        </li>
                                        <li>
                                            <img className="icon" loading="lazy" src={icono_dormitorio} alt="icono habitaciones"/>
                                            <p>4</p>
                                        </li>
                                    </ul>

                                    <a href="/real_state_template/Add" id="PropertyButton" className="orangeBtn btn btn-lg btn-block">
                                        Ver Propiedad
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>

            <div className="footer">
                <div className="container d-flex flex-wrap justify-content-between align-items-center py-5">
                    <p>Todos los derechos reservados 2024 ©</p>
                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                        
                        <li>
                            <a href="/" className="ms-3">Inicio</a>
                        </li>
                        <li className="ms-3">
                            <a href="/AboutUs">Nosotros</a>
                        </li>
                        <li className="ms-3">
                            <a href="/Blog">Blog</a>
                        </li>
                        <li className="ms-3">
                            <a href="/ContactUs">Contacto</a>
                        </li>
                        <li className="ms-3">
                            <a href="/privacy">Terms - Privacy Policy</a>
                        </li>
                    </ul>
                </div>
            </div>  
        </div>
    )
}

export default Adds;