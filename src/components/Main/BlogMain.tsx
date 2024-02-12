const BlogMain = () => {
    return (
        <div className="contenedor seccion seccion-inferior">
            <div className="blog">
                <h3>Nuestro Blog</h3>

                <div className="entrada-blog">
                    <div className="imagen">
                        <a href="/BlogReview">
                            <img loading="lazy" src="/src/img/blog1.jpg" alt="Texto Entrada Blog"/>
                        </a>
                    </div>

                    <div className="texto-entrada">
                        <div>
                            <h4>Terraza en el techo de tu casa</h4>
                            <p className="informacion-meta">Escrito el: <span>20/10/2023</span> por: <span>Admin</span> </p>

                            <p>
                                Consejos para construir una terraza en el techo de tu casa con los mejores materiales y ahorrando dinero
                            </p>
                        </div>
                    </div>
                </div>

                <article className="entrada-blog">
                    <div className="imagen">
                    <a href="/BlogReview">
                        <img loading="lazy" src="/src/img/blog2.jpg" alt="Texto Entrada Blog"/>
                    </a>
                    </div>

                    <div className="texto-entrada">
                        <div>
                            <h4 >Guía para la decoración de tu hogar</h4>
                            <p className=" informacion-meta">Escrito el: <span>20/10/2023</span> por: <span>Admin</span> </p>

                            <p >
                                Maximiza el espacio en tu hogar con esta guia, aprende a combinar muebles y colores para darle vida a tu espacio
                            </p>
                        </div>
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
    )
}

export default BlogMain;