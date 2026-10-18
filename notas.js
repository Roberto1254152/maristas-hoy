/* =====================================================================
   NOTAS DE MARISTAS HOY
   Aquí se escribe el contenido de cada página.
   Bloques que puedes usar dentro de "cuerpo":
     "Texto normal"                    → párrafo
     {h:"Subtítulo"}                   → título de sección
     {cita:"Frase destacada", de:"Quién"}
     {lista:["uno","dos","tres"]}
     {foto:"fotos/archivo.jpg", pie:"Descripción"}
   ===================================================================== */
const NOTAS = {
  examenes:{
    seccion:"Última hora", color:"vino", foto:"fotos/portada.jpg",
    titulo:"¡Adelanto de exámenes!",
    subtitulo:"La coordinación académica recorre una semana el periodo de evaluaciones.",
    autor:"Equipo de Redacción 3°B", fecha:"14 de octubre de 2026",
    cuerpo:[
      "Las evaluaciones del parcial se aplicarán una semana antes de lo previsto. Alumnos y maestros ya ajustan su planeación para cerrar los temas a tiempo.",
      {h:"¿Qué materias cambian?"},
      {lista:["Materia 1 — nueva fecha","Materia 2 — nueva fecha","Materia 3 — nueva fecha"]},
      {h:"Tips para estudiar en menos tiempo"},
      {lista:["Haz resúmenes por tema","Practica con exámenes pasados","Estudia en bloques de 25 minutos","Duerme bien la noche anterior"]},
      {cita:"Escribe aquí la opinión de un alumno o maestro.", de:"Alumno de 3°B"},
      "Agrega aquí el cierre de la nota."
    ]
  },
  idukay:{
    seccion:"Cambio de plataforma", color:"", foto:"fotos/idukay.jpg",
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
    titulo:"Más allá de Dirección",
    subtitulo:"El lado menos visto de quienes dirigen la escuela.",
    autor:"Equipo de Redacción 3°B", fecha:"Octubre 2026",
    cuerpo:[
      "Introducción de la entrevista: a quién entrevistamos y por qué.",
      {h:"¿Cómo es un día normal en Dirección?"},
      "Respuesta del entrevistado.",
      {h:"¿Cuál es el mayor reto de este ciclo?"},
      "Respuesta del entrevistado.",
      {cita:"Una frase memorable de la entrevista.", de:"Nombre del entrevistado"},
      {h:"Un mensaje para esta generación"},
      "Respuesta del entrevistado."
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
const ORDEN = ["examenes","idukay","direccion","redaccion","muertos","cafeteria","satira","servicio","conadeip","conarte"];
