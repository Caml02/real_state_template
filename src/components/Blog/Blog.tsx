import logo from '../../img/logo.svg'
import blog1 from '../../img/blog1.jpg'
import blog2 from '../../img/blog2.jpg'
import blog3 from '../../img/blog3.jpg'
import blog4 from '../../img/blog4.jpg'
import { changeMode } from "../../utils/DarkMode";

const Blog = () => {
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
                                <a href="/real_state_template/AboutUs">Nosotros</a>
                                <a href="/real_state_template/ContactUs">Contacto</a>        
                            </div>

                            <div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabIndex={-1} id="offCanvaNavBar" aria-labelledby="offCanvaNavBarLabel">
                                <div className="offcanvas-header">
                                        <h2 className="offcanvas-title" id="offCanvaNavBarLabel">Bienes Raíces</h2>
                                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body">  
                                    <ul className='list-group list-group-flush mx-3 mt-4'>
                                        <a className="nav-item list-group-item list-group-item-action py-2 ripple" href="/real_state_template/">Inicio</a>
                                        <a className="nav-item list-group-item list-group-item-action py-2 ripple" href="/real_state_template/AboutUs">Nosotros</a>
                                        <a className="nav-item list-group-item list-group-item-action py-2 ripple" href="/real_state_template/Adds">Anuncios</a>
                                        <a className="nav-item list-group-item list-group-item-action py-2 ripple active" href="/real_state_template/Blog">Blog</a>
                                        <a className="nav-item list-group-item list-group-item-action py-2 ripple" href="/real_state_template/ContactUs">Contacto</a>
                                    </ul>      
                                </div>  
                            </div>
                        </div>
                    </div> 
                </div>
            </header>    

            <div className="contenedor seccion contenido-centrado">
                <h1>Nuestro Blog</h1>

                <div className="entrada-blog">
                    <div className="imagen">
                        <a href="/real_state_template/BlogReview">
                            <img loading="lazy" src={blog1} alt="Texto Entrada Blog"/>
                        </a>
                    </div>

                    <div className="texto-entrada informacion-meta">
                        <h4>Terraza en el techo de tu casa</h4>
                        <p>Escrito el: <span>20/10/2021</span> por: <span>Admin</span> </p>

                        <p>
                            Consejos para construir una terraza en el techo de tu casa con los mejores materiales y ahorrando dinero
                        </p>
                    </div>
                </div>

                <div className="entrada-blog">
                    <div className="imagen">
                        <a href="/real_state_template/BlogReview">
                            <img loading="lazy" src={blog2} alt="Texto Entrada Blog" />
                        </a>
                    </div>

                    <div className="texto-entrada informacion-meta">
                            <h4>Guía para la decoración de tu hogar</h4>
                            <p>Escrito el: <span>20/10/2021</span> por: <span>Admin</span> </p>

                            <p>
                                Maximiza el espacio en tu hogar con esta guia, aprende a combinar muebles y colores para darle vida a tu espacio
                            </p>
                    </div>
                </div>

                <div className="entrada-blog">
                    <div className="imagen">
                        <a href="/real_state_template/BlogReview">
                           <img loading="lazy" src={blog3} alt="Texto Entrada Blog" />
                        </a>
                    </div>

                    <div className="texto-entrada informacion-meta">
                        <h4>Terraza en el techo de tu casa</h4>
                        <p>Escrito el: <span>20/10/2021</span> por: <span>Admin</span> </p>

                        <p>
                            Consejos para construir una terraza en el techo de tu casa con los mejores materiales y ahorrando dinero
                        </p>
                    </div>
                </div>

                <div className="entrada-blog">
                    <div className="imagen">
                        <a href="/real_state_template/BlogReview">
                            <img loading="lazy" src={blog4} alt="Texto Entrada Blog" />
                        </a>
                    </div>

                    <div className="texto-entrada informacion-meta">
                        <h4>Guía para la decoración de tu hogar</h4>
                        <p>Escrito el: <span>20/10/2021</span> por: <span>Admin</span> </p>

                        <p>
                            Maximiza el espacio en tu hogar con esta guia, aprende a combinar muebles y colores para darle vida a tu espacio
                        </p>
                    </div>
                </div>
            </div>  

            {/**FOOTER */}

            <div className="footer">
                <div className="container d-flex flex-wrap justify-content-between align-items-center py-5">
                    <p>Todos los derechos reservados 2024 ©</p>
                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                        
                        <li>
                            <a href="/real_state_template/" className="ms-3">Inicio</a>
                        </li>
                        <li className="ms-3">
                            <a href="/real_state_template/AboutUs">Nosotros</a>
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

export default Blog;