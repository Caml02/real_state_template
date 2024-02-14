const Footer = () => {
    return (
        <div className="footer">
            <div className="container d-flex flex-wrap justify-content-between align-items-center py-5">
                <p>Todos los derechos reservados 2024 ©</p>
                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3">
                        <a href="/real_state_template/AboutUs">Nosotros</a>
                    </li>
                    <li className="ms-3">
                        <a href="/real_state_template/Adds">Anuncios</a>
                    </li>
                    <li>
                        <a href="/real_state_template/Blog" className="ms-3">Blog</a>
                    </li>
                    <li>
                        <a href="/real_state_template/ContactUs" className="ms-3">Contacto</a>
                    </li>
                    <li>
                        <a href="/real_state_template/privacy" className="ms-3">Terms - Privacy Policy</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;