import AboutMain from './components/AboutMain';
import BlogMain from './components/BlogMain';
import ContactMain from './components/ContactMain';
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
                    <img src="/src/img/barras.svg" alt="icono menu responsive"/>
                </div>

                <div className="derecha">
                    <img className="dark-mode-boton" src="/src/img/dark-mode.svg"/>
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
        <ContactMain/>
        <BlogMain/>


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
