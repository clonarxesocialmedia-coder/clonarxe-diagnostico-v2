// ===============================
// SUPABASE
// ===============================

const SUPABASE_URL = "https://givnyehgdltgrhckkwlx.supabase.co";

const SUPABASE_KEY = "sb_publishable_vCYbSm3kiJ7j_6f1IstBtw_pAG6mIp-";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);
// ============================================================
// DATOS DEL FORMULARIO
// ============================================================
const FORM_DATA = {
  bloques: [
    {
      bloque_numero: 1,
      titulo: "Dependencia Directa del Dueño",
      descripcion: "Evalúa qué tan indispensable es la presencia del dueño para que el negocio funcione en el día a día.",
      frase: "La autonomía comienza cuando el conocimiento deja de depender de una sola persona.",
      preguntas: [
        { numero: 4,  pregunta: "El negocio puede operar varios días sin mi presencia o supervisión constante.", tipo: "opcion_unica", opciones: [{valor:1,texto:"No puede sin mí"},{valor:3,texto:"Parcialmente, pero requiere apoyo frecuente"},{valor:5,texto:"Puede completamente sin mí, de forma autónoma y consistente"}] },
        { numero: 5,  pregunta: "Las decisiones operativas se toman sin necesidad de consultarme.", tipo: "opcion_unica", opciones: [{valor:1,texto:"Siempre me consultan"},{valor:2,texto:"El 90% de las veces me consultan"},{valor:3,texto:"El 50% de las veces me consultan"},{valor:4,texto:"Solo el 10% de las veces me consultan"},{valor:5,texto:"Completamente sin mí, de forma autónoma y consistente"}] },
        { numero: 6,  pregunta: "El negocio puede mantener sus resultados si me ausento una semana.", tipo: "opcion_unica", opciones: [{valor:1,texto:"No puede mantener los resultados"},{valor:5,texto:"Sí puede mantener los resultados"}] },
        { numero: 7,  pregunta: "Los problemas diarios se resuelven sin depender de mí.", tipo: "opcion_unica", opciones: [{valor:1,texto:"No"},{valor:2,texto:"En casos muy limitados"},{valor:3,texto:"Parcialmente, pero requiere apoyo frecuente"},{valor:4,texto:"En la mayoría de los casos sin mi intervención"},{valor:5,texto:"Completamente sin mí, de forma autónoma y consistente"}] },
        { numero: 8,  pregunta: "El equipo sabe qué situaciones resolver por su cuenta y cuáles escalar sin depender de mí.", tipo: "opcion_unica", opciones: [{valor:1,texto:"No"},{valor:2,texto:"En casos muy limitados"},{valor:3,texto:"Parcialmente, pero requiere apoyo frecuente"},{valor:4,texto:"En la mayoría de los casos sin mi intervención"},{valor:5,texto:"Completamente sin mí, de forma autónoma y consistente"}] },
        { numero: 9,  pregunta: "El negocio puede funcionar correctamente sin mi participación diaria.", tipo: "opcion_unica", opciones: [{valor:1,texto:"No"},{valor:2,texto:"En casos muy limitados"},{valor:3,texto:"Parcialmente, pero requiere apoyo frecuente"},{valor:4,texto:"En la mayoría de los casos sin mi intervención"},{valor:5,texto:"Completamente sin mí, de forma autónoma y consistente"}] }
      ]
    },
    {
      bloque_numero: 2,
      titulo: "Delegación y Transferencia de Responsabilidad",
      descripcion: "Evalúa si las responsabilidades del negocio están realmente transferidas al equipo o concentradas en el dueño.",
      frase: "Delegar correctamente aumenta la velocidad y la capacidad de tu negocio.",
      preguntas: [
        { numero: 11, pregunta: "Cada área del negocio tiene un responsable formalmente definido.", tipo: "opcion_unica", opciones: [{valor:1,texto:"No existe en mi negocio"},{valor:2,texto:"Existe de manera informal o inconsistente"},{valor:3,texto:"Existe pero no se aplica de forma constante"},{valor:4,texto:"Está implementado y funciona en la mayoría de los casos"},{valor:5,texto:"Está completamente implementado y funciona sin intervención del dueño"}] },
        { numero: 12, pregunta: "Las responsabilidades de cada rol están documentadas y claras para el equipo.", tipo: "opcion_unica", opciones: [{valor:1,texto:"No existe en mi negocio"},{valor:2,texto:"Existe de manera informal o inconsistente"},{valor:3,texto:"Existe pero no se aplica de forma constante"},{valor:4,texto:"Está implementado y funciona en la mayoría de los casos"},{valor:5,texto:"Está completamente implementado y funciona sin intervención del dueño"}] },
        { numero: 13, pregunta: "El equipo ejecuta tareas sin supervisión constante.", tipo: "opcion_unica", opciones: [{valor:1,texto:"No existe en mi negocio"},{valor:2,texto:"Existe de manera informal o inconsistente"},{valor:3,texto:"Existe pero no se aplica de forma constante"},{valor:4,texto:"Está implementado y funciona en la mayoría de los casos"},{valor:5,texto:"Está completamente implementado y funciona sin intervención del dueño"}] },
        { numero: 14, pregunta: "Cuando se delegan tareas, los resultados son consistentes.", tipo: "opcion_unica", opciones: [{valor:1,texto:"No existe en mi negocio"},{valor:2,texto:"Existe de manera informal o inconsistente"},{valor:3,texto:"Existe pero no se aplica de forma constante"},{valor:4,texto:"Está implementado y funciona en la mayoría de los casos"},{valor:5,texto:"Está completamente implementado y funciona sin intervención del dueño"}] },
        { numero: 15, pregunta: "Cuando una persona clave se ausenta, otra puede asumir su función sin afectar el desempeño.", tipo: "opcion_unica", opciones: [{valor:1,texto:"No existe en mi negocio"},{valor:2,texto:"Existe de manera informal o inconsistente"},{valor:3,texto:"Existe pero no se aplica de forma constante"},{valor:4,texto:"Está implementado y funciona en la mayoría de los casos"},{valor:5,texto:"Está completamente implementado y funciona sin intervención del dueño"}] },
        { numero: 16, pregunta: "Existen indicadores claros para evaluar el desempeño de cada área.", tipo: "opcion_unica", opciones: [{valor:1,texto:"No existe en mi negocio"},{valor:2,texto:"Existe de manera informal o inconsistente"},{valor:3,texto:"Existe pero no se aplica de forma constante"},{valor:4,texto:"Está implementado y funciona en la mayoría de los casos"},{valor:5,texto:"Está completamente implementado y funciona sin intervención del dueño"}] }
      ]
    },
    {
      bloque_numero: 3,
      titulo: "Estandarización de Procesos",
      descripcion: "Evalúa si el negocio opera mediante procesos definidos y replicables, en lugar de depender de la memoria de las personas.",
      frase: "Cada proceso documentado fortalece la capacidad de crecer sin depender de nadie en particular.",
      preguntas: [
        { numero: 18, pregunta: "Los procesos clave están documentados paso a paso y se mantienen actualizados.", tipo: "opcion_unica", opciones: [{valor:1,texto:"No existe en mi negocio"},{valor:2,texto:"Existe de manera informal o inconsistente"},{valor:3,texto:"Existe pero no se aplica de forma constante"},{valor:4,texto:"Está implementado y funciona en la mayoría de los casos"},{valor:5,texto:"Está completamente implementado y funciona sin intervención del dueño"}] },
        { numero: 19, pregunta: "Los espacios de trabajo están organizados de acuerdo al flujo del proceso.", tipo: "opcion_unica", opciones: [{valor:1,texto:"No existe en mi negocio"},{valor:2,texto:"Existe de manera informal o inconsistente"},{valor:3,texto:"Existe pero no se aplica de forma constante"},{valor:4,texto:"Está implementado y funciona en la mayoría de los casos"},{valor:5,texto:"Está completamente implementado y funciona sin intervención del dueño"}] },
        { numero: 20, pregunta: "Las tareas importantes no dependen de la memoria de una persona, sino de un sistema definido.", tipo: "opcion_unica", opciones: [{valor:1,texto:"No existe en mi negocio"},{valor:2,texto:"Existe de manera informal o inconsistente"},{valor:3,texto:"Existe pero no se aplica de forma constante"},{valor:4,texto:"Está implementado y funciona en la mayoría de los casos"},{valor:5,texto:"Está completamente implementado y funciona sin intervención del dueño"}] },
        { numero: 21, pregunta: "Dos personas diferentes pueden ejecutar el mismo proceso con el mismo resultado.", tipo: "opcion_unica", opciones: [{valor:1,texto:"No existe en mi negocio"},{valor:2,texto:"Existe de manera informal o inconsistente"},{valor:3,texto:"Existe pero no se aplica de forma constante"},{valor:4,texto:"Está implementado y funciona en la mayoría de los casos"},{valor:5,texto:"Está completamente implementado y funciona sin intervención del dueño"}] },
        { numero: 22, pregunta: "Existen mecanismos claros para prevenir y corregir errores operativos.", tipo: "opcion_unica", opciones: [{valor:1,texto:"No existe en mi negocio"},{valor:2,texto:"Existe de manera informal o inconsistente"},{valor:3,texto:"Existe pero no se aplica de forma constante"},{valor:4,texto:"Está implementado y funciona en la mayoría de los casos"},{valor:5,texto:"Está completamente implementado y funciona sin intervención del dueño"}] },
        { numero: 23, pregunta: "Los procesos se revisan y mejoran de forma periódica.", tipo: "opcion_unica", opciones: [{valor:1,texto:"No existe en mi negocio"},{valor:2,texto:"Existe de manera informal o inconsistente"},{valor:3,texto:"Existe pero no se aplica de forma constante"},{valor:4,texto:"Está implementado y funciona en la mayoría de los casos"},{valor:5,texto:"Está completamente implementado y funciona sin intervención del dueño"}] }
      ]
    },
    {
      bloque_numero: 4,
      titulo: "Claridad de Roles y Estructura",
      descripcion: "Evalúa si el negocio cuenta con una estructura organizacional clara donde cada persona conoce su rol y sus responsabilidades.",
      frase: "Una estructura clara permite que el negocio avance incluso cuando el dueño no está presente.",
      preguntas: [
        { numero: 25, pregunta: "Cada persona sabe exactamente qué se espera de su rol.", tipo: "opcion_unica", opciones: [{valor:1,texto:"No existe en mi negocio"},{valor:2,texto:"Existe de manera informal o inconsistente"},{valor:3,texto:"Existe pero no se aplica de forma constante"},{valor:4,texto:"Está implementado y funciona en la mayoría de los casos"},{valor:5,texto:"Está completamente implementado y funciona sin intervención del dueño"}] },
        { numero: 26, pregunta: "Existen descripciones claras de las funciones y responsabilidades de cada rol.", tipo: "opcion_unica", opciones: [{valor:1,texto:"No existe en mi negocio"},{valor:2,texto:"Existe de manera informal o inconsistente"},{valor:3,texto:"Existe pero no se aplica de forma constante"},{valor:4,texto:"Está implementado y funciona en la mayoría de los casos"},{valor:5,texto:"Está completamente implementado y funciona sin intervención del dueño"}] },
        { numero: 27, pregunta: "Las reuniones de trabajo tienen objetivos definidos y seguimiento estructurado.", tipo: "opcion_unica", opciones: [{valor:1,texto:"No existe en mi negocio"},{valor:2,texto:"Existe de manera informal o inconsistente"},{valor:3,texto:"Existe pero no se aplica de forma constante"},{valor:4,texto:"Está implementado y funciona en la mayoría de los casos"},{valor:5,texto:"Está completamente implementado y funciona sin intervención del dueño"}] },
        { numero: 28, pregunta: "Existen métricas visibles para medir el desempeño individual y del equipo.", tipo: "opcion_unica", opciones: [{valor:1,texto:"No existe en mi negocio"},{valor:2,texto:"Existe de manera informal o inconsistente"},{valor:3,texto:"Existe pero no se aplica de forma constante"},{valor:4,texto:"Está implementado y funciona en la mayoría de los casos"},{valor:5,texto:"Está completamente implementado y funciona sin intervención del dueño"}] },
        { numero: 29, pregunta: "Las responsabilidades de cada rol están alineadas con los objetivos del negocio.", tipo: "opcion_unica", opciones: [{valor:1,texto:"No existe en mi negocio"},{valor:2,texto:"Existe de manera informal o inconsistente"},{valor:3,texto:"Existe pero no se aplica de forma constante"},{valor:4,texto:"Está implementado y funciona en la mayoría de los casos"},{valor:5,texto:"Está completamente implementado y funciona sin intervención del dueño"}] },
        { numero: 30, pregunta: "La estructura organizacional facilita la coordinación entre áreas.", tipo: "opcion_unica", opciones: [{valor:1,texto:"No existe en mi negocio"},{valor:2,texto:"Existe de manera informal o inconsistente"},{valor:3,texto:"Existe pero no se aplica de forma constante"},{valor:4,texto:"Está implementado y funciona en la mayoría de los casos"},{valor:5,texto:"Está completamente implementado y funciona sin intervención del dueño"}] }
      ]
    },
    {
      bloque_numero: 5,
      titulo: "Confianza y Comunicación Operativa",
      descripcion: "Evalúa si existe un ambiente de confianza y comunicación que permita que la operación funcione con transparencia.",
      frase: "Los equipos de alto rendimiento se construyen sobre comunicación honesta y confianza mutua.",
      preguntas: [
        { numero: 32, pregunta: "Existe confianza mutua entre el dueño y el equipo para asumir responsabilidades.", tipo: "opcion_unica", opciones: [{valor:1,texto:"Nunca ocurre"},{valor:2,texto:"Rara vez"},{valor:3,texto:"Algunas veces, pero no es consistente"},{valor:4,texto:"En la mayoría de los casos"},{valor:5,texto:"Siempre o casi siempre"}] },
        { numero: 33, pregunta: "Los errores se comunican de manera abierta y oportuna dentro del equipo.", tipo: "opcion_unica", opciones: [{valor:1,texto:"Nunca ocurre"},{valor:2,texto:"Rara vez"},{valor:3,texto:"Algunas veces, pero no es consistente"},{valor:4,texto:"En la mayoría de los casos"},{valor:5,texto:"Siempre o casi siempre"}] },
        { numero: 34, pregunta: "El equipo puede expresar desacuerdos sin temor a consecuencias negativas.", tipo: "opcion_unica", opciones: [{valor:1,texto:"Nunca ocurre"},{valor:2,texto:"Rara vez"},{valor:3,texto:"Algunas veces, pero no es consistente"},{valor:4,texto:"En la mayoría de los casos"},{valor:5,texto:"Siempre o casi siempre"}] },
        { numero: 35, pregunta: "La comunicación operativa es clara entre las áreas y/o departamentos del negocio.", tipo: "opcion_unica", opciones: [{valor:1,texto:"No lo es"},{valor:2,texto:"Rara vez"},{valor:3,texto:"Algunas veces, pero no es consistente"},{valor:4,texto:"En la mayoría de los casos"},{valor:5,texto:"Siempre o casi siempre"}] },
        { numero: 36, pregunta: "Las cosas importantes el equipo me las comunica de forma directa.", tipo: "opcion_unica", opciones: [{valor:1,texto:"Nunca ocurre"},{valor:2,texto:"Rara vez"},{valor:3,texto:"Algunas veces, pero no es consistente"},{valor:4,texto:"En la mayoría de los casos"},{valor:5,texto:"Siempre o casi siempre"}] },
        { numero: 37, pregunta: "Cuando doy una instrucción, el equipo la ejecuta exactamente como lo solicité.", tipo: "opcion_unica", opciones: [{valor:1,texto:"Nunca ocurre"},{valor:2,texto:"Rara vez"},{valor:3,texto:"Algunas veces, pero no es consistente"},{valor:4,texto:"En la mayoría de los casos"},{valor:5,texto:"Siempre o casi siempre"}] }
      ]
    },
    {
      bloque_numero: 6,
      titulo: "Cultura de Ejecución y Mejora",
      descripcion: "Evalúa si el negocio cuenta con una cultura que promueve la ejecución disciplinada y la mejora continua.",
      frase: "La mejora continua no es un evento, es un hábito que define a los negocios que perduran.",
      preguntas: [
        { numero: 39, pregunta: "El equipo comprende la visión y los objetivos del negocio y ejecuta sus tareas de forma alineada.", tipo: "opcion_unica", opciones: [{valor:1,texto:"Nunca ocurre"},{valor:2,texto:"Rara vez"},{valor:3,texto:"Algunas veces, pero no es consistente"},{valor:4,texto:"En la mayoría de los casos"},{valor:5,texto:"Siempre o casi siempre"}] },
        { numero: 40, pregunta: "El cumplimiento de procesos y estándares se evalúa regularmente con evidencia verificable.", tipo: "opcion_unica", opciones: [{valor:1,texto:"No"},{valor:3,texto:"Algunas veces, pero no es consistente"},{valor:5,texto:"Sí, siempre"}] },
        { numero: 41, pregunta: "Cuando ocurren errores, se analizan para mejorar el sistema.", tipo: "opcion_unica", opciones: [{valor:1,texto:"Nunca ocurre"},{valor:2,texto:"Rara vez"},{valor:3,texto:"Algunas veces, pero no es consistente"},{valor:4,texto:"En la mayoría de los casos"},{valor:5,texto:"Siempre o casi siempre"}] },
        { numero: 42, pregunta: "Se promueve activamente la mejora continua en las operaciones.", tipo: "opcion_unica", opciones: [{valor:1,texto:"Nunca ocurre"},{valor:2,texto:"Rara vez"},{valor:3,texto:"Algunas veces, pero no es consistente"},{valor:4,texto:"En la mayoría de los casos"},{valor:5,texto:"Siempre o casi siempre"}] },
        { numero: 43, pregunta: "Las decisiones se toman basadas en datos y procesos definidos.", tipo: "opcion_unica", opciones: [{valor:1,texto:"Nunca ocurre"},{valor:2,texto:"Rara vez"},{valor:3,texto:"Algunas veces, pero no es consistente"},{valor:4,texto:"En la mayoría de los casos"},{valor:5,texto:"Siempre o casi siempre"}] },
        { numero: 44, pregunta: "El cumplimiento de responsabilidades es consistente dentro del equipo.", tipo: "opcion_unica", opciones: [{valor:1,texto:"Nunca ocurre"},{valor:2,texto:"Rara vez"},{valor:3,texto:"Algunas veces, pero no es consistente"},{valor:4,texto:"En la mayoría de los casos"},{valor:5,texto:"Siempre o casi siempre"}] }
      ]
    },
    {
      bloque_numero: 7,
      titulo: "Sostenibilidad y Escalabilidad Operativa",
      descripcion: "Evalúa si el negocio cuenta con las condiciones para crecer de manera sostenible sin aumentar la dependencia del dueño.",
      frase: "Un negocio escalable crece en resultados sin crecer en dependencia del dueño.",
      preguntas: [
        { numero: 46, pregunta: "El negocio puede crecer sin que yo aumente mis horas de trabajo.", tipo: "opcion_unica", opciones: [{valor:1,texto:"No"},{valor:3,texto:"Limitadamente"},{valor:5,texto:"Sí, 100%"}] },
        { numero: 47, pregunta: "Existe un plan claro de crecimiento para el negocio.", tipo: "opcion_unica", opciones: [{valor:1,texto:"No"},{valor:3,texto:"Limitadamente"},{valor:5,texto:"Sí, 100%"}] },
        { numero: 48, pregunta: "La rentabilidad del negocio permite reinvertir en mejora y expansión.", tipo: "opcion_unica", opciones: [{valor:1,texto:"No"},{valor:3,texto:"Limitadamente"},{valor:5,texto:"Sí, 100%"}] },
        { numero: 49, pregunta: "Los procesos pueden replicarse fácilmente en otra ubicación o equipo.", tipo: "opcion_unica", opciones: [{valor:1,texto:"No"},{valor:3,texto:"Limitadamente"},{valor:5,texto:"Sí, 100%"}] },
        { numero: 50, pregunta: "El negocio genera resultados sostenibles sin depender del esfuerzo extraordinario del dueño.", tipo: "opcion_unica", opciones: [{valor:1,texto:"No"},{valor:3,texto:"Limitadamente"},{valor:5,texto:"Sí, 100%"}] },
        { numero: 51, pregunta: "La estructura actual del negocio soportaría un aumento significativo en la demanda.", tipo: "opcion_unica", opciones: [{valor:1,texto:"No"},{valor:3,texto:"Limitadamente"},{valor:5,texto:"Sí, 100%"}] }
      ]
    },
    {
      bloque_numero: 8,
      titulo: "Control y Monitoreo",
      descripcion: "Evalúa si el negocio cuenta con mecanismos para monitorear su desempeño y tomar decisiones basadas en información.",
      frase: "Lo que no se mide, no se puede mejorar. El control es la base de la autonomía real.",
      preguntas: [
        { numero: 53, pregunta: "Existen indicadores claros para medir el desempeño del negocio.", tipo: "opcion_unica", opciones: [{valor:1,texto:"No existe en mi negocio"},{valor:2,texto:"Existe, pero de forma informal o poco clara"},{valor:3,texto:"Existe, pero no se utiliza de forma constante"},{valor:4,texto:"Está implementado y se utiliza en la mayoría de los casos"},{valor:5,texto:"Está completamente integrado y se utiliza activamente para tomar decisiones"}] },
        { numero: 54, pregunta: "Los resultados del negocio se revisan periódicamente para identificar desviaciones.", tipo: "opcion_unica", opciones: [{valor:1,texto:"No"},{valor:2,texto:"Sin consistencia"},{valor:3,texto:"Siempre"}] },
        { numero: 55, pregunta: "Cuando un indicador se desvía, se toman acciones correctivas de manera oportuna.", tipo: "opcion_unica", opciones: [{valor:1,texto:"No existe en mi negocio"},{valor:3,texto:"Existe, pero se utiliza inconsistentemente"},{valor:5,texto:"Está completamente integrado y se utiliza activamente"}] },
        { numero: 56, pregunta: "El equipo conoce los indicadores clave que debe monitorear.", tipo: "opcion_unica", opciones: [{valor:1,texto:"No existe en mi negocio"},{valor:3,texto:"Existe, pero se utiliza inconsistentemente"},{valor:5,texto:"Está completamente integrado y se utiliza activamente"}] },
        { numero: 57, pregunta: "Existe un sistema o herramienta para registrar y monitorear los resultados operativos.", tipo: "opcion_unica", opciones: [{valor:1,texto:"No existe en mi negocio"},{valor:2,texto:"Existe, pero de forma informal o poco clara"},{valor:3,texto:"Existe, pero no se utiliza de forma constante"},{valor:4,texto:"Está implementado y se utiliza en la mayoría de los casos"},{valor:5,texto:"Está completamente integrado y se utiliza activamente para tomar decisiones"}] },
        { numero: 58, pregunta: "Las decisiones operativas se basan en información y análisis de resultados.", tipo: "opcion_unica", opciones: [{valor:1,texto:"No existe en mi negocio"},{valor:5,texto:"Sí, está completamente integrado y se utiliza activamente"}] }
      ]
    }
  ]
};

const TOTAL_PREGUNTAS = FORM_DATA.bloques.reduce((s,b) => s + b.preguntas.length, 0); // 48
const MAXIMO_BLOQUE  = 30;
const MAXIMO_TOTAL   = 240;
// circumference para r=85: 2π×85 ≈ 534.07
const CIRCUNFERENCIA = 2 * Math.PI * 85;

const INTERP_BLOQUES = [
  "Nivel de dependencia aún alto — el negocio necesita que estés presente para funcionar.",
  "Las responsabilidades aún no están completamente transferidas al equipo.",
  "Los procesos aún dependen de personas específicas y no están suficientemente documentados.",
  "La estructura de roles necesita mayor claridad y formalización.",
  "La comunicación y la confianza dentro del equipo tienen oportunidades de mejora.",
  "La cultura de ejecución está en desarrollo — aún no es completamente consistente.",
  "El negocio tiene capacidad de escala limitada en su estado actual.",
  "Los mecanismos de control y monitoreo aún no están completamente integrados."
];

// ============================================================
// ESTADO
// ============================================================
let estado = {
  bloqueIdx: 0,
  preguntaIdx: 0,
  respuestas: {},
  puntajesBloques: [],
  identificacion: { correo: '', nombre: '', celular: '' }
};

// ============================================================
// INIT — cargar imágenes desde data-atributos
// ============================================================
window.addEventListener('DOMContentLoaded', () => {
  const d = document.getElementById('logo-data');
  const logoSrc    = d.dataset.logo;
  const isotipoSrc = d.dataset.isotipo;
  document.querySelectorAll('.logo-completo').forEach(el => el.src = logoSrc);
  document.querySelectorAll('[id^="isotipo-"]').forEach(el => el.src = isotipoSrc);
});

// ============================================================
// NAVEGACIÓN DE PANTALLAS
// ============================================================
function show(id) {
  document.querySelectorAll('.pantalla').forEach(p => p.classList.remove('activa'));
  document.getElementById(id).classList.add('activa');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================================
// PANTALLA 1 — BIENVENIDA
// ============================================================
document.getElementById('btn-comenzar').addEventListener('click', () => show('pantalla-identificacion'));

// ============================================================
// PANTALLA 2 — IDENTIFICACIÓN
// ============================================================
document.getElementById('btn-volver-bienvenida').addEventListener('click', () => show('pantalla-bienvenida'));

// Selector internacional de teléfono
const telefonoInput = document.getElementById("campo-celular");

const iti = window.intlTelInput(telefonoInput, {
    initialCountry: "pa",
    preferredCountries: ["pa", "co", "mx", "us", "es"],
    separateDialCode: true,
    nationalMode: false,
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@25.3.0/build/js/utils.js"
});
document.getElementById('btn-ir-bloques').addEventListener('click', () => {
  if (!validarIdenti()) return;
  estado.identificacion.correo  = document.getElementById('campo-correo').value.trim();
  estado.identificacion.nombre  = document.getElementById('campo-nombre').value.trim();
estado.identificacion.celular = iti.getNumber();
  estado.bloqueIdx = 0;
  estado.preguntaIdx = 0;
  estado.respuestas = {};
  estado.puntajesBloques = [];
  renderPregunta();
  show('pantalla-preguntas');
});

function validarIdenti() {
  let ok = true;
  const correo  = document.getElementById('campo-correo').value.trim();
  const nombre  = document.getElementById('campo-nombre').value.trim();
  const celular = document.getElementById('campo-celular').value.trim();
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(correo))  { setErr('campo-correo','error-correo','Ingresa un correo válido.'); ok=false; } else clearErr('campo-correo','error-correo');
  if (nombre.length < 3)      { setErr('campo-nombre','error-nombre','Ingresa tu nombre completo.'); ok=false; } else clearErr('campo-nombre','error-nombre');
  if (celular.length < 5)     { setErr('campo-celular','error-celular','Ingresa tu celular con código de país.'); ok=false; } else clearErr('campo-celular','error-celular');
  return ok;
}
function setErr(id,eid,msg)  { document.getElementById(id).classList.add('input-error'); document.getElementById(eid).textContent = msg; }
function clearErr(id,eid)    { document.getElementById(id).classList.remove('input-error'); document.getElementById(eid).textContent = ''; }

// ============================================================
// PANTALLA 3 — RENDER PREGUNTA
// ============================================================
function renderPregunta() {
  const bloque   = FORM_DATA.bloques[estado.bloqueIdx];
  const pregunta = bloque.preguntas[estado.preguntaIdx];

  // Pregunta global
  let pregGlobal = 0;
  for (let i = 0; i < estado.bloqueIdx; i++) pregGlobal += FORM_DATA.bloques[i].preguntas.length;
  pregGlobal += estado.preguntaIdx + 1;

  // Progreso
  const pct = Math.round(((pregGlobal - 1) / TOTAL_PREGUNTAS) * 100);
  document.getElementById('prog-bloque-label').textContent   = `Bloque ${estado.bloqueIdx+1} de ${FORM_DATA.bloques.length}`;
  document.getElementById('prog-pregunta-label').textContent = `Pregunta ${pregGlobal} de ${TOTAL_PREGUNTAS}`;
  document.getElementById('prog-pct-label').textContent      = `${pct}%`;
  document.getElementById('progreso-fill').style.width       = `${pct}%`;

  // Dots
  const dotsEl = document.getElementById('progreso-dots');
  dotsEl.innerHTML = '';
  FORM_DATA.bloques.forEach((_,i) => {
    const d = document.createElement('div');
    d.className = 'dot' + (i < estado.bloqueIdx ? ' done' : i === estado.bloqueIdx ? ' active' : '');
    dotsEl.appendChild(d);
  });

  // Header bloque
  document.getElementById('bloque-badge').textContent  = `Bloque ${bloque.bloque_numero}`;
  document.getElementById('bloque-titulo').textContent = bloque.titulo;
  document.getElementById('bloque-desc').textContent   = bloque.descripcion;

  // Pregunta
  document.getElementById('pregunta-texto').textContent = pregunta.pregunta;

  // Opciones
  const grid = document.getElementById('opciones-grid');
  grid.innerHTML = '';
  const respActual = estado.respuestas[pregunta.numero];

  pregunta.opciones.forEach(opcion => {
    const card = document.createElement('div');
    card.className = 'opcion-card' + (respActual === opcion.valor ? ' selected' : '');
    card.innerHTML = `
      <div class="opcion-check"></div>
      <span class="opcion-texto">${opcion.texto}</span>
      <span class="opcion-pts">${opcion.valor} pts</span>
    `;
    card.addEventListener('click', () => seleccionarOpcion(pregunta.numero, opcion.valor, card, grid));
    grid.appendChild(card);
  });

  // Botón Continuar
  const btnSig = document.getElementById('btn-p-siguiente');
  if (respActual !== undefined) {
    btnSig.disabled = false;
    btnSig.classList.remove('disabled');
  } else {
    btnSig.disabled = true;
    btnSig.classList.add('disabled');
  }

  // Botón Anterior
  const btnAnt = document.getElementById('btn-p-anterior');
  btnAnt.style.visibility = (estado.bloqueIdx === 0 && estado.preguntaIdx === 0) ? 'hidden' : 'visible';
}

function seleccionarOpcion(numPregunta, valor, cardEl, grid) {
  estado.respuestas[numPregunta] = valor;
  grid.querySelectorAll('.opcion-card').forEach(c => c.classList.remove('selected','pop'));
  cardEl.classList.add('selected','pop');
  // Activar botón Continuar — el usuario decide cuándo avanzar
  const btnSig = document.getElementById('btn-p-siguiente');
  btnSig.disabled = false;
  btnSig.classList.remove('disabled');
}

// ============================================================
// NAVEGACIÓN PREGUNTAS
// ============================================================
document.getElementById('btn-p-anterior').addEventListener('click', retrocederPregunta);
document.getElementById('btn-p-siguiente').addEventListener('click', avanzarPregunta);

function avanzarPregunta() {
  const bloque          = FORM_DATA.bloques[estado.bloqueIdx];
  const numPregActual   = bloque.preguntas[estado.preguntaIdx].numero;
  if (estado.respuestas[numPregActual] === undefined) return;

  const esUltimaPregBloque = estado.preguntaIdx >= bloque.preguntas.length - 1;
  const esUltimoBloque     = estado.bloqueIdx  >= FORM_DATA.bloques.length - 1;

  if (esUltimaPregBloque) {
    // Calcular puntaje del bloque
    let pts = 0;
    bloque.preguntas.forEach(p => { if (estado.respuestas[p.numero]) pts += estado.respuestas[p.numero]; });
    estado.puntajesBloques[estado.bloqueIdx] = pts;
    if (esUltimoBloque) {
      mostrarCargando();
    } else {
      mostrarEntreBloques(pts);
    }
  } else {
    estado.preguntaIdx++;
    renderPregunta();
  }
}

function retrocederPregunta() {
  if (estado.preguntaIdx > 0) {
    estado.preguntaIdx--;
  } else if (estado.bloqueIdx > 0) {
    estado.bloqueIdx--;
    estado.preguntaIdx = FORM_DATA.bloques[estado.bloqueIdx].preguntas.length - 1;
  }
  renderPregunta();
}

// ============================================================
// PANTALLA 4 — ENTRE BLOQUES
// ============================================================
function mostrarEntreBloques(ptsBloqueActual){

    const bloque = FORM_DATA.bloques[estado.bloqueIdx];
    const acum = estado.puntajesBloques.reduce((s,v)=>s+(v||0),0);

    document.getElementById("entre-titulo").textContent =
        bloque.titulo + " completado";

    document.getElementById("entre-score-bloque").textContent =
        ptsBloqueActual;

    document.getElementById("entre-score-acum").textContent =
        acum;

    document.getElementById("entre-frase").textContent =
        bloque.frase;

    show("pantalla-entre-bloques");

    const circ = 2 * Math.PI * 68;

    const ringBloque = document.getElementById("ring-bloque");
    const ringAcum   = document.getElementById("ring-acum");

    ringBloque.style.strokeDasharray = circ;
    ringAcum.style.strokeDasharray = circ;

    ringBloque.style.strokeDashoffset = circ;
    ringAcum.style.strokeDashoffset = circ;

    requestAnimationFrame(()=>{

        ringBloque.style.strokeDashoffset =
            circ - ((ptsBloqueActual / 30) * circ);

        ringAcum.style.strokeDashoffset =
            circ - ((acum / 240) * circ);

    });

}
// ============================================================
// PANTALLA 5 — CARGANDO
// ============================================================
const MENSAJES_CARGA = [
  'Analizando estructura organizacional...',
  'Evaluando autonomía operativa...',
  'Calculando indicadores...',
  'Comparando resultados...',
  'Preparando diagnóstico...',
  'Generando visualización...'
];

function mostrarCargando() {
  show('pantalla-cargando');
  let idx = 0;
  const msgEl = document.getElementById('cargando-msg');
  msgEl.textContent = MENSAJES_CARGA[0];
  const interval = setInterval(() => {
    idx++;
    if (idx < MENSAJES_CARGA.length) {
      msgEl.style.opacity = '0';
      setTimeout(() => { msgEl.textContent = MENSAJES_CARGA[idx]; msgEl.style.opacity = '1'; }, 200);
    } else {
      clearInterval(interval);
      setTimeout(mostrarResultados, 300);
    }
  }, 380);
}

// ============================================================
// PANTALLA 6 — RESULTADOS
// ============================================================
async function guardarDiagnostico(total) {

  try {

const { error } = await supabaseClient
      .from("Diagnósticos")
      .insert([{
    nombre: estado.identificacion.nombre || "",
    correo: estado.identificacion.correo || "",
    telefono: estado.identificacion.celular || "",
    puntaje_total: total,
    respuestas: estado
}]);

    if (error) {
      console.error("Error Supabase:", error);
    } else {
      console.log("Diagnóstico guardado.");
    }

  } catch (e) {
    console.error(e);
  }

}
function mostrarResultados() {
  const total = estado.puntajesBloques.reduce((s,v) => s+(v||0), 0);
  guardarDiagnostico(total);
  const pct   = (total / MAXIMO_TOTAL) * 100;

  document.getElementById('resultado-nombre').textContent = estado.identificacion.nombre;
  document.getElementById('ring-num').textContent = total;

  // Nivel
  const nivel = obtenerNivel(pct);
  const nivelEl = document.getElementById('nivel-badge');
  nivelEl.className = `nivel-badge ${nivel.clase}`;
  nivelEl.textContent = nivel.etiqueta;
  document.getElementById('nivel-desc').textContent = nivel.desc;

  show('pantalla-resultados');

  // Animar Progress Ring
  setTimeout(() => {
    const offset = CIRCUNFERENCIA - (pct / 100) * CIRCUNFERENCIA;
    document.getElementById('pr-fill').style.strokeDashoffset = offset;
  }, 120);

  // Radar chart
  setTimeout(() => dibujarRadar(), 450);

  // Bloques detalle
  const detalleEl = document.getElementById('bloques-detalle');
  detalleEl.innerHTML = '';
  FORM_DATA.bloques.forEach((bloque, i) => {
    const pts  = estado.puntajesBloques[i] || 0;
    const bPct = (pts / MAXIMO_BLOQUE) * 100;
    const row  = document.createElement('div');
    row.className = 'bloque-row';
    row.innerHTML = `
      <div class="bloque-row-top">
        <span class="bloque-row-nombre">${bloque.titulo}</span>
        <span class="bloque-row-pts">${pts} / ${MAXIMO_BLOQUE}</span>
      </div>
      <div class="bloque-track">
        <div class="bloque-bar" data-w="${bPct}%" style="width:0%"></div>
      </div>
      <p class="bloque-interp">${INTERP_BLOQUES[i]}</p>
    `;
    detalleEl.appendChild(row);
  });

  setTimeout(() => {
    document.querySelectorAll('.bloque-bar').forEach(b => { b.style.width = b.dataset.w; });
  }, 350);

  // Interpretación
  const iMin = estado.puntajesBloques.indexOf(Math.min(...estado.puntajesBloques));
  const iMax = estado.puntajesBloques.indexOf(Math.max(...estado.puntajesBloques));
  let intro = '';
  if (pct < 30) intro = `Con ${total} puntos, tu negocio muestra dependencia crítica de tu presencia. La operación requiere estructurarse desde cero.`;
  else if (pct < 50) intro = `Con ${total} puntos, existen bases, pero la autonomía operativa aún es limitada. Hay áreas importantes que reforzar.`;
  else if (pct < 65) intro = `Con ${total} puntos, el negocio está en una etapa de desarrollo intermedio. Algunos sistemas funcionan, otros requieren atención.`;
  else if (pct < 80) intro = `Con ${total} puntos, tu negocio muestra un nivel avanzado de autonomía. El sistema funciona bien en la mayoría de las áreas.`;
  else intro = `Con ${total} puntos, tu negocio opera con alta autonomía. Estás en una posición sólida para escalar sin depender de ti.`;

  document.getElementById('interpretacion-box').innerHTML = `
    <h4>Diagnóstico</h4>
    <p>${intro} Tu área más fuerte es <strong style="color:#FF4800">${FORM_DATA.bloques[iMax].titulo}</strong> (${estado.puntajesBloques[iMax]}/30 pts). El área con mayor oportunidad de mejora es <strong style="color:#FF4800">${FORM_DATA.bloques[iMin].titulo}</strong> (${estado.puntajesBloques[iMin]}/30 pts).</p>
  `;
}

function obtenerNivel(pct) {
  if (pct < 30) return { clase:'nivel-critico',  etiqueta:'Crítico — Alta dependencia',      desc:'El negocio no puede funcionar sin tu presencia constante.' };
  if (pct < 50) return { clase:'nivel-bajo',     etiqueta:'Bajo — Estructura inicial',        desc:'Existen algunas bases, pero la operación aún depende de ti en gran medida.' };
  if (pct < 65) return { clase:'nivel-medio',    etiqueta:'Moderado — En desarrollo',         desc:'El negocio avanza hacia la autonomía, con áreas que aún necesitan atención.' };
  if (pct < 80) return { clase:'nivel-avanzado', etiqueta:'Avanzado — Sistema establecido',   desc:'La operación funciona de forma bastante autónoma con sistemas bien definidos.' };
  return           { clase:'nivel-optimo',       etiqueta:'Óptimo — Negocio autónomo',        desc:'Tu negocio opera con alta independencia y está listo para escalar.' };
}

// ============================================================
// RADAR CHART — Canvas puro
// ============================================================
function dibujarRadar() {
  const canvas = document.getElementById('radar-chart');
  if (!canvas) return;

  // Dimensiones responsive
  const maxW = canvas.parentElement.clientWidth || 320;
  const size = Math.min(maxW, 340);
  canvas.width  = size;
  canvas.height = size;

  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, size, size);

  const cx = size / 2;
  const cy = size / 2;
  const R  = size * 0.36;
  const n  = FORM_DATA.bloques.length; // 8

  const labels = [
    'Dependencia', 'Delegación', 'Procesos', 'Roles',
    'Comunicación', 'Cultura', 'Escalabilidad', 'Control'
  ];
  const valores = FORM_DATA.bloques.map((_, i) => ((estado.puntajesBloques[i] || 0) / MAXIMO_BLOQUE));

  const angle = i => (Math.PI * 2 * i / n) - Math.PI / 2;

  // Fondo grilla
  [0.2, 0.4, 0.6, 0.8, 1.0].forEach(level => {
    ctx.beginPath();
    for (let i = 0; i < n; i++) {
      const a = angle(i);
      const x = cx + Math.cos(a) * R * level;
      const y = cy + Math.sin(a) * R * level;
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.strokeStyle = '#D9E2F1';
    ctx.lineWidth = 1;
    ctx.stroke();
  });

  // Ejes
  for (let i = 0; i < n; i++) {
    const a = angle(i);
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + Math.cos(a) * R, cy + Math.sin(a) * R);
    ctx.strokeStyle = '#D9E2F1';
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  // Área de datos
  ctx.beginPath();
  for (let i = 0; i < n; i++) {
    const a = angle(i);
    const v = valores[i];
    const x = cx + Math.cos(a) * R * v;
    const y = cy + Math.sin(a) * R * v;
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fillStyle   = 'rgba(0,73,255,0.12)';
  ctx.strokeStyle = '#0049FF';
  ctx.lineWidth   = 2;
  ctx.fill();
  ctx.stroke();

  // Puntos
  for (let i = 0; i < n; i++) {
    const a = angle(i);
    const v = valores[i];
    ctx.beginPath();
    ctx.arc(
      cx + Math.cos(a) * R * v,
      cy + Math.sin(a) * R * v,
      4, 0, Math.PI * 2
    );
    ctx.fillStyle = '#FF4800';
    ctx.fill();
  }

  // Etiquetas
  const fs = Math.max(10, Math.round(size * 0.036));
  ctx.font = `700 ${fs}px -apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif`;
  ctx.textAlign    = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle    = '#111827';

  for (let i = 0; i < n; i++) {
    const a   = angle(i);
    const pad = R * 0.26;
    const lx  = cx + Math.cos(a) * (R + pad);
    const ly  = cy + Math.sin(a) * (R + pad);
    ctx.fillText(labels[i], lx, ly);
  }
}

// ============================================================
// REINICIAR
// ============================================================
document.getElementById('btn-reiniciar').addEventListener('click', () => {
  estado = { bloqueIdx:0, preguntaIdx:0, respuestas:{}, puntajesBloques:[], identificacion:{correo:'',nombre:'',celular:''} };
  ['campo-correo','campo-nombre','campo-celular'].forEach(id => {
    const el = document.getElementById(id);
    el.value = '';
    el.classList.remove('input-error');
  });
  ['error-correo','error-nombre','error-celular'].forEach(id => document.getElementById(id).textContent = '');
  // Reset progress ring
 // document.getElementById('pr-fill').style.strokeDashoffset = CIRCUNFERENCIA;
  show('pantalla-bienvenida');
});
// ============================================================
// CONTINUAR SIGUIENTE BLOQUE
// ============================================================

document.getElementById("btn-continuar-bloque").addEventListener("click", () => {

    estado.bloqueIdx++;
    estado.preguntaIdx = 0;

    renderPregunta();

    show("pantalla-preguntas");

});
