//1. SPREAD OPERATOR (ABRE O EXPANDE EL CONTENIDO DE OBJETOS O ARRAYS) EJEMPLO: (...)
//En arrays
//JS
const numeros = [1, 2, 3];
const nuevosNumeros = numeros.concat([4, 5, 6]);

//React
//const numeros = [1, 2, 3];
const numerosSpread = [...numeros, 4, 5, 6];

//En objetos
//JS
const persona = { nombre: "Diego", edad: 35 };
const personaActualizada = Object.assign({}, persona, { ciudad: "Rosario" });

//React
//const persona = { nombre: 'Diego', edad: 35 };
const personaSpread = { ...persona, ciudad: "Rosario" };

//2. DESTRUCTURING (EXTRAE VALORES DE OBJETOS O ARRAYS) EJEMPLO: (const {propiedad} = objeto) O (const [valor] = array)
//En arrays
//JS
const colores = ["rojo", "verde", "azul"];
const primerColor = colores[0];
const segundoColor = colores[1];

//React
//const colores = ['rojo', 'verde', 'azul'];
const [primero, segundo] = colores;

//En objetos
//JS
const auto = { marca: "Toyota", modelo: "Corolla", año: 2020 };
const marcaAuto = auto.marca;
const modeloAuto = auto.modelo;
const añoAuto = auto.año;

//React
//const auto = { marca: 'Toyota', modelo: 'Corolla', año: 2020 };
const { marca, modelo, año } = auto;

//3. OPERADOR TERNARIO (EJEMPLO: condicion ? valorSiVerdadero : valorSiFalso)
//JS
let mesaje;
if (edad >= 18) {
  mesaje = "Podes ingresar a la fiesta";
} else {
  mesaje = "No podes ingresar a la fiesta";
}

//React
const mensaje =
  edad >= 18
    ? "Podes ingresar a la fiesta"
    : "No podes un ingresar a la fiesta"; //el ? es el "if" y los dos puntos ":" es el "else"

//4. FUNCIONES FLECHA O ARROW FUNCTION (EJEMPLO: const funcion = (parametros) => {cuerpo de la funcion})
//JS
function sumar(a, b) {
  return a + b;
}
//React
const sumarArrow = (a, b) => a + b; //si es una sola linea no hace falta poner llaves ni return
//segundo ejemplo pero menos simple
//const sumarArrow = (a, b) => {
//  return a + b;
//}
