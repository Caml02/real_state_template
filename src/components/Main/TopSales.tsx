const TopSales = () => {
    return (
        <div className="container">
            <h2 className="mb-5">Casas y Depas en Venta</h2>
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
                                        <img id="properties-icon" className="icon" loading="lazy" src="/src/img/icono_wc.svg" alt="icono wc"/>
                                        <p>3</p>
                                    </li>
                                    <li>
                                        <img id="properties-icon" className="icon" loading="lazy" src="/src/img/icono_estacionamiento.svg" alt="icono estacionamiento"/>
                                        <p>3</p>
                                    </li>
                                    <li>
                                        <img id="properties-icon" className="icon" loading="lazy" src="/src/img/icono_dormitorio.svg" alt="icono habitaciones"/>
                                        <p>4</p>
                                    </li>
                                </ul>

                                <a className="btn orangeBtn btn-lg btn-block">
                                    Ver Propiedad
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


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
                                            <img id="properties-icon" className="icon" loading="lazy" src="/src/img/icono_wc.svg" alt="icono wc"/>
                                            <p>3</p>
                                        </li>
                                        <li>
                                            <img id="properties-icon" className="icon" loading="lazy" src="/src/img/icono_estacionamiento.svg" alt="icono estacionamiento"/>
                                            <p>3</p>
                                        </li>
                                        <li>
                                            <img id="properties-icon" className="icon" loading="lazy" src="/src/img/icono_dormitorio.svg" alt="icono habitaciones"/>
                                            <p>4</p>
                                        </li>
                                    </ul>

                                    <a className="orangeBtn btn btn-lg btn-block">
                                        Ver Propiedad
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

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
                                        <img id="properties-icon" className="icon" loading="lazy" src="/src/img/icono_wc.svg" alt="icono wc"/>
                                        <p>3</p>
                                    </li>
                                    <li>
                                        <img id="properties-icon" className="icon" loading="lazy" src="/src/img/icono_estacionamiento.svg" alt="icono estacionamiento"/>
                                        <p>3</p>
                                    </li>
                                    <li>
                                        <img id="properties-icon" className="icon" loading="lazy" src="/src/img/icono_dormitorio.svg" alt="icono habitaciones"/>
                                        <p>4</p>
                                    </li>
                                </ul>

                                <a id="PropertyButton" className="orangeBtn btn btn-lg btn-block">
                                    Ver Propiedad
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-end mb-4">
                    <a id="AllPropertiesButton" href="anuncios.html" role="button" className="btn btn-lg">Ver Todas</a>
                </div>  
            </div>
        </div>
    )
}

export default TopSales;