// calcular el promedio de edad de los chicos

//let edades: number = Number(prompt("ingrese edad del niño/a"));

let dim: number = 10;
let edadChicos: number[] = new Array(dim);
//let edadChicos: number[] = new Array(3, 5, 7, 6, 4, 5, 7, 3, 5, 6);

function getPromedio(arreglo_edad: number[]): number {
  let suma = 0;
  let promedio: number;
  for (let i: number = 0; i < edadChicos.length; i++) {
    suma = suma + edadChicos[i];
  }
  promedio = suma / edadChicos.length;
  return promedio;
}

function aleatorio(min, max): number {
  return Math.floor(Math.random() * max - min) + min;
  // Math.floor(Math.ramdom()* ((max-min)+min))
}

function cargarDatosAleatorios() {
  for (let i: number = 0; i < edadChicos.length; i++) {
    edadChicos[i] = aleatorio(3, 7);
  }
}

cargarDatosAleatorios();
let promedioEdades: number = getPromedio();

console.log(promedioEdades);

//console.log(getPromedio());
//console.log("el promedio de edad es:", promedio);
//console.log("la suma de edades es: ", suma);
// solo mostrar una posicion del arreglo
//console.log("ultimo elemento", edadChicos[edadChicos.length - 1]);
//console.log(edadChicos[i]);
