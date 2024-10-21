let productos = [
    {nombre: "Laptop",  precio: 1000, categoria: "Electronica"},
    {nombre: "Bicicleta",  precio: 200, categoria: "Deportes"},
    {nombre: "Telefono",  precio: 2000, categoria: "Electronica"},
    {nombre: "Zapatos",  precio: 100, categoria: "Calzado"},

];

//funcio que filtra productos ppor categoria y reorganiza los precios en un arreglo aparte

function filtrarProductosCategoria(categoria, ...listaProductos){
    let filtrados = listaProductos.filter(producto  => producto.categoria === categoria);
    let precios = filtrados.map(producto => producto.precio);

    return {
        categoria,
        productosFiltrados: filtrados,
        precios: [...precios]
    };

};

//Llamar a la funcion con productos filtrados por "Electronica"
let resultado = filtrarProductosCategoria("Deportes", ...productos);
console.log(resultado);