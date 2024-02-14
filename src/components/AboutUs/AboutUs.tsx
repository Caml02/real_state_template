import logo from '../../img/logo.svg'
import nosotros from '../../img/nosotros.jpg'
import { changeMode } from "../../utils/DarkMode";
import AboutMain from "../Main/AboutMain";

const AboutUs = () => {
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
                                <a href="/real_state_template/Adds">Anuncios</a>
                                <a href="/real_state_template/Blog">Blog</a>
                                <a href="/real_state_template/ContactUs">Contacto</a>        
                            </div>

                            <div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabIndex={-1} id="offCanvaNavBar" aria-labelledby="offCanvaNavBarLabel">
                                <div className="offcanvas-header">
                                    <h2 className="offcanvas-title" id="offCanvaNavBarLabel">Bienes Raíces</h2>
                                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body">  
                                    <ul className='list-group list-group-flush mx-3 mt-4'>
                                        <a className="nav-item list-group-item list-group-item-action py-2 ripple" href="/">Inicio</a>
                                        <a className="nav-item list-group-item list-group-item-action py-2 ripple active" href="/real_state_template/AboutUs">Nosotros</a>
                                        <a className="nav-item list-group-item list-group-item-action py-2 ripple" href="/real_state_template/Adds">Anuncios</a>
                                        <a className="nav-item list-group-item list-group-item-action py-2 ripple" href="/real_state_template/Blog">Blog</a>
                                        <a className="nav-item list-group-item list-group-item-action py-2 ripple" href="/real_state_template/ContactUs">Contacto</a>
                                    </ul>      
                                </div>                  
                            </div>

                        </div>
                        
                    </div> 
                </div>
            </header>  
            
            <div className="container">
                <h1>Conoce sobre Nosotros</h1>

                <div className="row">
                    <div className="col-md-6 col-sm-12 imagen">
                            <img loading="lazy" src={nosotros} alt="Sobre Nosotros" />
                    </div>

                    <div className="col-md-6 col-sm-12  texto-nosotros">
                        <blockquote>
                            25 Años de experiencia
                        </blockquote>

                        <p>Proin consequat viverra sapien, malesuada tempor tortor feugiat vitae. In dictum felis et nunc aliquet molestie. Proin tristique commodo felis, sed auctor elit auctor pulvinar. Nunc porta, nibh quis convallis sollicitudin, arcu nisl semper mi, vitae sagittis lorem dolor non risus. Vivamus accumsan maximus est, eu mollis mi. Proin id nisl vel odio semper hendrerit. Nunc porta in justo finibus tempor. Suspendisse lobortis dolor quis elit suscipit molestie. Sed condimentum, erat at tempor finibus, urna nisi fermentum est, a dignissim nisi libero vel est. Donec et imperdiet augue. Curabitur malesuada sodales congue. Suspendisse potenti. Ut sit amet convallis nisi.</p>

                        <p>Quisque ac dignissim sem, non condimentum orci. Morbi a iaculis neque, ac euismod felis. Fusce augue quam, hendrerit dapibus ante. Cras mattis laoreet nibh, Nulla facilisi.</p>
                    </div>
                </div>
            </div>

            <AboutMain/>
            
            <div className="footer">
                <div className="container d-flex flex-wrap justify-content-between align-items-center py-5">
                    <p>Todos los derechos reservados 2024 ©</p>
                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                        
                        <li>
                            <a href="/real_state_template/" className="ms-3">Inicio</a>
                        </li>
                        <li className="ms-3">
                            <a href="/real_state_template/Adds">Anuncios</a>
                        </li>
                        <li className="ms-3">
                            <a href="/real_state_template/ContactUs">Contacto</a>
                        </li>
                        <li className="ms-3">
                            <a href="/real_state_template/privacy">Terms - Privacy Policy</a>
                        </li>
                    </ul>
                </div>
            </div> 
        </div>
    )
}

export default AboutUs;