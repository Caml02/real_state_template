const AboutMain = () => {
    return (
        <div className="container">
             <main className="seccion">
                <h1>Más Sobre Nosotros</h1>

                <div className="iconos-nosotros">
                    <div className="icon">
                        <img src="/src/img/shield-check.svg" alt="Icono seguridad" loading="lazy"/>
                        <h3>Seguridad</h3>
                        <p>Possimus, suscipit repudiandae. Autem deserunt aliquid deleniti sit minus consectetur obcaecati molestiae dolorem natus dolores reiciendis tempore, explicabo cum nobis laudantium. Voluptates?</p>
                    </div>
                    <div className="icon">
                        <img src="/src/img/currency-dollar.svg" alt="Icono Precio" loading="lazy"/>
                        <h3>Precio</h3>
                        <p>Possimus, suscipit repudiandae. Autem deserunt aliquid deleniti sit minus consectetur obcaecati molestiae dolorem natus dolores reiciendis tempore, explicabo cum nobis laudantium. Voluptates?</p>
                    </div>
                    <div className="icon">
                        <img src="/src/img/clock-history.svg" alt="Time Icon" loading="lazy"/>
                        <h3>A Tiempo</h3>
                        <p>Possimus, suscipit repudiandae. Autem deserunt aliquid deleniti sit minus consectetur obcaecati molestiae dolorem natus dolores reiciendis tempore, explicabo cum nobis laudantium. Voluptates?</p>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default AboutMain;