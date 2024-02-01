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

                <div className="derecha">
                    <button onClick={changeMode} className='btn mb-2'><i id="dm-icon" className="bi bi-moon-fill mb-2"></i></button>
                    <button className="btn d-md-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offCanvaNavBar" aria-controls="offCanvaNavBar">
                        <i className="bi bi-list"></i>
                    </button>
                    <div className="navegacion d-lg-flex">
                        <a href="nosotros.html">Nosotros</a>
                        <a href="anuncios.html">Anuncios</a>
                        <a href="blog.html">Blog</a>
                        <a href="contacto.html">Contacto</a>        
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
