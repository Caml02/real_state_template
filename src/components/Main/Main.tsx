import AboutMain from './AboutMain.js';
import BlogMain from './BlogMain.js';
import ContactMain from './ContactMain.js';
import Footer from './Footer.js';
import TopSales from './TopSales.js';
import logo from '../../img/logo.svg'
import {changeMode} from '../../utils/DarkMode.js';

function Main() {

  return (
    <div>
      <header className="header inicio">
        <div className="contenedor contenido-header">
            <div className="barra">
                <a href="/">
                    <img src={logo} alt="Logotipo de Bienes Raices"/>
                </a>

                <div className="derecha mb-4">
                    <button onClick={changeMode} className='theme-toggle-light btn mb-4 bi bi-sun-fill rounded-pill' id="dm-icon"></button>
                    <button className="btn d-md-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offCanvaNavBar" aria-controls="offCanvaNavBar">
                        <i className="bi bi-list"></i>
                    </button>
                    <div className="navegacion d-lg-flex">
                        <a href="/AboutUs">Nosotros</a>
                        <a href="/Adds">Anuncios</a>
                        <a href="/Blog">Blog</a>
                        <a href="/ContactUs">Contacto</a>        
                    </div>
                    <div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabIndex={-1} id="offCanvaNavBar" aria-labelledby="offCanvaNavBarLabel">
                        <div className="offcanvas-header">
                            <h2 className="offcanvas-title" id="offCanvaNavBarLabel">Bienes Raíces</h2>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">  
                            <ul className='list-group list-group-flush mx-3 mt-4'>
                                <a className="nav-item list-group-item list-group-item-action py-2 ripple active" href="/">Inicio</a>
                                <a className="nav-item list-group-item list-group-item-action py-2 ripple " href="/AboutUs">Nosotros</a>
                                <a className="nav-item list-group-item list-group-item-action py-2 ripple" href="/Adds">Anuncios</a>
                                <a className="nav-item list-group-item list-group-item-action py-2 ripple" href="/Blog">Blog</a>
                                <a className="nav-item list-group-item list-group-item-action py-2 ripple" href="/ContactUs">Contacto</a>
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

export default Main;
