//iterar propiedades de un objeto
const producto = {
    nombre:"laptop",
    precio: 800,
    disponible: false
};

//uso del bucle para iterar sobre las propiedades del objetos
for (let propiedades in producto){
    console.log(`${producto[propiedades]}`);
}
