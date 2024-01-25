import AboutMain from './components/AboutMain';
import TopSales from './components/TopSales';
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

    <AboutMain/>     
    <TopSales/>

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
