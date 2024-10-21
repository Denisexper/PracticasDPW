//Funcion que co.bina miltiples listas y elimina el duplicados

function mezclasListas(...listas){

    //usamos espread para aplanar las listas y set para eliminar los diplicados
    let combinadasSinDuplicados = [...new Set([].concat(...listas))]
    return combinadasSinDuplicados;
}

let lista1 = [1,2,3];
let lista2 = [3,4,5];
let lista3 = [5,6,7];

//pasamos varias matrices usanod rest y combinamos con spread
console.log(mezclasListas(lista1,lista2,lista3));
