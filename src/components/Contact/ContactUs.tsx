import { changeMode } from "../../utils/DarkMode";

const ContactUs = () => {
    return (
        <div>
            <header className="header">
                <div className="contenedor contenido-header">
                    <div className="barra">
                        <a href="/real_state_template/">
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
                                <a href="/Adds">Anuncios</a>
                                <a href="/Blog">Blog</a>
                            </div>
                        </div>
                        <div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabIndex={-1} id="offCanvaNavBar" aria-labelledby="offCanvaNavBarLabel">
                            <div className="offcanvas-header">
                                    <h2 className="offcanvas-title" id="offCanvaNavBarLabel">Bienes Raíces</h2>
                                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">  
                                <ul className='list-group list-group-flush mx-3 mt-4'>
                                    <a className="nav-item list-group-item list-group-item-action py-2 ripple" href="/">Inicio</a>
                                    <a className="nav-item list-group-item list-group-item-action py-2 ripple" href="/AboutUs">Nosotros</a>
                                    <a className="nav-item list-group-item list-group-item-action py-2 ripple" href="/Adds">Anuncios</a>
                                    <a className="nav-item list-group-item list-group-item-action py-2 ripple" href="/Blog">Blog</a>
                                    <a className="nav-item list-group-item list-group-item-action py-2 ripple active" href="/ContactUs">Contacto</a>
                                </ul>      
                            </div>  
                        </div>
                    </div> 
                </div>
            </header>

            <div className="container">
            <h1>Contacto</h1>

            <img loading="lazy" src="/src/img/destacada3.jpg" alt="Imagen Contacto"/>
            <h2 className="mt-2">Llene el formulario de Contacto</h2>

            <form className="row">
                <div className="col-xl-12">
                    <legend>Información Personal</legend>

                    <label htmlFor="nombre">Nombre</label>
                    <input className="form-control" type="text" placeholder="Tu Nombre" id="nombre" required/>
                    <div className="valid-tooltip">
                        ¡Se ve bien!
                    </div>

                    <label htmlFor="email">E-mail</label>
                    <input className="form-control" type="email" placeholder="Tu Email" id="email" required/>
                    <div className="valid-tooltip">
                        ¡Se ve bien!
                    </div>

                    <label htmlFor="telefono">Teléfono</label>
                    <input className="form-control" type="tel" placeholder="Tu Teléfono" id="telefono" required/>

                    <label htmlFor="mensaje">Mensaje:</label>
                    <textarea className="form-control" id="mensaje"></textarea>
                </div>

                <div className="row col-xl-12">
                <legend>Información sobre la propiedad</legend>

                <label htmlFor="opciones">Vende o Compra:</label>
                <select id="opciones" required>
                    <option value="" disabled selected>-- Seleccione --</option>
                    <option value="Compra">Compra</option>
                    <option value="Vende">Vende</option>
                </select>

                <label htmlFor="presupuesto">Precio o Presupuesto</label>
                <input className="form-control" type="number" placeholder="Tu Precio o Presupuesto" id="presupuesto" required/>

            </div>

            <div className="row col-xl-12">
                <legend>Información sobre la propiedad</legend>

                <p>Como desea ser contactado</p>

                <div className="form-check">
                    <input className="form-check-input" name="contacto" type="radio" value="telefono" id="contactar-telefono" />
                    <label className="form-check-label"  htmlFor="contactar-telefono">Teléfono</label>
                </div>
                <div className="form-check mb-3">
                    <input className="form-check-input" name="contacto" type="radio" value="email" id="contactar-email" />
                    <label className="form-check-label" htmlFor="contactar-email">E-mail</label>
                </div>

                <p>Si eligió teléfono, elija la fecha y la hora</p>

                <label htmlFor="fecha">Fecha:</label>
                <input className="form-control" type="date" id="fecha" />

                <label htmlFor="hora">Hora:</label>
                <input className="form-control" type="time" id="hora" min="09:00" max="18:00" />
                
            </div>
            <div className="col-12">
                <button type="submit" className="mt-4 btn btn-success btn-lg " >Enviar</button>
            </div>

                </form>
            </div>

            {/** FOOTER */}


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
                            <a href="/Adds">Anuncios</a>
                        </li>
                        <li className="ms-3">
                            <a href="/Blog">Blog</a>
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

export default ContactUs;