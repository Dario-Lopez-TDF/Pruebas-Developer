// Clase Martes 10/05/22 practica con Brian
//  MODULARIZACION - armado de funciones (repetidas o en modulos)

let num1: number = Number(prompt("ingresar 1º numero"));
let num2: number = Number(prompt("ingresar 2º numero"));
let opcion: number = Number(
  prompt("ingresar 1 para sumar, 2 para restar, otra tecla corta")
);
let resultado: number = 0;

function dibulinea(){
  let linea: string = "-";
  for (let i > 0; i <= 5; i++) {
    linea = linea + "-";
    console.log(linea);
  }
}


if (opcion === 1) {
  resultado = num1 + num2;
  dibulinea();
  console.log("el resultado de la operación es:", resultado);
  dibulinea();
} else if (opcion === 2) {
  resultado = num1 - num2;
  dibulinea();
  console.log("el resultado de la operación es:", resultado);
  dibulinea();
} else {
  console.log("cuenta no valida");
}

// let linea: string = "-";
/*Tablas de Multiplicación

• Diseñar un algoritmo que muestre por pantalla la tabla de
multiplicación del número ingresado por el usuario
• Para definir hasta qué número desea que muestre la tabla de
multiplicación, el usuario también deberá ingresar dicho valor


let numTabla: number = Number(prompt("ingresar numero de tabla"));
let numFinTabla: number = Number(prompt("ingresar hasta que numero"));

let resultado: number = 0;
for (let contar: number = 1; contar <= numFinTabla; contar++) {
  resultado = numTabla * contar;
  console.log(numTabla + "x" + contar + "=" + resultado);
}
*/
