import { changeMode } from "../../utils/DarkMode";

const ContactUs = () => {
    return (
        <header className="header">
                <div className="contenedor contenido-header">
                    <div className="barra">
                        <a href="/">
                            <img src="/src/img/logo.svg" alt="Logotipo de Bienes Raices"/>
                        </a>

                        <div className="derecha">
                        <button onClick={changeMode} className='btn mb-2'><i id="dm-icon" className="bi bi-moon-fill mb-2"></i></button>
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
                        
                    </div> 
                </div>
            </header>
    )
}

export default ContactUs;