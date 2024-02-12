import { changeMode } from "../../utils/DarkMode";

const Adds = () => {
    return (
        <div>
            <header className="header">
                <div className="contenedor contenido-header">
                    <div className="barra">
                        <a href="/">
                            <img src="/src/img/logo.svg" alt="Logotipo de Bienes Raices"/>
                        </a>

                        <div className="derecha mb-4">
                        <button onClick={changeMode} className='theme-toggle-light btn bi bi-sun-fill rounded-pill' id="dm-icon"></button>
                            <button className="btn d-md-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offCanvaNavBar" aria-controls="offCanvaNavBar">
                                <i className="bi bi-list"></i>
                            </button>
                            <div className="navegacion d-lg-flex">
                                <a href="/">Inicio</a>
                                <a href="/AboutUs">Nosotros</a>
                                <a href="/ContactUs">Contacto</a>
                                <a href="/Blog">Blog</a>        
                            </div>

                            <div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabIndex={-1} id="offCanvaNavBar" aria-labelledby="offCanvaNavBarLabel">
                                <div className="offcanvas-header">
                                        <h2 className="offcanvas-title" id="offCanvaNavBarLabel">Bienes Raíces</h2>
                                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body">  
                                    <ul className='list-group list-group-flush mx-3 mt-4'>
                                    <a className="nav-item list-group-item list-group-item-action py-2 ripple" href="/">Inicio</a>
                                        <a className="nav-item list-group-item list-group-item-action py-2 ripple" href="/Aboutus">Nosotros</a>
                                        <a className="nav-item list-group-item list-group-item-action py-2 ripple active" href="/Adds">Anuncios</a>
                                        <a className="nav-item list-group-item list-group-item-action py-2 ripple" href="/Blog">Blog</a>
                                        <a className="nav-item list-group-item list-group-item-action py-2 ripple" href="/ContactUs">Contacto</a>
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
                            <img loading="lazy" src="/src/img/anuncio1.jpg" alt="anuncio"/>
                                <div className="card-title">
                                    <h3 className="m-4">Lake House</h3>
                                </div>
                                <div className="card-text">
                                    <p>Casa en el lago con excelente vista, acabados de lujo a un excelente precio</p>
                                    <p className="precio">$3,0000,000</p>
                                    <ul className="icons">
                                        <li>
                                            <img className="icon" loading="lazy" src="/src/img/icono_wc.svg" alt="icono wc"/>
                                            <p>3</p>
                                        </li>
                                        <li>
                                            <img className="icon" loading="lazy" src="/src/img/icono_estacionamiento.svg" alt="icono estacionamiento"/>
                                            <p>3</p>
                                        </li>
                                        <li>
                                            <img className="icon" loading="lazy" src="/src/img/icono_dormitorio.svg" alt="icono habitaciones"/>
                                            <p>4</p>
                                        </li>
                                    </ul>

                                    <a href="/Add" className="btn orangeBtn btn-lg btn-block">
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
                                <img loading="lazy" src="/src/img/anuncio2.jpg" alt="anuncio"/>
                                    <div className="card-title">
                                        <h3 className="m-4">Lake House</h3>
                                    </div>
                                    <div className="card-text">
                                        <p>Casa en el lago con excelente vista, acabados de lujo a un excelente precio</p>
                                        <p className="precio">$3,0000,000</p>
                                        <ul className="icons">
                                            <li>
                                                <img className="icon" loading="lazy" src="/src/img/icono_wc.svg" alt="icono wc"/>
                                                <p>3</p>
                                            </li>
                                            <li>
                                                <img className="icon" loading="lazy" src="/src/img/icono_estacionamiento.svg" alt="icono estacionamiento"/>
                                                <p>3</p>
                                            </li>
                                            <li>
                                                <img className="icon" loading="lazy" src="/src/img/icono_dormitorio.svg" alt="icono habitaciones"/>
                                                <p>4</p>
                                            </li>
                                        </ul>

                                        <a href="/Add" className="orangeBtn btn btn-lg btn-block">
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
                            <img loading="lazy" src="/src/img/anuncio3.jpg" alt="anuncio"/>
                                <div className="card-title">
                                    <h3 className="m-4">Lake House</h3>
                                </div>
                                <div className="card-text">
                                    <p>Casa en el lago con excelente vista, acabados de lujo a un excelente precio</p>
                                    <p className="precio">$3,0000,000</p>
                                    <ul className="icons">
                                        <li>
                                            <img className="icon" loading="lazy" src="/src/img/icono_wc.svg" alt="icono wc"/>
                                            <p>3</p>
                                        </li>
                                        <li>
                                            <img className="icon" loading="lazy" src="/src/img/icono_estacionamiento.svg" alt="icono estacionamiento"/>
                                            <p>3</p>
                                        </li>
                                        <li>
                                            <img className="icon" loading="lazy" src="/src/img/icono_dormitorio.svg" alt="icono habitaciones"/>
                                            <p>4</p>
                                        </li>
                                    </ul>

                                    <a href="/Add" id="PropertyButton" className="orangeBtn btn btn-lg btn-block">
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
                            <img loading="lazy" src="/src/img/anuncio4.jpg" alt="anuncio"/>
                                <div className="card-title">
                                    <h3 className="m-4">Lake House</h3>
                                </div>
                                <div className="card-text">
                                    <p>Casa en el lago con excelente vista, acabados de lujo a un excelente precio</p>
                                    <p className="precio">$3,0000,000</p>
                                    <ul className="icons">
                                        <li>
                                            <img className="icon" loading="lazy" src="/src/img/icono_wc.svg" alt="icono wc"/>
                                            <p>3</p>
                                        </li>
                                        <li>
                                            <img className="icon" loading="lazy" src="/src/img/icono_estacionamiento.svg" alt="icono estacionamiento"/>
                                            <p>3</p>
                                        </li>
                                        <li>
                                            <img className="icon" loading="lazy" src="/src/img/icono_dormitorio.svg" alt="icono habitaciones"/>
                                            <p>4</p>
                                        </li>
                                    </ul>

                                    <a href="/Add" className="btn orangeBtn btn-lg btn-block">
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
                                <img loading="lazy" src="/src/img/anuncio5.jpg" alt="anuncio"/>
                                    <div className="card-title">
                                        <h3 className="m-4">Lake House</h3>
                                    </div>
                                    <div className="card-text">
                                        <p>Casa en el lago con excelente vista, acabados de lujo a un excelente precio</p>
                                        <p className="precio">$3,0000,000</p>
                                        <ul className="icons">
                                            <li>
                                                <img className="icon" loading="lazy" src="/src/img/icono_wc.svg" alt="icono wc"/>
                                                <p>3</p>
                                            </li>
                                            <li>
                                                <img className="icon" loading="lazy" src="/src/img/icono_estacionamiento.svg" alt="icono estacionamiento"/>
                                                <p>3</p>
                                            </li>
                                            <li>
                                                <img className="icon" loading="lazy" src="/src/img/icono_dormitorio.svg" alt="icono habitaciones"/>
                                                <p>4</p>
                                            </li>
                                        </ul>

                                        <a href="/Add" className="orangeBtn btn btn-lg btn-block">
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
                            <img loading="lazy" src="/src/img/anuncio6.jpg" alt="anuncio"/>
                                <div className="card-title">
                                    <h3 className="m-4">Lake House</h3>
                                </div>
                                <div className="card-text">
                                    <p>Casa en el lago con excelente vista, acabados de lujo a un excelente precio</p>
                                    <p className="precio">$3,0000,000</p>
                                    <ul className="icons">
                                        <li>
                                            <img className="icon" loading="lazy" src="/src/img/icono_wc.svg" alt="icono wc"/>
                                            <p>3</p>
                                        </li>
                                        <li>
                                            <img className="icon" loading="lazy" src="/src/img/icono_estacionamiento.svg" alt="icono estacionamiento"/>
                                            <p>3</p>
                                        </li>
                                        <li>
                                            <img className="icon" loading="lazy" src="/src/img/icono_dormitorio.svg" alt="icono habitaciones"/>
                                            <p>4</p>
                                        </li>
                                    </ul>

                                    <a href="/Add" id="PropertyButton" className="orangeBtn btn btn-lg btn-block">
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