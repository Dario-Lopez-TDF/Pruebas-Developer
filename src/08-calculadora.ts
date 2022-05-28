//calculadora con funciones
// parametros y funciones

let num1: number = Number(prompt("ingrese Nº1"));
let num2: number = Number(prompt("ingrese Nº2"));
let operacion: string = prompt(" + - * / ");

function sumar(n1: number, n2: number): number {
  return n1 + n2;
}

function restar(n1: number, n2: number): number {
  return n1 - n2;
}
function multiplicar(n1: number, n2: number): number {
  return n1 * n2;
}

function dividir(n1: number, n2: number): number {
  return n1 / n2;
}
/// funcion calculadora
function calculador(operacion: string, n1: number, n2: number): number {
  if (operacion === "+") {
    return sumar(n1, n2);
  }
  if (operacion === "-") {
    return restar(n1, n2);
  }
  if (operacion === "*") {
    return multiplicar(n1, n2);
  }
  if (operacion === "/") {
    return dividir(n1, n2);
  }
  return -1;
}

console.log("suma; " + sumar(num1, num2));
console.log("resta; " + restar(num1, num2));
console.log("multiplicación; " + multiplicar(num1, num2));
console.log("división; " + dividir(num1, num2));
