/* =====================================================================
   NOTAS DE MARISTAS HOY
   Aquí se escribe el contenido de cada página.
   Bloques que puedes usar dentro de "cuerpo":
     "Texto normal"                    → párrafo
     {h:"Subtítulo"}                   → título de sección
     {cita:"Frase destacada", de:"Quién"}
     {lista:["uno","dos","tres"]}
     {foto:"fotos/archivo.jpg", pie:"Descripción"}
     {evento:{dia:"21", mes:"OCT", titulo:"Nombre", texto:"Descripción"}}
     {horario:{...}}                   → tabla de exámenes por grupo (ver nota "examenes")
   ===================================================================== */
const NOTAS = {
  examenes:{
    seccion:"Última hora", color:"vino", foto:"fotos/portada.jpg",
    titulo:"¡Adelanto de exámenes!",
    subtitulo:"El segundo parcial se aplica del 22 de octubre al 4 de noviembre. Consulta el horario de tu grupo.",
    autor:"Equipo de Redacción 3°B", fecha:"14 de octubre de 2026",
    cuerpo:[
      "Los exámenes del segundo parcial de preparatoria se aplican del jueves 22 de octubre al miércoles 4 de noviembre de 2026. Elige tu grupo para ver solo tus fechas.",
      {h:"Horario por grupo"},
      {horario:{
        grupos:["1A", "1B", "3A", "3B", "5 EA", "5 CSH", "5 QB", "5 FM"],
        filas:[
        ["Jueves 22","Historia Universal Contemporánea / Biología","Historia Universal Contemporánea","Taller de Lectura y Redacción","Taller de Lectura y Redacción","Contabilidad Básica / Métodos de Investigación","Filosofía / Historia de la Cultura","Química / Ecología","Química / Métodos de Investigación"],
        ["Viernes 23","Español","Español / Biología","Historia de México / Computación","Deportes","Administración","Historia Universal Contemporánea","Matemáticas","Matemáticas"],
        ["Lunes 26","Ciencias Sociales","Ciencias Sociales / Deportes","Matemáticas / Filosofía","Matemáticas / Computación","Cálculo / Matemáticas Financieras","Etimologías / Deportes","Etimologías / Física","Física"],
        ["Martes 27","Matemáticas","Matemáticas","Química","Química / Filosofía","Mercadotecnia / Temas Complementarios de Matemáticas","Taller de Lectura y Redacción / Temas Complementarios de Matemáticas","Ciencias de la Salud","Métodos Generales de Dibujo"],
        ["Miércoles 28","Desarrollo de Habilidades del Pensamiento","Desarrollo de Habilidades del Pensamiento","Física / Francés","Francés / Física","Francés","Francés / Psicología","Francés","Francés"],
        ["Jueves 29 · Día de Muertos","Computación","Computación","Psicología","Historia de México / Psicología","—","—","—","—"],
        ["Viernes 30","Inglés","Inglés","Inglés","Inglés","Economía / Inglés","Sociología / Inglés","Inglés","Seminario de Historia de la Cultura / Inglés"],
        ["Lunes 2 · Asueto","—","—","—","—","—","—","—","—"],
        ["Martes 3","Deportes","","Deportes","","Derecho / Estadística","Derecho / Estadística","Estadística","Taller de Expresión Gráfica / Estadística"],
        ["Miércoles 4","","","","","Deportes","","Microscopía / Deportes","Deportes"]
        ]
      }},
      {h:"Tips para estudiar en menos tiempo"},
      {lista:["Haz resúmenes por tema","Practica con exámenes pasados","Estudia en bloques de 25 minutos","Duerme bien la noche anterior"]},
      {cita:"Escribe aquí la opinión de un alumno o maestro.", de:"Alumno de 3°B"},
      "Agrega aquí el cierre de la nota."
    ]
  },
  cascanueces:{
    seccion:"Exclusiva", color:"vino", foto:"fotos/cascanueces.jpg",
    titulo:"El Cascanueces regresa al Teatro de la Ciudad",
    subtitulo:"Por segundo año consecutivo, el colegio presentará su propia adaptación del clásico navideño, con la participación de los alumnos de primaria.",
    autor:"Equipo de Redacción 3°B", fecha:"Octubre 2026",
    cuerpo:[
      "Por segundo año consecutivo se realizará una adaptación de El Cascanueces en el Teatro de la Ciudad y contará con la participación de los alumnos de primaria.",
      {h:"Artistas invitados"},
      {evento:{dia:"3", mes:"DIC", titulo:"Jueves · Pláticas con bailarines y cantantes", texto:"Vendrán bailarines y cantantes externos a dar pláticas con motivo de la adaptación de El Cascanueces."}},
      {h:"Lo que falta por saber"},
      {lista:["Fecha y hora de la función: por confirmar","Grados de primaria que participan: por confirmar","Boletos: por confirmar"]},
      "Consulta también la agenda completa de octubre a diciembre en Eventos Champagnat."
    ]
  },
  eventos:{
    seccion:"Eventos Champagnat", color:"oro", foto:"fotos/cascanueces.jpg",
    titulo:"Eventos Champagnat",
    subtitulo:"Exclusiva: El Cascanueces vuelve al Teatro de la Ciudad. Además, todo lo que viene de octubre a diciembre.",
    autor:"Equipo de Redacción 3°B", fecha:"Octubre 2026",
    cuerpo:[
      {h:"Exclusiva"},
      "Por segundo año consecutivo se realizará una adaptación de El Cascanueces en el Teatro de la Ciudad y contará con la participación de los alumnos de primaria.",
      {h:"Octubre"},
      {evento:{dia:"21", mes:"OCT", titulo:"Miércoles · Actividad por la paz", texto:"Los alumnos de la sección primaria estarán realizando una actividad relacionada con la unión de las Naciones Unidas y la paz."}},
      {evento:{dia:"29", mes:"OCT", titulo:"Jueves · Festejo del Día de Muertos", texto:"Como cada año, se realizarán tumbas y altares. Y como parte de la festividad de Halloween, se contará con una casa del terror."}},
      {h:"Noviembre"},
      {evento:{dia:"4–8", mes:"NOV", titulo:"Torneo internacional Futbol Vallarta", texto:"Del 4 al 8 de noviembre se disputarán los partidos del torneo, en el que participará el selectivo de secundaria-preparatoria."}},
      {evento:{dia:"11", mes:"NOV", titulo:"Miércoles · Conferencia del Día del Libro", texto:"Se realizará una conferencia para los alumnos de preparatoria acerca del Día del Libro."}},
      {h:"Diciembre"},
      {evento:{dia:"3", mes:"DIC", titulo:"Jueves · Pláticas sobre El Cascanueces", texto:"Vendrán bailarines y cantantes externos a dar pláticas con motivo de la adaptación de El Cascanueces."}},
      {evento:{dia:"4", mes:"DIC", titulo:"Viernes · Fiesta navideña", texto:"Fiesta navideña exclusivamente para alumnos de secundaria y preparatoria."}},
      {evento:{dia:"8", mes:"DIC", titulo:"Martes · Visita al Santuario de Guadalupe", texto:"Visita al Santuario de Guadalupe por los alumnos de 2° de secundaria."}}
    ]
  },
  codingcup:{
    seccion:"Programación", color:"vino", foto:"fotos/codingcup.jpg",
    titulo:"Prepas entre universitarios: nuestro selectivo, en el top 10 de la CodingCup TecNM",
    subtitulo:"Alumnos de preparatoria compitieron contra equipos universitarios de tecnológicos del estado y del país, y terminaron entre los diez mejores.",
    autor:"Equipo de Redacción 3°B", fecha:"Octubre 2026",
    cuerpo:[
      "El selectivo de programación de la preparatoria participó en la CodingCup del Tecnológico Nacional de México (TecNM), una competencia en la que se enfrentó a equipos universitarios de institutos tecnológicos del estado y de todo el país.",
      "Siendo alumnos de preparatoria, nuestros programadores compitieron de igual a igual contra estudiantes de nivel superior y terminaron dentro del top 10.",
      {h:"El equipo"},
      {lista:["Escribe aquí el nombre del integrante 1","Escribe aquí el nombre del integrante 2","Escribe aquí el nombre del integrante 3"]},
      {cita:"Escribe aquí una frase de un integrante o del asesor.", de:"Nombre"}
    ]
  },
  civico:{
    seccion:"Primaria", color:"vino", foto:"fotos/civico.jpg",
    titulo:"México tejido desde el corazón",
    subtitulo:"Ceremonia cívica conmemorativa por el Día de la Nación Pluricultural.",
    autor:"Equipo de Redacción 3°B", fecha:"12 de octubre de 2026",
    cuerpo:[
      "El día lunes 12 de octubre del 2026, los grupos de 6° grado de primaria estuvieron a cargo del acto cívico en honor a la bandera del mes vigente.",
      "El tema central fue el Día de la Nación Pluricultural, una fecha para reconocer y recordar que México es mucho más que un territorio; es un país tejido con las manos, las voces y los saberes de sus pueblos indígenas.",
      "Los grupos nos demostraron su compromiso, dedicación y organización al dirigir el programa de honores a la bandera, con algunos actos que representan la diversidad cultural a lo largo de los procesos históricos mexicanos.",
      {foto:"fotos/honores2.jpg", pie:"Honores a la bandera del 12 de octubre"}
    ]
  },
  crecer:{
    seccion:"Primaria", color:"", foto:"fotos/crecer.jpg",
    titulo:"Crecer es natural: aprendamos sobre nuestro cuerpo",
    subtitulo:"Dos enfermeras visitan a los alumnos de cuarto, quinto y sexto de primaria para enseñarles que conocer nuestro cuerpo es el primer paso para aprender a respetarlo.",
    autor:"Equipo de Redacción 3°B", fecha:"Octubre 2026",
    cuerpo:[
      {cita:"¿Y si hablar de la menstruación dejara de ser incómodo y se convirtiera en una oportunidad para aprender, comprender y apoyar a los demás?"},
      "Con esta idea, dos enfermeras impartieron una plática a los alumnos de cuarto, quinto y sexto de primaria, donde compartieron información importante sobre uno de los procesos naturales del cuerpo humano.",
      "Esta actividad permitió que los alumnos adquirieran nuevos conocimientos y comprendieran la importancia de hablar abiertamente sobre la salud. Además, contribuyó a fomentar un ambiente escolar de confianza, igualdad y respeto entre niñas y niños."
    ]
  },
  retiro:{
    seccion:"Primaria", color:"oro", foto:"fotos/retiro.jpg",
    titulo:"Un viaje del corazón: nuestro retiro espiritual marista",
    subtitulo:"Los alumnos de primaria vivieron su retiro espiritual siguiendo el ejemplo de San Marcelino Champagnat.",
    autor:"Equipo de Redacción 3°B", fecha:"Octubre 2026",
    cuerpo:[
      "Los alumnos de primaria vivimos una experiencia inolvidable en nuestro retiro espiritual marista. Dejamos por un momento los libros y las aulas para encontrarnos con nosotros mismos, con la naturaleza y con Jesús, siguiendo el ejemplo de sencillez y amor de San Marcelino Champagnat."
    ]
  },
  idukay:{
    seccion:"Cambio de plataforma", color:"conlogo", foto:"fotos/idukay.jpg",
    titulo:"Llegó Idukay: así funciona la nueva plataforma",
    subtitulo:"Calificaciones, tareas, avisos y pagos ahora en un solo lugar.",
    autor:"Equipo de Redacción 3°B", fecha:"Octubre 2026",
    cuerpo:[
      "La escuela dejó la plataforma anterior y ahora usa Idukay. Aquí te explicamos qué cambia y cómo entrar.",
      {h:"¿Qué puedo hacer en Idukay?"},
      {lista:["Consultar calificaciones","Ver tareas y fechas de entrega","Recibir avisos de la escuela","Revisar pagos y colegiaturas"]},
      {h:"Cómo entrar"},
      {lista:["Paso 1: escribe aquí cómo descargar la app o abrir la página","Paso 2: escribe aquí qué usuario y contraseña se usan","Paso 3: escribe aquí qué hacer si olvidas tu contraseña"]},
      {cita:"Escribe aquí la opinión de un alumno, maestro o del área de sistemas.", de:"Nombre"},
      {h:"¿Dudas?"},
      "Escribe aquí con quién acudir si tienes problemas para entrar."
    ]
  },
  direccion:{
    seccion:"Más allá de Dirección", color:"", foto:"fotos/direccion.jpg",
    titulo:"José Miguel: más allá de la dirección",
    subtitulo:"El director nos habla de su juventud, los retos de su cargo y lo que significa para él el colegio.",
    autor:"Prepa González Buffa Max", fecha:"Octubre 2026",
    cuerpo:[
      "Durante una entrevista para nuestro periódico escolar, el director José Miguel nos compartió algunas experiencias de su vida y su trabajo. Cuando era joven, disfrutaba practicar deportes y salir con sus amigos. También recordó que tuvo dificultades con una maestra durante la preparatoria.",
      {h:"Lo que más disfruta y sus mayores retos"},
      "Lo que más disfruta de ser director es convivir con los jóvenes, aprender de ellos y contribuir a su desarrollo. Sin embargo, reconoce que la responsabilidad, las limitaciones administrativas y las situaciones difíciles que viven los integrantes de la comunidad escolar son algunos de los mayores retos de su cargo.",
      {h:"Un camino inesperado"},
      "Además, confesó que nunca imaginó dedicarse a la educación, pues tenía otros planes para su futuro, pero con el tiempo aprendió a aceptar el camino que la vida le presentó.",
      {h:"Un colegio que avanza en equipo"},
      "Finalmente, explicó que el colegio avanza gracias al trabajo conjunto de directivos, docentes, alumnos y familias. Para él, la escuela se define en tres palabras:",
      {cita:"Alegría, fe y juventud.", de:"José Miguel, director"}
    ]
  },
  redaccion:{
    seccion:"Redacción", color:"oro", foto:"fotos/redaccion.jpg",
    titulo:"Un mes de cambios",
    subtitulo:"Nuevas plataformas, horarios y costumbres: el recuento editorial del mes.",
    autor:"Consejo Editorial", fecha:"Octubre 2026",
    cuerpo:[
      "Escribe aquí el editorial: la postura del periódico sobre lo que pasó este mes en la escuela.",
      {h:"Lo que funcionó"},
      "Texto.",
      {h:"Lo que falta mejorar"},
      "Texto."
    ]
  },
  republica:{
    seccion:"República Escolar", color:"", foto:"",
    titulo:"La República Escolar: una oportunidad para fortalecer la participación estudiantil",
    subtitulo:"La secundaria ya organiza una nueva edición del proyecto que impulsa la democracia, la igualdad y el liderazgo.",
    autor:"Equipo de Redacción 3°B", fecha:"Octubre 2026",
    cuerpo:[
      "Con el objetivo de mejorar la participación democrática, la igualdad y el desarrollo personal de los estudiantes, la secundaria del Marcelino Champagnat ya se encuentra organizando la nueva edición del proyecto República Escolar. En entrevista, Juan Camacho Hernández, director de secundaria, nos compartió los detalles de la relevancia de esta tradición.",
      {cita:"República Escolar es un proyecto muy bueno que consideramos que a los alumnos primeramente les agrada, y les deja mucho aprendizaje en cuestión de democracia y de igualdades.", de:"Juan Camacho Hernández, director de secundaria"},
      {h:"Seguridad y confianza"},
      "Juan Camacho señaló que la participación activa ayuda a los estudiantes a ganar seguridad y confianza en sí mismos; esto genera un impacto positivo en el ámbito social. Al presentar sus propuestas, dar a conocer sus ideas para así poder desarrollar habilidades de comunicación y liderazgo.",
      {cita:"Se les va quitando el miedo a afrontar todo este tipo de situaciones y a relacionarse con personas con las que generalmente no tienen tanto trato.", de:"Juan Camacho Hernández"},
      {h:"Espacios para expresarse"},
      "Con estas acciones, la escuela brinda espacios donde los estudiantes puedan expresarse, perder el miedo a hablar en público y aprender a trabajar juntos por el bienestar común."
    ]
  },
  muertos:{
    seccion:"República Escolar", color:"vino", foto:"fotos/muertos.jpg",
    titulo:"Iniciando el Día de Muertos",
    subtitulo:"Cada grupo prepara su ofrenda. Estas son las bases del concurso.",
    autor:"República Escolar", fecha:"Octubre 2026",
    cuerpo:[
      "Introducción sobre la tradición y el concurso de ofrendas de este año.",
      {h:"Bases del concurso"},
      {lista:["Fecha y lugar","Elementos obligatorios de la ofrenda","Criterios de evaluación","Premios"]},
      {foto:"fotos/ofrenda.jpg", pie:"Ofrenda del año pasado"}
    ]
  },
  cafeteria:{
    seccion:"Menú y precios", color:"oro", foto:"fotos/cafeteria.jpg",
    titulo:"El menú de la semana",
    subtitulo:"Qué hay en la cafetería, cuánto cuesta y el especial de temporada.",
    autor:"Equipo de Redacción 3°B", fecha:"Semana del 14 de octubre",
    cuerpo:[
      {h:"Lunes a viernes"},
      {lista:["Chilaquiles — $45","Molletes — $35","Torta de jamón — $35","Enchiladas — $50","Agua fresca — $15"]},
      {cita:"Especial de temporada: pan de muerto a $20.", de:"Cafetería"},
      "Agrega aquí la reseña del platillo de la semana."
    ]
  },
  satira:{
    seccion:"Sátira", color:"", foto:"fotos/satira1.jpg",
    titulo:"Sátira del Día de Muertos",
    subtitulo:"Una calaverita sobre la vida escolar. Solo es humor.",
    autor:"Grupo 3°B", fecha:"Octubre 2026",
    cuerpo:[
      {foto:"fotos/satira1.jpg", pie:"“Vine por mi calificación del parcial…”"},
      {foto:"fotos/satira2.jpg", pie:"“¡Ayuda! ¡Adelantaron los exámenes!”"},
      {foto:"fotos/satira3.jpg", pie:"“Tranquilo, de este lado ya nadie reprueba.”"},
      {h:"Calaverita literaria"},
      "Escribe aquí una calaverita original del grupo."
    ]
  },
  servicio:{
    seccion:"Calendario", color:"vino", foto:"fotos/servicio.jpg",
    titulo:"Registro de Servicio Social",
    subtitulo:"Fechas, requisitos y dónde hacer tu registro.",
    autor:"Equipo de Redacción 3°B", fecha:"Octubre 2026",
    cuerpo:[
      {h:"Requisitos"},
      {lista:["Requisito 1","Requisito 2","Requisito 3"]},
      {h:"Fechas importantes"},
      "Escribe aquí las fechas de registro y entrega."
    ]
  },
  conadeip:{
    seccion:"CONADEIP", color:"oro", foto:"fotos/conadeip.jpg",
    titulo:"Nuestras selecciones en la cancha",
    subtitulo:"Resultados de la jornada y próximos partidos.",
    autor:"Deportes 3°B", fecha:"Octubre 2026",
    cuerpo:[
      {h:"Resultados"},
      {lista:["Básquetbol: Maristas __ – __ Rival","Fútbol: Maristas __ – __ Rival","Voleibol: Maristas __ – __ Rival"]},
      {h:"Próximos partidos"},
      "Fechas y sedes.",
      {cita:"Frase del entrenador o capitán.", de:"Capitán del equipo"}
    ]
  },
  conarte:{
    seccion:"CONARTE", color:"", foto:"fotos/conarte.jpg",
    titulo:"Talento artístico marista",
    subtitulo:"Música, teatro y artes visuales: quiénes nos representan.",
    autor:"Cultura 3°B", fecha:"Octubre 2026",
    cuerpo:[
      {h:"Próximas presentaciones"},
      {lista:["Disciplina — fecha — lugar","Disciplina — fecha — lugar"]},
      "Escribe aquí una reseña o entrevista con un participante."
    ]
  }
};
/* Orden en que se navega con los botones Anterior / Siguiente */
const ORDEN = ["examenes","cascanueces","eventos","idukay","direccion","redaccion","republica","muertos","cafeteria","satira","servicio","conadeip","conarte","codingcup","civico","crecer","retiro"];