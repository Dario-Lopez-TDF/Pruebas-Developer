//crear una funcion que reciba un valor numerico y devuelva true
//si es par o false si es impar (con retorno)

function parOimpar(numero1: number): boolean {
  if (numero1 % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

let numero: number = Number(prompt("su numero"));
let respuesta: boolean = parOimpar(numero);

if (respuesta === true) {
  console.log(numero, " es PAR");
} else {
  console.log(numero, " es IMPAR");
}
