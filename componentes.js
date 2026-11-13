/* ---------- COMPONENTES ---------- */

/* CABECERA: nombre y lema (con data y un método propios) */
const MiHeader = {
    data() {
        return {
            nombre: 'Biblioteca Popular Portal Cultural',
            lema: 'Leer, aprender y conectar con tu comunidad'
        };
    },
    methods: {
        // Al pasar el mouse cambia el texto del lema
        lemaEncima() {
            this.lema = '¡Bienvenido, esta es tu biblioteca!';
        },
        lemaAfuera() {
            this.lema = 'Leer, aprender y conectar con tu comunidad';
        }
    },
    template: `
        <div class="bg-dark text-white text-center py-2 px-3"
             @mouseover="lemaEncima" @mouseleave="lemaAfuera">
            <div class="container d-flex flex-column align-items-center">
                <span class="fw-bold fs-6">{{ nombre }}</span>
                <small class="text-white-50">{{ lema }}</small>
            </div>
        </div>
    `
};

/* PIE DE PÁGINA: tres columnas en escritorio */
const MiFooter = {
    data() {
        return {
            enlaces: [
                { texto: 'Inicio', vista: 'inicio' },
                { texto: 'La biblioteca', vista: 'biblioteca' },
                { texto: 'Colecciones y servicios', vista: 'servicios' },
                { texto: 'Contacto', vista: 'contacto' }
            ]
        };
    },
    methods: {
        // Le avisa a la página principal qué vista mostrar
        ir(vista) {
            this.$emit('ir', vista);
        }
    },
    template: `
        <footer class="bg-dark text-white py-4">
            <div class="container">
                <div class="row g-4 align-items-center">

                    <div class="col-12 col-md-4 text-center">
                        <h3 class="h6 text-primary-subtle text-uppercase fw-bold mb-2">Biblioteca Popular Portal Cultural</h3>
                        <p class="small text-white-50 mb-0">Leer, aprender y conectar con tu comunidad.</p>
                    </div>

                    <div class="col-12 col-md-4 text-center">
                        <h3 class="h6 text-primary-subtle text-uppercase fw-bold mb-2">Enlaces</h3>
                        <ul class="list-inline small mb-0">
                            <li class="list-inline-item me-3" v-for="enlace in enlaces" :key="enlace.vista">
                                <button type="button" class="btn btn-link btn-sm link-light p-0" @click="ir(enlace.vista)">{{ enlace.texto }}</button>
                            </li>
                        </ul>
                    </div>

                    <div class="col-12 col-md-4 text-center">
                        <h3 class="h6 text-primary-subtle text-uppercase fw-bold mb-2">Contacto</h3>
                        <p class="small text-white-50 mb-1">Av. Belgrano (sur) 1212 · Tel: 0385-4226787</p>
                        <p class="small mb-0">biblioteca_portal@gmail.com</p>
                    </div>

                </div>
                <hr class="border-secondary my-3">
                <p class="text-center small text-white-50 mb-0">&copy; 2026 Biblioteca Popular Portal Cultural. Todos los derechos reservados.</p>
            </div>
        </footer>
    `
};

/* VISTA INICIO: carrusel y bienvenida */
const VistaInicio = {
     methods: {
        // Le avisa a la página principal qué vista mostrar
        ir(vista) {
            this.$emit('ir', vista);
        }
    },
    template: `
        <section class="py-4">

            <!-- Carrusel -->
            <div class="container pt-3">
                <div id="carouselPortal" class="carousel slide shadow rounded-2 overflow-hidden bg-dark bg-opacity-50">

                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselPortal" data-bs-slide-to="0"
                                class="active" aria-current="true" aria-label="Diapositiva 1"></button>
                        <button type="button" data-bs-target="#carouselPortal" data-bs-slide-to="1"
                                aria-label="Diapositiva 2"></button>
                        <button type="button" data-bs-target="#carouselPortal" data-bs-slide-to="2"
                                aria-label="Diapositiva 3"></button>
                    </div>

                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="ratio ratio-21x9">
                                <img src="img/carrusel1.jpg" class="object-fit-cover" alt="Interior de la biblioteca">
                            </div>
                            <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-2">
                                <p class="h4 mb-1">Un espacio para todos</p>
                                <p>Libros, actividades y encuentros para toda la comunidad.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="ratio ratio-21x9">
                                <img src="img/carrusel2.jpg" class="object-fit-cover" alt="Actividades de la biblioteca">
                            </div>
                            <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-2">
                                <p class="h4 mb-1">Talleres y actividades</p>
                                <p>Aprendé, compartí y descubrí cosas nuevas.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="ratio ratio-21x9">
                                <img src="img/carrusel3.jpg" class="object-fit-cover" alt="Lectores en la biblioteca">
                            </div>
                            <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-2">
                                <p class="h4 mb-1">Leer nos une</p>
                                <p>Sumate a nuestra comunidad de lectores.</p>
                            </div>
                        </div>
                    </div>

                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselPortal" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Anterior</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselPortal" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Siguiente</span>
                    </button>
                </div>
            </div>

            <!-- Bienvenida -->
            <div class="container-fluid bg-primary-subtle py-4 mt-4">
                <div class="container text-center">
                    <h1 class="fw-bold fs-2 text-primary-emphasis">Biblioteca Popular Portal Cultural</h1>
                    <p class="lead text-body mb-0">Leer, aprender y conectar con tu comunidad</p>
                        <div class="d-flex flex-wrap justify-content-center gap-2 mt-3">
                        <button type="button" class="btn btn-primary btn-lg rounded-2 px-4" @click="ir('servicios')">Ver servicios</button>
                        <button type="button" class="btn btn-outline-primary btn-lg rounded-2 px-4" @click="ir('contacto')">Escribinos</button>
                    </div>
                </div>
            </div>
        </section>
    `
};

/* VISTA LA BIBLIOTECA: dos columnas (texto e imagen) */
const VistaBiblioteca = {
    data() {
        return {
            // Números de la biblioteca (se muestran con v-for)
            estadisticas: [
                { numero: '500+', texto: 'títulos digitales' },
                { numero: '6', texto: 'servicios' },
                { numero: '5', texto: 'colecciones' }
            ]
        };
    },
    template: `
        <section class="py-5">
            <div class="container">
                <div class="row g-4 align-items-center">

                    <div class="col-12 col-lg-6">
                        <span class="text-uppercase text-primary fw-bold small">Quiénes somos</span>
                        <h2 class="fw-bold text-primary-emphasis mb-3">La biblioteca</h2>
                        <p class="text-secondary">
                            La Biblioteca Popular Portal Cultural es un espacio abierto a toda la comunidad.
                            Ofrecemos libros, actividades y herramientas digitales para que todos puedan leer,
                            aprender y encontrarse con otros.
                        </p>

                        <!-- Grilla anidada: un row dentro de una col -->
                        <div class="row text-center g-3 my-3">
                            <div class="col-4" v-for="dato in estadisticas" :key="dato.texto">
                                <p class="fs-3 fw-bold text-primary mb-0">{{ dato.numero }}</p>
                                <p class="small text-secondary mb-0">{{ dato.texto }}</p>
                            </div>
                        </div>

                        <!-- Abre el modal que está en el index.html -->
                        <button type="button" class="btn btn-primary rounded-2 px-4"
                                data-bs-toggle="modal" data-bs-target="#modalSocio">
                            ¿Cómo me hago socio?
                        </button>
                    </div>

                    <div class="col-12 col-lg-6">
                        <img src="img/imagen-2.jpg" class="img-fluid rounded-2 shadow" alt="Espacio de la biblioteca">
                    </div>
                </div>
            </div>
        </section>
    `
};