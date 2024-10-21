let estudiantes = [
    {nombre: "Gilber", nota: 8},
    {nombre: "Andres", nota: 6},
    {nombre: "Inmer", nota: 9}
    
]

//crear una copia usando spread, para modifica la nota de Inmer

let estudiantesModificados = estudiantes.map(estudiante => 
    estudiante.nombre === "Inmer"
    ? {...estudiante, nota: 5}
    : {...estudiante}
);
console.log(estudiantes);
console.log(estudiantesModificados)