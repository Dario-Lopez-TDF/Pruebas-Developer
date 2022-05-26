//VERSION SIN BUSCADOR DE ALUMNOS
// defino la cantidad de alumnos de la clase
let cantAlumnos: number = Number(prompt("Cantidad de Alumnos"));
// defino los Arrays con longitud  cantidad de alumnos "cantAlumnos"
let alumnos: string[] = new Array(cantAlumnos);
let nota1: number[] = new Array(cantAlumnos);
let nota2: number[] = new Array(cantAlumnos);
let nota3: number[] = new Array(cantAlumnos);
let sumaDeNotas: number[] = new Array(cantAlumnos);
let i: number;
let promedio: number[]= new Array(cantAlumnos);
//bucle para la carga de nombres de los alumnos y sus notas
for (let i: number = 0; i < cantAlumnos; i++) {
  alumnos[i] = prompt("Nombre del alumno");
  nota1[i] = Number(prompt("nota primer trimestre"));
  nota2[i] = Number(prompt("nota segundo trimestre"));
  nota3[i] = Number(prompt("nota tercer trimestre"));

for (let i: number = 0; i < cantAlumnos; i++) {
  sumaDeNotas[i] = nota1[i] + nota2[i] + nota3[i];
  promedio[i] = sumaDeNotas[i] / 3;
  //console.log("La nota promedio de: ", alumnos, "es: ", promedio);
}
console.log("La nota promedio de: ", alumnos[i], "es: ", promedio[i]);



/*
// variables para buscar el alumno y calcular el promedio
let buscarAlumno:string=prompt("BUSCAR ALUMNO: ");
let existeAlumno:boolean = false;
let promedio:number=0;
let i=0;
// bucle para buscar el alumno y calcular el promedio
while (i<cantAlumnos && !existeAlumno){
  if(alumnos[i]==buscarAlumno){
    existeAlumno=true;
    promedio=nota1[i]+nota2[i]+nota3[i];
    promedio/=3;
  }
  i++;
}

//se debe verificar la existencia del alumno con un if y mostrarlo por consola
if(existeAlumno){
  console.log("La nota promedio de: ",buscarAlumno, "es: ",promedio);
} else{
  console.log("No se encontró a: ",buscarAlumno);
}
*/