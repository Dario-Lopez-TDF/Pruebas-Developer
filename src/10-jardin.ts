/*
EL jardin de infantes necesita un programa para poder asignar cursos a las aulas
* se cuentan con 3 aulas: azul, verde y amarilla; cada una con distinta capacidad:
  azul = 40 bancos
  verde = 35 bancos
  amarilla = 30 bancos
* el programa deberá determinar el aula que minimice la cantidad de bancos vacios.
* la salida del algoritmo es el color que identifica a cada aula asignada.
* ejemplo; si es 34 entonces el aula será verde. el aula amarilla no puede porque
  excede la cantidad y la azul es decartada por quedan muchos vancos vacios "6 vs 1"
*/

function calcularSalaDeljardin(): string {
  let resultado: number = 0;
  let salaColor: string;
  if (salaAmarilla - cantAlumnos >= resultado) {
    salaColor = "Los alumnos ingresan a la sala Amarilla";
  } else if (salaVerde - cantAlumnos >= resultado) {
    salaColor = "Los alumnos ingresan a la sala verde";
  } else if (salaAzul - cantAlumnos >= resultado) {
    salaColor = "Los alumnos ingresan a la sala Azul";
  }
  return salaColor;
}

// defino la cantidad de alumnos del jardin
let cantAlumnos: number = Number(prompt("Cantidad de niños"));

let salaAzul: number = 40;
let salaVerde: number = 35;
let salaAmarilla: number = 30;
let salaResultado: string = calcularSalaDeljardin();

console.log(salaResultado);

//console.log("La cantidad de alumnos supera la capacidad de las aulas del jardin");
