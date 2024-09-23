var factura = {
    numero: 600,
    cliente: 'transporte Guevara',
    vencimiento: {
        1:{
            fecha: new Date(2023,10.20),
            importe: 216
        },
        2:{
            fecha: new Date(2023,10,30),
            importe: 216
        },
        3:{
            fecha: new Date(2023,10,10),
            importe: 118
        }
    }

}

var numeroFactura = factura.numero;
var importeTercerVencimiento = factura.vencimiento[3].importe;
console.log('el importe del tercer vencimiento aciende a: '+ importeTercerVencimiento);