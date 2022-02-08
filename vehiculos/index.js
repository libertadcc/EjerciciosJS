vehiculo = prompt("Vehiculo ");
kms_recorridos = parseFloat(prompt("Kms. Recorridos "));

if( vehiculo == "coche" ) {
    precio_kilometro = 0.10;
}
if( vehiculo == "moto" ) {
    precio_kilometro = 0.20;
}
if( vehiculo == "bus" ) {
    precio_kilometro = 0.50;
}

var totalkms = 0;
var precioTotal = 0;

totalkms = kms_recorridos * precio_kilometro;

if( kms_recorridos <=100 ) {
    precioTotal = totalkms + 1;
} else {
    precioTotal = totalkms + 2;
}

console.log("Vehiculo: " + vehiculo);
console.log(`Kms * Precio/km = ${kms_recorridos}*${precio_kilometro} = ${totalkms}`);
console.log(`El precio total es de ${precioTotal}`);
