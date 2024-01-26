const AboutMain = () => {
    return (
        <div className="container">
            <h1 className="m-5">Más Sobre Nosotros</h1>

            <div className="row">
                <div className="col-sm-12 col-xl-4 mb-3">
                    <div className="card border-0">
                        <div className="mb-4 icon">
                            <img className="mb-4" src="/src/img/shield-check.svg" alt="Icono seguridad" loading="lazy"/>
                            <div className="card-text">
                                <h3 className="mb-4">Seguridad</h3>
                                <p>Possimus, suscipit repudiandae. Autem deserunt aliquid deleniti sit minus consectetur obcaecati molestiae dolorem natus dolores reiciendis tempore, explicabo cum nobis laudantium. Voluptates?</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-xl-4 mb-3">
                    <div className="card border-0">
                        <div className="mb-4 icon">
                            <img className="mb-4" src="/src/img/currency-dollar.svg" alt="Icono Precio" loading="lazy"/>
                            <div className="card-text">
                                <h3 className="mb-4">Precio</h3>
                                <p>Possimus, suscipit repudiandae. Autem deserunt aliquid deleniti sit minus consectetur obcaecati molestiae dolorem natus dolores reiciendis tempore, explicabo cum nobis laudantium. Voluptates?</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-xl-4 mb-3">
                    <div className="card border-0">
                        <div className="mb-4 icon">
                            <img className="mb-4" src="/src/img/clock-history.svg" alt="Time Icon" loading="lazy"/>
                            <div className="card-text">
                                <h3 className="mb-4">A Tiempo</h3>
                                <p>Possimus, suscipit repudiandae. Autem deserunt aliquid deleniti sit minus consectetur obcaecati molestiae dolorem natus dolores reiciendis tempore, explicabo cum nobis laudantium. Voluptates?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default AboutMain;