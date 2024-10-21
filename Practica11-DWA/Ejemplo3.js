//funcion que recibe un usuario y separa el resto de la imformacion 

function procesarUsuario(nombre, edad, ...OtrosDatos){
    let usuarioFormateado = {
        nombre,
        edad,
        infoAdicional: {...OtrosDatos}
    };
    return usuarioFormateado;
}

//simulamos datos recibidos de una API
let usuario = procesarUsuario("Nehemias", 20, "Ingeniero", "Ciudad Barrios", "Marzo 2024")

console.log(usuario);