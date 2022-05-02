/* Tablas de Multiplicación

• Diseñar un algoritmo que muestre por pantalla la tabla de
multiplicación del número ingresado por el usuario
• Para definir hasta qué número desea que muestre la tabla de
multiplicación, el usuario también deberá ingresar dicho valor
*/
let numTabla: number = Number(prompt("ingresar numero de tabla"));
let numFinTabla: number = Number(prompt("ingresar hasta que numero"));

let resultado: number = 0;
for (let contar: number = 1; contar <= numFinTabla; contar++) {
  resultado = numTabla * contar;
  console.log(numTabla + "x" + contar + "=" + resultado);
}
