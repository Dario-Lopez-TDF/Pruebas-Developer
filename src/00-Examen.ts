//algoritmo secreto

let elem, arr, nro, ocu: number;
elem = Number(prompt("ingrese tamaño: ")); //elem ya esta tipeado antes y el tipo number es sin mayusculas
arr = new Array(elem);
cargar(arr, elem);
nro = Number(prompt("ingrese numero: ")); //nro ya esta tipeado antes y el tipo number es sin mayusculas
ocu = metodo(arr, elem, nro);
console.log("el Numero: " + nro + " ... " + ocu);
mostrar(arr, elem);

function cargar(v, l): void {
  //le flata el tipado "number"
  for (
    let i: number = 0;
    i < l;
    i++ // i es tipo number no string
  )
    v[i] = Math.floor(Math.random() * 100);
}

function mostrar(v, l): void {
  let c = "";
  for (let i: number = 0; i < l; i++) c += v[i] + "";
  //console.log(c);
}

function metodo(v, l, n): void {
  //es una funcion de tipo namber pero le falta el return
  let oc: number;
  for (let i = 0; i < l; i++) if ((v[i] = n)) oc++;
}
