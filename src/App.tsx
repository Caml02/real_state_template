import AboutMain from './components/AboutMain';
import BlogMain from './components/BlogMain';
import ContactMain from './components/ContactMain';
import Footer from './components/Footer';
import TopSales from './components/TopSales';
import logo from './img/logo.svg'
import {changeMode} from './utils/DarkMode.js';

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
                    <button onClick={changeMode} className='btn'><i id="dm-icon" className="bi bi-moon-fill"></i></button>
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
        <Footer />
    </div>
  )
}

export default App;
