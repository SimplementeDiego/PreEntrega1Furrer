let historialResultadosCalculadora = [];

let historialResultadosDescuento = [];

const historial = document.getElementById("historial");

const historialDescuento = document.getElementById("historialDescuento");

function evaluar(fn) {
    return new Function("return " + fn)();
}

function calculadora() {
    let finalizar = false;

    while (finalizar == false) {
        let res = prompt(`
        Ingrese una expresion matematica. O ingrese "s" para salir.
        Utilice:
            + . para Sumar
            * . para Multiplicar
            / . para Dividir
            - . para Restar
        Ejemplo: 2*2+2/2-2
        `);

        if (res != "" && res != null) {
            res = res.trim();
            res = res.toLowerCase();
        }

        if (
            res == "finalizar" ||
            res == null ||
            res == "salir" ||
            res == "s" ||
            res == undefined
        ) {
            finalizar = true;
        }

        if (finalizar == false) {
            let hayError = false;
            let resultado = "";
            try {
                let res2 = Math.round(evaluar(res)*10000)/10000;
                resultado = res + " es igual a: " + res2;
                res = res2;
            } catch (error) {
                alert(`
                    No se ingreso una expresion matematica.
                    Si desea salir ingrese "salir" o "s".
            `);
                hayError = true;
            }

            if (hayError == false) {
                alert(resultado);
                
                historialResultadosCalculadora.push(res);
                historial.innerHTML = historialResultadosCalculadora.toString();
            }
        }
    }
}

function calcularPrecio() {
    let finalizar = false;

    while (finalizar == false) {
        let tarjeta = prompt(`
        Ingrese tarjeta utilizada. O ingrese "s" para salir.
        Tarjetas:
                Visa
                Oca
                Santander
                Itau
        `);

        if (tarjeta != "" && tarjeta != null) {
            tarjeta = tarjeta.trim();
            tarjeta = tarjeta.toLowerCase();
        }
        let descuento = 0;

        switch (tarjeta) {
            case "visa":
                descuento = 15;
                break;
            case "oca":
                descuento = 10;
                break;
            case "santander":
                descuento = 20;
                break;
            case "itau":
                descuento = 25;
                break;
            default:
                descuento = 0;
                break;
        }

        if (
            tarjeta == "finalizar" ||
            tarjeta == null ||
            tarjeta == "salir" ||
            tarjeta == "s" ||
            tarjeta == undefined
        ) {
            finalizar = true;
        } else {
            if (descuento != 0) {

                let precio = prompt(`
                    Ingrese el valor del producto.
                `);

                if (precio != "" && precio != null) {
                    precio = precio.trim();
                    precio = precio.toLowerCase();
                }

                precio = precio * ((100 - descuento) / 100);

                if (isNaN(precio)) {
                    alert("No se ingreso un precio valido.");
                } else {
                    precio = Math.round(precio*10000)/10000;
                    let resultado = "El precio final con el descuento includo es: " + precio;
                    alert(resultado);
                    historialResultadosDescuento.push(precio);
                    historialDescuento.innerHTML = historialResultadosDescuento.toString();
                }

            } else {
                alert("No se ingreso una tarjeta valida.");
            }
        }
    }
}
