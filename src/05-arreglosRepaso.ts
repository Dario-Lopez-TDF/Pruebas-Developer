/*
Clase del martes 24/05/2022  
Repaso de arreglos y modularización
*/

function cargaDeArrays(
  arregloParametro1: number[],
  arregloParametro2: number[]
): void {
  for (let i: number = 0; i < arregloParametro1.length; i++) {
    arregloParametro1[i] = Number(prompt("Ingrese números en arregloA"));
    arregloParametro2[i] = Number(prompt("Ingrese números en arregloB"));
  }
}

function sumaDeArrays(
  arregloA: number[],
  arregloB: number[],
  arregloSuma: number[]
): void {
  for (let i: number = 0; i < arregloA.length; i++) {
    arregloSuma[i] = arregloA[i] + arregloB[i];
  }
}

function mostrarSuma(arrayParametro: number[]): void {
  for (let i: number = 0; i < arrayParametro.length; i++) {
    console.log(arrayParametro[i]);
  }
}

let arregloA: number[] = new Array(6);
let arregloB: number[] = new Array(6);
let arregloSuma: number[] = new Array(6);

cargaDeArrays(arregloA, arregloB);
sumaDeArrays(arregloA, arregloB, arregloSuma);
mostrarSuma(arregloSuma);
