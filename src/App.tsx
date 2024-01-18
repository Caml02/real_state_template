import logo from './img/logo.svg'

function App() {

  return (
    <div>
      <header className="header inicio">
        <div className="contenedor contenido-header">
            <div className="barra">
                <a href="/">
                    <img src={logo} alt="Logotipo de Bienes Raices"/>
                </a>

                <div className="mobile-menu">
                    <img src="/img/barras.svg" alt="icono menu responsive"/>
                </div>

                <div className="derecha">
                    <img className="dark-mode-boton" src="build/img/dark-mode.svg"/>
                    <nav className="navegacion">
                        <a href="nosotros.html">Nosotros</a>
                        <a href="anuncios.html">Anuncios</a>
                        <a href="blog.html">Blog</a>
                        <a href="contacto.html">Contacto</a>
                    </nav>
                </div>
   
                
            </div>

            <h1>Venta de Casas y Departamentos  Exclusivos de Lujo</h1>
        </div>
    </header>

    <main className="contenedor seccion">
        <h1>Más Sobre Nosotros</h1>

        <div className="iconos-nosotros">
            <div className="icono">
                <img src="build/img/icono1.svg" alt="Icono seguridad" loading="lazy"/>
                <h3>Seguridad</h3>
                <p>Possimus, suscipit repudiandae. Autem deserunt aliquid deleniti sit minus consectetur obcaecati molestiae dolorem natus dolores reiciendis tempore, explicabo cum nobis laudantium. Voluptates?</p>
            </div>
            <div className="icono">
                <img src="build/img/icono2.svg" alt="Icono Precio" loading="lazy"/>
                <h3>Precio</h3>
                <p>Possimus, suscipit repudiandae. Autem deserunt aliquid deleniti sit minus consectetur obcaecati molestiae dolorem natus dolores reiciendis tempore, explicabo cum nobis laudantium. Voluptates?</p>
            </div>
            <div className="icono">
                <img src="build/img/icono3.svg" alt="Icono Tiempo" loading="lazy"/>
                <h3>A Tiempo</h3>
                <p>Possimus, suscipit repudiandae. Autem deserunt aliquid deleniti sit minus consectetur obcaecati molestiae dolorem natus dolores reiciendis tempore, explicabo cum nobis laudantium. Voluptates?</p>
            </div>
        </div>
    </main>

    <div className="seccion contenedor">
        <h2>Casas y Depas en Venta</h2>

        <div className="contenedor-anuncios">
            <div className="anuncio">
                    <img loading="lazy" src="build/img/anuncio1.jpg" alt="anuncio"/>

                <div className="contenido-anuncio">
                    <h3>Casa de Lujo en el Lago</h3>
                    <p>Casa en el lago con excelente vista, acabados de lujo a un excelente precio</p>
                    <p className="precio">$3,0000,000</p>

                    <ul className="iconos-caracteristicas">
                        <li>
                            <img className="icono" loading="lazy" src="build/img/icono_wc.svg" alt="icono wc"/>
                            <p>3</p>
                        </li>
                        <li>
                            <img className="icono" loading="lazy" src="build/img/icono_estacionamiento.svg" alt="icono estacionamiento"/>
                            <p>3</p>
                        </li>
                        <li>
                            <img className="icono" loading="lazy" src="build/img/icono_dormitorio.svg" alt="icono habitaciones"/>
                            <p>4</p>
                        </li>
                    </ul>

                    <a href="anuncio.html" className="boton-amarillo-block">
                        Ver Propiedad
                    </a>
                </div>
            </div>

            <div className="anuncio">
              <img loading="lazy" src="build/img/anuncio2.jpg" alt="anuncio"/>

                <div className="contenido-anuncio">
                    <h3>Casa terminados de lujo</h3>
                    <p>Casa en el lago con excelente vista, acabados de lujo a un excelente precio</p>
                    <p className="precio">$3,0000,000</p>

                    <ul className="iconos-caracteristicas">
                        <li>
                            <img className="icono" loading="lazy" src="build/img/icono_wc.svg" alt="icono wc"/>
                            <p>3</p>
                        </li>
                        <li>
                            <img className="icono" loading="lazy" src="build/img/icono_estacionamiento.svg" alt="icono estacionamiento"/>
                            <p>3</p>
                        </li>
                        <li>
                            <img className="icono" loading="lazy" src="build/img/icono_dormitorio.svg" alt="icono habitaciones"/>
                            <p>4</p>
                        </li>
                    </ul>

                    <a href="anuncio.html" className="boton-amarillo-block">
                        Ver Propiedad
                    </a>
                </div>
            </div>

            <div className="anuncio">
               <img loading="lazy" src="build/img/anuncio3.jpg" alt="anuncio"/>

                <div className="contenido-anuncio">
                    <h3>Casa con alberca</h3>
                    <p>Casa en el lago con excelente vista, acabados de lujo a un excelente precio</p>
                    <p className="precio">$3,0000,000</p>

                    <ul className="iconos-caracteristicas">
                        <li>
                            <img className="icono" loading="lazy" src="build/img/icono_wc.svg" alt="icono wc"/>
                            <p>3</p>
                        </li>
                        <li>
                            <img className="icono" loading="lazy" src="build/img/icono_estacionamiento.svg" alt="icono estacionamiento"/>
                            <p>3</p>
                        </li>
                        <li>
                            <img className="icono" loading="lazy" src="build/img/icono_dormitorio.svg" alt="icono habitaciones"/>
                            <p>4</p>
                        </li>
                    </ul>

                    <a href="anuncio.html" className="boton-amarillo-block">
                        Ver Propiedad
                    </a>
                </div>      {/* <!--.contenido-anuncio--> */}
            </div>
        </div> 

        <div className="alinear-derecha">
            <a href="anuncios.html" className="boton-verde">Ver Todas</a>
        </div>
    </div>

    <section className="imagen-contacto">
        <h2>Encuentra la casa de tus sueños</h2>
        <p>Llena el formulario de contacto y un asesor se pondrá en contacto contigo a la brevedad</p>
        <a href="contacto.html" className="boton-amarillo">Contactános</a>
    </section>

    <div className="contenedor seccion seccion-inferior">
        <div className="blog">
            <h3>Nuestro Blog</h3>

            <div className="entrada-blog">
                <div className="imagen">
                  <img loading="lazy" src="build/img/blog1.jpg" alt="Texto Entrada Blog"/>
                </div>

                <div className="texto-entrada">
                    <a href="entrada.html">
                        <h4>Terraza en el techo de tu casa</h4>
                        <p className="informacion-meta">Escrito el: <span>20/10/2021</span> por: <span>Admin</span> </p>

                        <p>
                            Consejos para construir una terraza en el techo de tu casa con los mejores materiales y ahorrando dinero
                        </p>
                    </a>
                </div>
            </div>

            <article className="entrada-blog">
                <div className="imagen">
                  <img loading="lazy" src="build/img/blog2.jpg" alt="Texto Entrada Blog"/>
                </div>

                <div className="texto-entrada">
                    <a href="entrada.html">
                        <h4>Guía para la decoración de tu hogar</h4>
                        <p className="informacion-meta">Escrito el: <span>20/10/2021</span> por: <span>Admin</span> </p>

                        <p>
                            Maximiza el espacio en tu hogar con esta guia, aprende a combinar muebles y colores para darle vida a tu espacio
                        </p>
                    </a>
                </div>
            </article>
        </div>

        <section className="testimoniales">
            <h3>Testimoniales</h3>

            <div className="testimonial">
                <blockquote>
                    El personal se comportó de una excelente forma, muy buena atención y la casa que me ofrecieron cumple con todas mis expectativas.
                </blockquote>
                <p>- Juan De la torre</p>
            </div>
        </section>
    </div>

    <footer className="footer seccion">
        <div className="contenedor contenedor-footer">
            <nav className="navegacion">
                <a href="nosotros.html">Nosotros</a>
                <a href="anuncios.html">Anuncios</a>
                <a href="blog.html">Blog</a>
                <a href="contacto.html">Contacto</a>
            </nav>
        </div>

        <p className="copyright">Todos los derechos Reservados 2021 &copy;</p>
    </footer>

    </div>
  )
}

export default App;
