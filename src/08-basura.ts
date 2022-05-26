




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



/* VERSION SIN BUSCADOR DE ALUMNOS

for (let i: number = 0; i < cantAlumnos; i++) {
  sumaDeNotas[i] = nota1[i] + nota2[i] + nota3[i];
  promedio = sumaDeNotas[i] / 3;
  //console.log("La nota promedio de: ", alumnos, "es: ", promedio);
}
console.log("La nota promedio de: ", alumnos, "es: ", promedio);
