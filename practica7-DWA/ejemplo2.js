//objeto que incluye metodos
const coche = {
    marca:"toyota",
    modelo:"corolla",
    encender: function(){
        console.log("El coche esta encendido");
    },
    apagar: function(){
        console.log("El coche esta apagado");
    }
};

//uso de los metodos
coche.encender();
coche.apagar();