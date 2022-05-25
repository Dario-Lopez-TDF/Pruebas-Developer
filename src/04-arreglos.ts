// clase viernes 20 de Mayo
// Arrays
/*

1
let arregloA: number[] = new Array(6);
let arregloB: number[] = new Array(6);
// El array (arregloSuma) debe contener la suma de los datos de arregloA y arregloB
let arregloSuma: number[] = new Array(6);
let i: number; //variable de iteracíon

//bucle para el llenado del arreglo A
for (let i: number = 0; i < 6; i++) {
  arregloA[i] = Number(prompt("Ingrese números en arreglo A"));
}
//bucle para el llenado del arreglo B
for (let i: number = 0; i < 6; i++) {
  arregloB[i] = Number(prompt("Ingrese números en arreglo B"));
}
//bucle para la suma y llenado del arregloSuma
for (let i: number = 0; i < 6; i++) {
  arregloSuma[i] = arregloA[i] + arregloB[i];
  //se muestra la suma de A1 + B1 etc.... por consola.
  console.log(arregloSuma[i], "es la suma de:", arregloA[i], "+", arregloB[i]);





//Numeros al azar "Math.ramdom / Math.floor" (falta el programa)
//Ejercicio – Completar Arreglo

//• Llenar un array de 10 posiciones con números
//aleatorios entre 0 y 99

//• Para obtener números aleatorios crear una función
//Azar, que se base en las funciones disponibles
// en el paquete Math: -Math.random() devuelve un nro al azar entre 0 y 1.
*/
function azar(): number {
  return Math.floor(Math.random() * 100); //Numeros al azar "Math.ramdom / Math.floor"
}
let arregloAzar: number = new Array(10); //arreglo de tamaño N determinado

for (let i: number = 0; i < 10; i++) {
  //bucle para el llenado del arreglo de manera aleatorea
  arregloAzar[i] = azar();
}

for (let i: number = 0; i < 10; i++) {
  //bucle para mostar los 10 numeros al azar
  console.log(arregloAzar[i]);
}

/////////////////////////////
/*
// suma de numeros del arreglo.
Estructuras de Datos – Arreglos
Ejercicio – Suma Elementos Arreglo

•Construya un algoritmo que sume todos los elementos de un arreglo de tamaño N
• La dimensión del arreglo es ingresada por el usuario
• Los elementos (números) del arreglo son ingresados por el usuario

let long: number = Number(prompt("longitud del arreglo")); //longitud del arreglo ingresado por el user
let arreglo_suma: number[] = new Array(long);

for (let i: number = 0; i < long; i++) {
  //bucle para ingresar datos (números) al arreglo
  arreglo_suma[i] = Number(prompt("ingrese sus numeros"));
}

let suma: number = 0;
for (let i: number = 0; i < long; i++) {
  //bucle para sumar cada dato del arreglo
  suma = arreglo_suma[i] + suma;
}
console.log(suma);
//End............ (abajo el mismo ejercio con modulacion / funciones)
/*
////////// version con modulacion (funciones)//////////////////////////////
function sumar(): number {
  let suma: number = 0;
  for (let i: number = 0; i < long; i++) {
    //bucle para sumar cada dato del arreglo
    suma = arreglo_suma[i] + suma;
  }
  return suma;
}

// suma de numeros del arreglo.. (falta el programa)
let long: number = Number(prompt("longitud del arreglo")); //longitud del arreglo ingresado por el user
let arreglo_suma: number[] = new Array(long);

for (let i: number = 0; i < long; i++) {
  //bucle para ingresar datos (números) al arreglo
  arreglo_suma[i] = Number(prompt("ingrese sus numeros"));
}
console.log(sumar());
// End............


///////////////////////////////////////////
/* Estructuras de Datos – Arreglos

Ejercicio – Nombres Deseados

•Construya un algoritmo que tenga un arreglo
de dimensión deseada por el usuario y llénelo
con los nombres que el usuario desee

•Crear un arreglo de las posiciones que desee
el usuario y llenarlo con nombres de personas

// cantidad y nombres deseados por el user
let long: number = Number(prompt("longitud del arreglo")); //longitud del arreglo ingresado por el user
let arreglo_nombre: string[] = new Array(long);

for (let i: number = 0; i < long; i++) {
  //bucle para ingresar datos al arreglo
  arreglo_nombre[i] = prompt("ingrese nombre: "); //nopmbres ingresados por el user
}
for (let i: number = 0; i < long; i++) {
  //bucle para mostar cada dato del arreglo
  console.log(arreglo_nombre[i]);
}
//End................

/*

////////////////////////////////////////

/* Estructuras de Datos – Arreglos

Ejercicio – Números Deseados
• Construya un algoritmo que tenga un arreglo de
dimensión 5 y llénelo con los números que el usuario desee
• Muestre los números del arreglo al usuario

// muestra numeros ingresados por el usuario
function ingresar_numeros():number {
  for (let i: number = 0; i <= 4; i++) {
    numeros[i] = Number(prompt("ingrese numeros:"));
  }
}
function mostrar_numeros():number {
  for (let i: number = 0; i <= 4; i++) {
    console.log(numeros[i]);
  }
}

let numeros: number[] = new Array(5);

ingresar_numeros();
mostrar_numeros();
//End.....................

////////////////////////////////

// ejercico de arreglo con meses.....
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
//End.....................

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
//End.....................
*/
