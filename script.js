const preguntas = [
  {
    enunciado: "¿Qué es una organización según la definición vista en el tema 1?",
    opciones: [
      "Una unidad económica que solo busca beneficios",
      "Un conjunto de máquinas y recursos financieros",
      "Una sociedad mercantil inscrita en el registro",
      "Una unidad coordinada formada por un mínimo de dos personas que trabajan para alcanzar objetivos comunes"
    ],
    correcta: 3,
    explicacion: 'Diapositiva 4 del tema 1.'
  },
  {
    enunciado: "¿Cuál de las siguientes definiciones vistas de empresa es la de Barroso, 2010?",
    opciones: [
      "Una unidad técnico-económica que transforma un conjunto de recursos según una tecnología dada en productos o servicios, generando en ese proceso valor añadido.",
      "Un conjunto ordenado de factores productivos orientados al desarrollo de una función específica, bajo la dirección y control del empresario.",
      "Una unidad técnico-económica que transforma un conjunto de recursos según una tecnología dada en bienes materiales, generando en ese proceso beneficio inmediato.",
      "Unidad económica que combina un conjunto de elementos humanos, técnicos y financieros, ordenados según determinada estructura de organización y dirigidos en base a cierta relación de propiedad y control."
    ],
    correcta: 0,
    explicacion: 'Diapositiva 6 del tema 1. La correcta es la primera. La segunda opción corresponde a Alegre, Berné y Galve, 1995; la cuarta está tomada de Bueno Campos et al., 2002; y la tercera no coincide exactamente con la de Barroso.'
  },
  {
    enunciado: "Una empresa es:",
    opciones: [
      "Una organización que transforma recursos en bienes o servicios y busca beneficio",
      "Cualquier grupo de personas",
      "Cualquier institución pública",
      "Una asociación sin objetivos económicos"
    ],
    correcta: 0,
    explicacion: 'Diapositiva 8 del tema 1.'
  },
  {
    enunciado: "Señala la afirmación correcta: (Según el profesor, una de las preguntas que dice que pone: diferencia entre empresa y organización (diapositiva 9 del tema 1))",
    opciones: [
      "Toda organización es una empresa",
      "Empresa y organización son exactamente lo mismo",
      "Ninguna empresa es una organización",
      "Toda empresa es una organización"
    ],
    correcta: 3,
    explicacion: 'Diapositiva 8 del tema 1.'
  },
  {
    enunciado: "Una microempresa se caracteriza, principalmente, por tener:",
    opciones: [
      "Menos de 250 trabajadores",
      "Menos de 50 trabajadores",
      "Menos de 10 trabajadores",
      "Menos de 5 trabajadores"
    ],
    correcta: 2,
    explicacion: 'Diapositiva 14 del tema 1.'
  },
  {
    enunciado: "Según el enfoque sistémico, la empresa es un sistema abierto porque:",
    opciones: [
      "No necesita control interno",
      "Solo intercambia información",
      "Está en constante interacción con su entorno, influye en él y es influida por él",
      "Carece de objetivos definidos"
    ],
    correcta: 2,
    explicacion: 'Diapositiva 19 del tema 1.'
  },
  {
    enunciado: "El mecanismo por el que la empresa corrige desviaciones respecto a sus objetivos se llama:",
    opciones: [
      "Feedback o retroalimentación",
      "Outsourcing",
      "Sinergia",
      "Inversión"
    ],
    correcta: 0,
    explicacion: 'Diapositiva 22 del tema 1.'
  },
  {
    enunciado: "¿Cuál de los siguientes es un subsistema funcional de la empresa encargado de adquirir los insumos necesarios para el proceso productivo?",
    opciones: [
      "Subsistema financiero",
      "Subsistema de dirección",
      "Subsistema de aprovisionamiento",
      "Subsistema de comercialización"
    ],
    correcta: 2,
    explicacion: 'Diapositiva 24 del tema 1.'
  },
  {
    enunciado: "¿Qué subsistema toma decisiones sobre producto, precio, promoción y distribución?",
    opciones: [
      "Aprovisionamiento",
      "Producción",
      "Comercialización",
      "Recursos humanos"
    ],
    correcta: 2,
    explicacion: 'Diapositiva 24 del tema 1.'
  },
  {
    enunciado: "¿Qué mide la eficacia?",
    opciones: [
      "El nivel de cumplimiento de objetivos",
      "La liquidez inmediata",
      "El beneficio neto",
      "El volumen de recursos financieros"
    ],
    correcta: 0,
    explicacion: 'Diapositiva 27 del tema 1.'
  },
  {
    enunciado: "¿Qué mide la eficiencia?",
    opciones: [
      "El grado de endeudamiento de la empresa",
      "Si la organización utiliza la cantidad adecuada de recursos para lograr sus objetivos",
      "El número de trabajadores",
      "El crecimiento del beneficio extraordinario"
    ],
    correcta: 1,
    explicacion: 'Diapositiva 27 del tema 1.'
  },
  {
    enunciado: "¿Cuál de las siguientes es una función general clásica en el ámbito de la dirección de empresas?",
    opciones: [
      "Amortización",
      "Planificación",
      "Facturación",
      "Tesorería"
    ],
    correcta: 1,
    explicacion: 'Diapositiva 29 del tema 1.'
  },
  {
    enunciado: "Según Knight, el beneficio empresarial se justifica por:",
    opciones: [
      "La maximización automática del beneficio",
      "La propiedad colectiva del capital",
      "La intervención del Estado",
      "Los riesgos técnicos y económicos que asume el empresario"
    ],
    correcta: 3,
    explicacion: 'Diapositiva 31 del tema 1.'
  },
  {
    enunciado: "Según Schumpeter, el empresario es fundamentalmente:",
    opciones: [
      "Un órgano colegiado",
      "Un innovador",
      "Un mero propietario del capital",
      "Un trabajador especializado"
    ],
    correcta: 1,
    explicacion: 'Diapositiva 31 del tema 1.'
  },
  {
    enunciado: "Según Galbraith, la tecnoestructura es:",
    opciones: [
      "Un órgano colegiado que dirige la empresa",
      "El conjunto de accionistas minoritarios",
      "El mercado financiero que controla a la empresa",
      "El grupo de proveedores estratégicos"
    ],
    correcta: 0,
    explicacion: 'Diapositiva 33 del tema 1.'
  },
  {
    enunciado: "El gobierno corporativo pretende principalmente:",
    opciones: [
      "Eliminar el beneficio",
      "Sustituir a los accionistas",
      "Concretar las relaciones y controlar conflictos entre partes",
      "Reducir la producción"
    ],
    correcta: 2,
    explicacion: 'Diapositiva 39 del tema 1.'
  },
  {
    enunciado: "La Junta General:",
    opciones: [
      "Administra directamente la sociedad",
      "Sustituye a los trabajadores",
      "Aprueba precios de venta de cada producto",
      "Nombra a los administradores"
    ],
    correcta: 3,
    explicacion: 'Diapositiva 40 del tema 1.'
  },
  {
    enunciado: "¿Qué caracteriza al modelo anglosajón de gobierno corporativo?",
    opciones: [
      "Una concentración accionarial muy importante",
      "Un sistema monista dominado por participaciones cruzadas",
      "Un accionariado muy disperso",
      "La ausencia de directivos profesionales"
    ],
    correcta: 2,
    explicacion: 'Diapositiva 42 del tema 1.'
  },
  {
    enunciado: "La definición formal de RSC del tema 1 comienza diciendo que es un:",
    opciones: [
      "Sistema de maximización del beneficio",
      "Conjunto de obligaciones y compromisos legales y éticos",
      "Modelo de control exclusivo de accionistas",
      "Mecanismo contable de certificación"
    ],
    correcta: 1,
    explicacion: 'Diapositiva 47 del tema 1.'
  },
  {
    enunciado: "Según el 'Libro Verde sobre la RSC' de la Unión Europea, la RSC se define como:",
    opciones: [
        "La integración voluntaria de preocupaciones sociales y medioambientales en operaciones comerciales y relaciones con interlocutores",
      "La obligación legal de donar beneficios",
      "La subordinación de la empresa al Estado",
      "La protección exclusiva del accionista"
    ],
    correcta: 0,
    explicacion: 'Diapositiva 48 del tema 1.'
  },
  {
    enunciado: "¿Cuáles son los ámbitos de la RSC según el tema?",
    opciones: [
      "Jurídico, contable y fiscal",
      "Económicos, sociales y ambientales",
      "Local, nacional y europeo",
      "Internos, contables y tecnológicos"
    ],
    correcta: 1,
    explicacion: 'Diapositiva 51 del tema 1.'
  },
  {
    enunciado: "El desarrollo sostenible se define en el tema como aquel que:",
    opciones: [
      "Garantiza crecimiento económico ilimitado",
      "Aumenta la productividad industrial",
      "Reduce exclusivamente la contaminación urbana",
      "Satisface las necesidades del presente sin comprometer la capacidad de las generaciones futuras de satisfacer las suyas"
    ],
    correcta: 3,
    explicacion: 'Diapositiva 53 del tema 1.'
  },
  { 
    enunciado: 'El “triple objetivo” que se ha visto en el tema 1 es:',
    opciones: [
      "Crecer, exportar e innovar",
      "Ser económicamente viable, socialmente beneficiosa y ambientalmente responsable",
      "Reducir costes, subir precios y aumentar ventas",
      "Mejorar liquidez, solvencia y rentabilidad"
    ],
    correcta: 1,
    explicacion: 'Diapositiva 61 del tema 1.'
  },
  {
    enunciado: "Según el tema, los stakeholders son:",
    opciones: [
      "Solo los accionistas de control",
      "Solo clientes y proveedores",
      "Los grupos y personas que afectan a la empresa o son afectados por ella",
      "Únicamente los empleados"
    ],
    correcta: 2,
    explicacion: 'Diapositiva 90 del tema 1.'
  },
  { 
    enunciado: "Según Carroll, una de las cuatro caras de la responsabilidad social de la empresa es:",
    opciones: [
      "Obedecer la ley",
      "Eliminar toda financiación ajena",
      "Prescindir de los stakeholders",
      "Maximizar la producción física"
    ],
    correcta: 0,
    explicacion: 'Diapositiva 91 del tema 1.'
  },
  {
    enunciado: "La ecuación básica del patrimonio empresarial es:",
    opciones: [
      "Bienes + Obligaciones = Derechos + Patrimonio neto",
      "Bienes + Derechos - Obligaciones = Patrimonio neto",
      "Activo corriente - Activo no corriente = Pasivo",
      "Patrimonio neto + Ingresos = Costes"
    ],
    correcta: 1,
    explicacion: 'Diapositiva 7 del tema 2.'
  },
  {
    enunciado: "¿Cuál de las siguientes NO es una de las tres categorías del patrimonio empresarial?",
    opciones: [
      "Bienes",
      "Derechos",
      "Obligaciones",
      "Dividendos"
    ],
    correcta: 3,
    explicacion: 'Diapositiva 7 del tema 2.'
  },
  {
    enunciado: "La masa patrimonial de pasivo engloba:",
    opciones: [
      "Bienes y derechos de uso duradero",
      "Resultados acumulados no distribuidos",
      "Deudas u obligaciones pendientes de pago",
      "Solo el efectivo y otros activos líquidos"
    ],
    correcta: 2,
    explicacion: 'Diapositiva 10 del tema 2.'
  },
  {
    enunciado: "El neto patrimonial se expresa en el tema como:",
    opciones: [
      "Activo + Pasivo",
      "Activo corriente - Pasivo no corriente",
      "Recursos permanentes + activo fijo",
      "Activo - Pasivo"
    ],
    correcta: 3,
    explicacion: 'Diapositiva 11 del tema 2.'
  },
  {
    enunciado: "La situación en la que el activo circulante coincide con el pasivo circulante es:",
    opciones: [
      "Iliquidez",
      "Máxima estabilidad",
      "Quiebra",
      "Expansión"
    ],
    correcta: 0,
    explicacion: 'Diapositiva 32 del tema 2.'
  },
  {
    enunciado: "¿Cuándo se da la situación de máxima estabilidad?",
    opciones: [
      "Cuando el activo circulante coincide con el pasivo circulante",
      "Cuando todo el activo está financiado con recursos propios y la empresa no tiene deudas",
      "Cuando el patrimonio neto es negativo",
      "Cuando la empresa tiene más pasivo corriente que activo corriente"
    ],
    correcta: 1,
    explicacion: 'Diapositiva 34 del tema 2.'
  },
  { 
    enunciado: "El fondo de maniobra o capital circulante es:",
    opciones: [
      "Activo no corriente + patrimonio neto",
      "Pasivo corriente - activo circulante",
      "Beneficio económico - beneficio neto",
      "Activo circulante - pasivo circulante"
    ],
    correcta: 3,
    explicacion: 'Diapositiva 36 del tema 2.'
  },
  {
    enunciado: "En empresas comerciales, el período medio de maduración es:",
    opciones: [
      "PMM = Pmds + Pc - Pp",
      "PMM = Pp + Pc + Pmds",
      "PMM = Pc - Pmds",
      "PMM = Pmds - Pc + Pp"
    ],
    correcta: 0,
    explicacion: 'Diapositiva 38 del tema 2.'
  },
  {
    enunciado: "La ratio de solvencia total es:",
    opciones: [
      "Activo total / pasivo total",
      "Patrimonio neto / activo total",
      "Ventas / pasivo corriente",
      "BAIT / impuestos"
    ],
    correcta: 0,
    explicacion: 'Diapositiva 49 del tema 2.'
  },
  { 
    enunciado: "El beneficio es:",
    opciones: [
      "La diferencia entre activo y pasivo",
      "Un excedente económico resultante de la diferencia entre ingresos y gastos",
      "El valor de los fondos propios",
      "El resultado de restar activo fijo al pasivo total"
    ],
    correcta: 1,
    explicacion: 'Diapositiva 52 del tema 2.'
  },
  {
    enunciado: "El BAIT es:",
    opciones: [
      "Beneficio después de impuestos",
      "Beneficio antes de impuestos y después de intereses",
      "Beneficio neto distribuible",
      "Beneficio antes de intereses e impuestos"
    ],
    correcta: 3,
    explicacion: 'Diapositiva 53 del tema 2.'
  },
  {
    enunciado: "El beneficio económico (BAIT) depende únicamente de:",
    opciones: [
      "La estructura financiera y el impuesto sobre beneficios",
      "Los dividendos a cuenta",
      "El pasivo corriente",
      "La actividad realizada y la estructura productiva y de distribución"
    ],
    correcta: 3,
    explicacion: 'Diapositiva 54 del tema 2.'
  },
  {
    enunciado: "¿Qué diferencia se ha visto entre coste y gasto?",
    opciones: [
      "Son exactamente lo mismo",
      "El gasto es siempre mayor que el coste",
      "El gasto es la expresión monetaria de la adquisición de factores, y el coste es la medida y valoración del consumo realizado o previsto",
      "El coste solo existe en empresas industriales"
    ],
    correcta: 2,
    explicacion: 'Diapositiva 61 del tema 2.'
  },
  { 
    enunciado: "¿Qué es el punto muerto o umbral de rentabilidad?",
    opciones: [
      "El volumen de operaciones en el que la empresa cubre todos sus costes fijos y variables",
      "El punto en que el activo iguala al pasivo",
      "El valor del patrimonio neto al inicio del ejercicio",
      "El momento en el que desaparece el coste fijo"
    ],
    correcta: 0,
    explicacion: 'Diapositiva 72 del tema 2.'
  },
  {
    enunciado: "¿Cuál es la característica de una inversión simple?",
    opciones: [
      "Todos los flujos netos de caja son negativos",
      "El flujo inicial es positivo por definición",
      "Todos los flujos netos de caja son positivos salvo el flujo inicial, que es negativo por definición",
      "Incluye al menos dos desembolsos iniciales negativos obligatorios"
    ],
    correcta: 2,
    explicacion: 'Diapositiva 91 del tema 2.'
  }
];

const quiz = document.getElementById("quiz");

// Estado de cada pregunta: null = no respondida, número = opción elegida
const respuestasUsuario = Array(preguntas.length).fill(null);

// Orden visible actual de las preguntas
let ordenPreguntas = preguntas.map((_, i) => i);

// Barra superior
const barra = document.createElement("div");
barra.style.marginBottom = "20px";

const botonAleatorio = document.createElement("button");
botonAleatorio.textContent = "Mostrar en orden aleatorio";
botonAleatorio.style.marginRight = "10px";

const contador = document.createElement("p");
contador.style.margin = "10px 0 0 0";
contador.style.fontWeight = "bold";

quiz.before(barra);
barra.appendChild(botonAleatorio);
barra.appendChild(contador);

// Botón final de reinicio
const botonReiniciar = document.createElement("button");
botonReiniciar.textContent = "Borrar respuestas y empezar de nuevo";
botonReiniciar.style.marginTop = "20px";

// Botón para terminar y ver resultados
const botonTerminar = document.createElement("button");
botonTerminar.textContent = "He terminado";
botonTerminar.style.marginTop = "20px";
botonTerminar.style.marginRight = "10px";
botonTerminar.style.display = "none";

// Caja de resultados finales
const resultadoFinal = document.createElement("div");
resultadoFinal.className = "explicacion";
resultadoFinal.style.display = "none";
resultadoFinal.style.marginTop = "20px";

function mezclar(array) {
  const copia = [...array];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

function actualizarContador() {
  let acertadas = 0;
  let respondidas = 0;

  preguntas.forEach((pregunta, i) => {
    if (respuestasUsuario[i] !== null) {
      respondidas++;
      if (respuestasUsuario[i] === pregunta.correcta) {
        acertadas++;
      }
    }
  });

  const textoPregunta = acertadas === 1 ? "pregunta" : "preguntas";

  contador.textContent =
    respondidas === preguntas.length
      ? `Has respondido bien ${acertadas} ${textoPregunta} de ${preguntas.length}.`
      : `Has respondido bien ${acertadas} ${textoPregunta} de ${preguntas.length} de momento.`;
}

function mostrarResultados() {
  let acertadas = 0;
  let falladas = 0;
  let respondidas = 0;

  preguntas.forEach((pregunta, i) => {
    if (respuestasUsuario[i] !== null) {
      respondidas++;

      if (respuestasUsuario[i] === pregunta.correcta) {
        acertadas++;
      } else {
        falladas++;
      }
    }
  });

  const total = preguntas.length;
  const notaSinPenalizacion = (10 * acertadas) / total;
  const notaConPenalizacion = Math.max(0, 10 * ((acertadas - falladas / 3) / total));
  const textoRespondidas = respondidas === 1 ? "pregunta" : "preguntas";

  resultadoFinal.innerHTML = `
    <strong>Resultados:</strong><br>
    Has respondido ${respondidas} de ${total} ${textoRespondidas}.<br>
    Has acertado ${acertadas} de ${total}.<br>
    Nota sin penalización: ${notaSinPenalizacion.toFixed(2)} / 10.<br>
    Nota con penalización de 1/3 por fallo: ${notaConPenalizacion.toFixed(2)} / 10 (mínimo 0).
  `;
  resultadoFinal.style.display = "block";
}

function renderQuiz() {
  quiz.innerHTML = "";

  ordenPreguntas.forEach((indiceReal) => {
    const pregunta = preguntas[indiceReal];

    const contenedor = document.createElement("section");
    contenedor.className = "pregunta";

    const enunciado = document.createElement("h2");
    enunciado.className = "enunciado";
    enunciado.textContent = `${ordenPreguntas.indexOf(indiceReal) + 1}. ${pregunta.enunciado}`;
    contenedor.appendChild(enunciado);

    const opcionesDiv = document.createElement("div");
    opcionesDiv.className = "opciones";

    const explicacion = document.createElement("div");
    explicacion.className = "explicacion";

    pregunta.opciones.forEach((textoOpcion, indiceOpcion) => {
      const boton = document.createElement("button");
      boton.className = "opcion";
      boton.textContent = textoOpcion;

      const respuestaGuardada = respuestasUsuario[indiceReal];

      if (respuestaGuardada !== null) {
        boton.disabled = true;

        if (indiceOpcion === pregunta.correcta) {
          boton.classList.add("correcta");
        }

        if (indiceOpcion === respuestaGuardada && respuestaGuardada !== pregunta.correcta) {
          boton.classList.add("incorrecta");
        }

        explicacion.innerHTML = `<strong>Explicación:</strong> ${pregunta.explicacion}`;
        explicacion.style.display = "block";
      }

      boton.addEventListener("click", () => {
        if (respuestasUsuario[indiceReal] !== null) return;

        respuestasUsuario[indiceReal] = indiceOpcion;

        renderQuiz();
        actualizarContador();
      });

      opcionesDiv.appendChild(boton);
    });

    contenedor.appendChild(opcionesDiv);
    contenedor.appendChild(explicacion);
    quiz.appendChild(contenedor);
  });

  botonTerminar.style.display = "inline-block";

  quiz.appendChild(botonTerminar);
  quiz.appendChild(resultadoFinal);
  quiz.appendChild(botonReiniciar);
}

botonAleatorio.addEventListener("click", () => {
  ordenPreguntas = mezclar(ordenPreguntas);
  renderQuiz();
});

botonTerminar.addEventListener("click", () => {
  mostrarResultados();
});

botonReiniciar.addEventListener("click", () => {
  for (let i = 0; i < respuestasUsuario.length; i++) {
    respuestasUsuario[i] = null;
  }
  ordenPreguntas = preguntas.map((_, i) => i);
  resultadoFinal.style.display = "none";
  botonTerminar.style.display = "none";
  renderQuiz();
  actualizarContador();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

renderQuiz();
actualizarContador();