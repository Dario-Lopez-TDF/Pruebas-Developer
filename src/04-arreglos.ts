// clase viernes 20 de Mayo
// Arrays

//Numeros al azar "Math.ramdom / Math.floor" (falta el programa)

// suma de numeros del arreglo.. (falta el programa)

// cantidad y nombres deseados por el user
let long: number = Number(prompt("longitud del arreglo"));
let arreglo_nombre: string[] = new Array(long);

for (let i: number = 0; i < long; i++) {
  arreglo_nombre[i] = prompt("ingrese nombre: ");
}
for (let i: number = 0; i < long; i++) {
  console.log(arreglo_nombre[i]);
}

/*
// muestra numeros ingresados por el usuario
function ingresar_numeros() {
  for (let i: number = 0; i <= 4; i++) {
    numeros[i] = Number(prompt("ingrese numeros:"));
  }
}
function mostrar_numeros() {
  for (let i: number = 0; i <= 4; i++) {
    console.log(numeros[i]);
  }
}

let numeros: number[] = new Array(5);

ingresar_numeros();
mostrar_numeros();

/*
let arregloMeses: string[] = new Array(12);

arregloMeses[0] = "Enero";
arregloMeses[1] = "Febrero";
arregloMeses[2] = "Marzo";
arregloMeses[3] = "Abril";
arregloMeses[4] = "Mayo";
arregloMeses[5] = "Junio";
arregloMeses[6] = "Julio";
arregloMeses[7] = "Agosto";
arregloMeses[8] = "Septiembre";
arregloMeses[9] = "Octubre";
arregloMeses[10] = "Noviembre";
arregloMeses[11] = "Diciembre";

for (let i: number = 0; i < 12; i++) {
  console.log(arregloMeses[i]);
}


let num: number[] = new Array(7);

num[0] = 20;
num[1] = 14;
num[2] = 8;
num[3] = 0;
num[4] = 5;
num[5] = 19;
num[6] = 24;

for (let i: number = 0; i < 7; i++) {
  console.log(num[i]);
}
*/
