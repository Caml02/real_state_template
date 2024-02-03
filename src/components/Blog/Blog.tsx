import { changeMode } from "../../utils/DarkMode";

const Blog = () => {
    return (
        <div>
            <header className="header">
                <div className="contenedor contenido-header">
                    <div className="barra">
                        <a href="/">
                            <img src="/src/img/logo.svg" alt="Logotipo de Bienes Raices"/>
                        </a>

                        <div className="derecha mb-4">
                        <button onClick={changeMode} className='btn mb-2'><i id="dm-icon" className="bi bi-moon-fill mb-2"></i></button>
                            <button className="btn d-md-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offCanvaNavBar" aria-controls="offCanvaNavBar">
                                <i className="bi bi-list"></i>
                            </button>
                            <div className="navegacion d-lg-flex">
                                <a href="/">Inicio</a>
                                <a href="/Adds">Anuncios</a>
                                <a href="/AboutUs">Nosotros</a>
                                <a href="/ContactUs">Contacto</a>        
                            </div>

                            <div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabIndex={-1} id="offCanvaNavBar" aria-labelledby="offCanvaNavBarLabel">
                                <div className="offcanvas-header">
                                        <h2 className="offcanvas-title" id="offCanvaNavBarLabel">Bienes Raíces</h2>
                                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body">  
                                    <ul className='list-group list-group-flush mx-3 mt-4'>
                                        <a className="nav-item list-group-item list-group-item-action py-2 ripple active" href="#">Nosotros</a>
                                        <a className="nav-item list-group-item list-group-item-action py-2 ripple" href="#">Anuncios</a>
                                        <a className="nav-item list-group-item list-group-item-action py-2 ripple" href="#">Blog</a>
                                        <a className="nav-item list-group-item list-group-item-action py-2 ripple" href="#">Contacto</a>
                                    </ul>      
                                </div>  
                            </div>
                        </div>
                    </div> 
                </div>
            </header>    

            <div className="contenedor seccion contenido-centrado">
                <h1>Nuestro Blog</h1>

                <article className="entrada-blog">
                    <div className="imagen">
                            <img loading="lazy" src="/src/img/blog1.jpg" alt="Texto Entrada Blog"/>
                    </div>

                    <div className="texto-entrada">
                        <a href="entrada.html" className="text-black">
                            <h4>Terraza en el techo de tu casa</h4>
                            <p>Escrito el: <span>20/10/2021</span> por: <span>Admin</span> </p>

                            <p>
                                Consejos para construir una terraza en el techo de tu casa con los mejores materiales y ahorrando dinero
                            </p>
                        </a>
                    </div>
                </article>

                <article className="entrada-blog">
                    <div className="imagen">
                        <img loading="lazy" src="/src/img/blog2.jpg" alt="Texto Entrada Blog" />
                    </div>

                    <div className="texto-entrada">
                        <a href="entrada.html" className="text-black">
                            <h4>Guía para la decoración de tu hogar</h4>
                            <p>Escrito el: <span>20/10/2021</span> por: <span>Admin</span> </p>

                            <p>
                                Maximiza el espacio en tu hogar con esta guia, aprende a combinar muebles y colores para darle vida a tu espacio
                            </p>
                        </a>
                    </div>
                </article>

                <article className="entrada-blog">
                    <div className="imagen">
                        <img loading="lazy" src="/src/img/blog3.jpg" alt="Texto Entrada Blog" />
                    </div>

                    <div className="texto-entrada">
                        <a href="entrada.html" className="text-black">
                            <h4>Terraza en el techo de tu casa</h4>
                            <p>Escrito el: <span>20/10/2021</span> por: <span>Admin</span> </p>

                            <p>
                                Consejos para construir una terraza en el techo de tu casa con los mejores materiales y ahorrando dinero
                            </p>
                        </a>
                    </div>
                </article>

                <article className="entrada-blog">
                    <div className="imagen">
                            <img loading="lazy" src="/src/img/blog4.jpg" alt="Texto Entrada Blog" />
                    </div>

                    <div className="texto-entrada">
                        <a href="entrada.html" className="text-black">
                            <h4>Guía para la decoración de tu hogar</h4>
                            <p>Escrito el: <span>20/10/2021</span> por: <span>Admin</span> </p>

                            <p>
                                Maximiza el espacio en tu hogar con esta guia, aprende a combinar muebles y colores para darle vida a tu espacio
                            </p>
                        </a>
                    </div>
                </article>
            </div>  

            {/**FOOTER */}


            <div className="footer">
                <div className="container d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
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

export default Blog;