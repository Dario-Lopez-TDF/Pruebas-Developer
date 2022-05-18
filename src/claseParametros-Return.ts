// Ejercicios de parametros y return

// Ejercicio 1
// Programa con funcion que reciba por parametro su nombre y apellido,
// y lo imprima por consola

function data(name: string, lastname: string, id: string): string {
  id = name + " " + lastname;
  return id;
}
let id: string;
let nombre: string = prompt("Su Nombre");
let apellido: string = prompt("Su Apellido");
// la funcion siempre llama a las variable del entorno "declarable"
let nombreCompleto: string = data(nombre, apellido, id); //id es el retorno

console.log("Su nombre completo es:", nombreCompleto);
