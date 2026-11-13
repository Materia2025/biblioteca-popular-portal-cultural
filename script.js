/* ---------- INSTANCIA DE VUE ---------- */
const { createApp } = Vue;

createApp({

    /* Registro de los componentes */
    components: {
        'mi-header': MiHeader,
        'mi-footer': MiFooter,
        'vista-inicio': VistaInicio,
        'vista-biblioteca': VistaBiblioteca
    },

    /* Todo el estado de la página */
    data() {
        return {

            /* Una propiedad por vista */
            vista_inicio: true,
            vista_biblioteca: false,
            vista_servicios: false,
            vista_contacto: false,

                        /* Lista principal: colecciones y servicios (cupo: null = sin límite) */
            servicios: [
                {
                    id: 1,
                    nombre: 'Sala de lectura y préstamo',
                    descripcion: 'Espacio tranquilo para leer en sala y llevarte libros a casa con tu carnet de socio.',
                    horario: 'Lun a vie 8:30 a 20:00 h · Sáb 9:00 a 13:00 h',
                    imagen: 'img/seccion1.jpg',
                    interesados: 0,
                    cupo: null
                },
                {
                    id: 2,
                    nombre: 'Biblioteca digital',
                    descripcion: 'E-books y audiolibros para leer y escuchar desde cualquier dispositivo.',
                    horario: 'Las 24 h, online',
                    imagen: 'img/seccion2.jpg',
                    interesados: 0,
                    cupo: null
                },
                {
                    id: 3,
                    nombre: 'Sala infantil',
                    descripcion: 'Cuentos, juegos y talleres interactivos para chicos de 3 a 12 años.',
                    horario: 'Mar a sáb 15:00 a 18:00 h',
                    imagen: 'img/seccion3.jpg',
                    interesados: 0,
                    cupo: 15
                },
                {
                    id: 4,
                    nombre: 'Laboratorio de informática',
                    descripcion: 'Computadoras con internet y talleres de programación y herramientas digitales.',
                    horario: 'Lun a vie 9:00 a 12:30 h y 16:00 a 19:00 h',
                    imagen: 'img/seccion4.jpg',
                    interesados: 0,
                    cupo: 6
                },
                {
                    id: 5,
                    nombre: 'Coworking cultural',
                    descripcion: 'Mesas de trabajo, wifi y espacio de estudio para estudiantes y emprendedores.',
                    horario: 'Lun a vie 8:30 a 20:00 h',
                    imagen: 'img/seccion5.jpg',
                    interesados: 0,
                    cupo: 0
                },
                {
                    id: 6,
                    nombre: 'Hemeroteca y archivo local',
                    descripcion: 'Diarios, revistas y documentos históricos de la ciudad para consultar en sala.',
                    horario: 'Mar, jue y vie 9:00 a 12:30 h',
                    imagen: 'img/seccion6.jpg',
                    interesados: 0,
                    cupo: null
                }
            ],

            /* Noticias */
            noticias: [
                {
                    id: 1,
                    fecha: '08/10/2026',
                    titulo: 'Ya está disponible la biblioteca digital',
                    texto: 'Más de 500 títulos para leer y escuchar desde tu casa.'
                },
                {
                    id: 2,
                    fecha: '05/10/2026',
                    titulo: 'Abren las inscripciones al taller de programación',
                    texto: 'Quedan pocos lugares. Inscribite en el mostrador o por mensaje.'
                },
                {
                    id: 3,
                    fecha: '28/09/2026',
                    titulo: 'Semana del libro',
                    texto: 'Cuentacuentos y feria de intercambio de libros para toda la familia.'
                },
                {
                    id: 4,
                    fecha: '15/09/2026',
                    titulo: 'Sumamos un archivo histórico de la ciudad',
                    texto: 'Documentos y fotos antiguas disponibles para consultar en sala.'
                }
            ],

            /* Opciones del select del formulario */
            motivos: ['Consulta', 'Quiero hacerme socio', 'Sugerir un libro', 'Inscripción a talleres'],

            /* Campos del formulario (v-model) */
            nombre: '',
            email: '',
            motivo: '',
            mensaje: '',

            /* Mensajes guardados */
            mensajes: [],

            /* Alertas */
            error: false,
            guardado: false,
            caracteres: 0,

            /* Requisitos del modal */
            requisitos: ['Tu DNI.', 'Un comprobante de domicilio.', 'Abonar la cuota mensual simbólica.']
        };
    },

    /* Total de mensajes guardados */
    computed: {
        totalMensajes() {
            return this.mensajes.length;
        }
    },


        /* Cuenta las letras del mensaje mientras se escribe */
    watch: {
        mensaje(nuevo) {
            this.caracteres = nuevo.length;
        }
    },

    methods: {

        /* Navegación: pone todas las vistas en false y activa la correcta */
        mostrarVista(vista) {
            this.vista_inicio = false;
            this.vista_biblioteca = false;
            this.vista_servicios = false;
            this.vista_contacto = false;
            this['vista_' + vista] = true;
            window.scrollTo(0, 0)
        },

        /* Botón "Me interesa" de cada tarjeta */
        meInteresa(servicio) {
            servicio.interesados++;
        },

    /* Botón "Reservar lugar": descuenta un cupo y lleva a contacto */
        reservar(servicio) {
            if (servicio.cupo > 0) {
                servicio.cupo--;
                servicio.interesados++;
                this.mensaje = 'Hola, quiero reservar un lugar en: ' + servicio.nombre;
                this.mostrarVista('contacto');
            }
        },

        /* Botón "Guardar" del formulario */
        guardarMensaje() {
            // No guarda si algún campo está vacío
            if (this.nombre.trim() === '' || this.email.trim() === '' ||
                this.motivo === '' || this.mensaje.trim() === '') {
                this.error = true;
                this.guardado = false;
                return;
            }

            // Agrega el mensaje a la lista
            this.mensajes.push({
                nombre: this.nombre,
                email: this.email,
                motivo: this.motivo,
                mensaje: this.mensaje
            });

            // Limpia los campos y muestra la confirmación
            this.nombre = '';
            this.email = '';
            this.motivo = '';
            this.mensaje = '';
            this.error = false;
            this.guardado = true;
        }
    }

}).mount('#app');