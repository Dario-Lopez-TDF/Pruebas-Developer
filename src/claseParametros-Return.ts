// Ejercicios de parametros y return

// Ejercicio 1
// Programa con funcion que reciba por parametro su nombre y apellido,
// y lo imprima por consola

function data(name: string, lastname: string, id: string): void {
  let name: string;
  let lastname: string;
  let id: string;
  id = name + lastname;
  return id;
}

let nombre: string = prompt("Su Nombre");
let apellido: string = prompt("Su Apellido");
let nombreCompleto: string = data(name, lastname, id);

console.log("Su nombre completo es:", nombreCompleto);
