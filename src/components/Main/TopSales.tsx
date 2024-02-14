import icono_wc from '../../img/icono_wc.svg'
import icono_estacionamiento from '../../img/icono_estacionamiento.svg'
import anuncio1 from '../../img/anuncio1.jpg'
import anuncio2 from '../../img/anuncio2.jpg'
import anuncio3 from '../../img/anuncio3.jpg'
import icono_dormitorio from '../../img/icono_dormitorio.svg'

const TopSales = () => {
    return (
        <div className="container">
            <h2 className="mb-5">Casas y Depas en Venta</h2>
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

                <div className="text-end mb-4">
                    <a id="AllPropertiesButton" href="/real_state_template/Adds" role="button" className="btn btn-lg">Ver Todas</a>
                </div>  
            </div>
        </div>
    )
}

export default TopSales;