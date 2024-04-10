/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { Linter } from "eslint";

// Lista de excusas de diferentes variables
let who = [
  "El elfo de la casa",
  "El hada del jardín",
  "El duende de la cocina",
  "El gnomo del bosque",
  "El dragón del garaje"
];
let action = [
  "confundió",
  "escondió",
  "transformó",
  "teletransportó",
  "esfumó"
];
let what = [
  "mis llaves",
  "mi libro de hechizos",
  "mi varita mágica",
  "mi poción de invisibilidad",
  "mi mapa del tesoro"
];
let when = [
  "durante un eclipse lunar",
  "mientras danzaba bajo la luna llena",
  "en medio de un conjuro fallido",
  "mientras estaba en una aventura épica",
  "en pleno viaje a otro mundo"
];

// Función para generar una excusa aleatoria cuando le das click a un botón que hayas creado en el HTML
window.onload = function ExcuseGenerator() {
  // Coge el Array entero de las listas de las variables anteriores y coge un elemento aleatorio de cada Array
  const randomWho = who[Math.floor(Math.random() * who.length)];
  const randomAction = action[Math.floor(Math.random() * action.length)];
  const randomWhat = what[Math.floor(Math.random() * what.length)];
  const randomWhen = when[Math.floor(Math.random() * when.length)];
  // La variable excuse muestra una excusa aleatoria concatenando Arrays aleatorios
  const excuse =
    "¡¡¡" +
    randomWho +
    " " +
    randomAction +
    " " +
    randomWhat +
    " " +
    randomWhen +
    "!!!";
  // Añade el generador de excusas al id='excuse' del HTML.
  document.getElementById("excuse").innerHTML = excuse;
};
