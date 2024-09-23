//obeto que contiene propiedades con otros objetos
const estudiante = {
    nombre: "Inmer",
    edad: 20,
    direccion:
    {
        calle: "chaparral",
        ciudad: "ciudad barrios"
    },
    materia: ["matemaricas", "programacion", "fisica"]
};

//acceso a las propiedades 
console.log(estudiante.direccion.ciudad);
console.log(estudiante.materia[1]); 