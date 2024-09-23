var factura = {
    numero: 201,
    cliente: "Libreria milagrosa",
    divisa:"dolares",
    total: 200,
    IVA: 10,
}

//var factura = {numeor: 201, cliente:"Libreria milagrosa", total:200, IVA:10}
var numeroFactura = factura.numero;
var monedaFactura = factura.divisa;
var totalFactura = factura.total;
console.log('La factura' + numeroFactura + 'es de ' + totalFactura + ' ' + monedaFactura);