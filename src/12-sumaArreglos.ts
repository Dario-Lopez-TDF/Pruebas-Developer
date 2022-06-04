let dim: number = Number(prompt("ingrese dimension de los arreglos"));
let array1: number[] = new Array(dim);
let array2: number[] = new Array(dim);
let array3: number[] = new Array(dim);

function aleatorio(min, max): number {
  return Math.floor(Math.random() * max - min) + min;
  // Math.floor(Math.ramdom()* ((max-min)+min))
}

function cargarDatosAleatorios(array1: number[]) {
  for (let i: number = 0; i < array1.length; i++) {
    array1[i] = aleatorio(0, 100);
  }
}

function sumaArray1y2(a1: number[], a2: number[]) {
  for (let i: number = 0; i < dim; i++) {
    array3[i] = a1[i] + a2[i];
  }
}

cargarDatosAleatorios(array1);
cargarDatosAleatorios(array2);
sumaArray1y2(array1, array2);

let suma2arreglos = sumaArray1y2(array1, array2);
console.log(suma2arreglos);

console.log("A1", array1);
console.log("A2", array2);
console.log("suma", array3);
