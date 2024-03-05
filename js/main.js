function calcularPagosEnCuotas() {
    let montoSugerido;
    let tasaInteres = 1.15; 
    let cantidadCuotas;
    let pagoMensual = 0;
    
    while(true){
        montoSugerido = parseFloat(prompt("Ingrese el monto sugerido:"));
        if( montoSugerido >0){
            break;
        } else{
            alert("El monto a solicitar debe ser mayor a 0. Por favor, ingrese nuevamente el monto.");
        }
    }

    while (true){
        cantidadCuotas = parseInt(prompt("Ingrese la cantidad de cuotas (3, 6 o 12):"));
    if (cantidadCuotas == 3 || cantidadCuotas == 6 || cantidadCuotas == 12) {
        break;
    } else {
        alert("La cantidad de cuotas ingresada no es válida. Por favor, ingrese 3, 6 o 12.");
    }
}

    pagoMensual = (montoSugerido * tasaInteres) / ( cantidadCuotas);

    console.log("Monto sugerido: $" + montoSugerido.toFixed(2) + "\n" +
        "Cantidad de cuotas: " + cantidadCuotas + "\n" +
        "Monto de cada cuota: $" + pagoMensual.toFixed(2));
}

calcularPagosEnCuotas();
