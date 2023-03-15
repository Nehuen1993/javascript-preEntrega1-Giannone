
let precio = 0
let fin = 0

while (fin != 9) {
let producto = prompt("Ingrese el numero de repuesto a comprar \n 1-Disco de freno \n 2-Pastillas de freno \n 3-Liquido de freno")   
 if (producto == 1) {
    alert("ingresaste Disco de freno")
    producto=300
    } 
    else if (producto == 2){
        alert("ingresaste Pastillas de freno")
        producto=200
    }
    else if (producto == 3){
        alert("ingresaste Pastillas de freno")
        producto=100
    }
    else {
    alert("el valor ingresado no es correcto recarga la pagina por favor")
    break
    }
let cantidad = prompt("cuantos vas a llevar")   

if (isNaN(cantidad)) {
    alert("el valor ingresado no es correcto recarga la pagina por favor")
    break
  }

efectivo(producto,cantidad)

let medioPago = prompt("abona en: \n 1-Efectivo \n 2-Tarjeta")

if (medioPago == 1) {

    alert("El total es $" + precio + " Gracias por tu compra")
    
} else if (medioPago == 2) {

    tarjeta(precio)
    alert("El total es $" + precio + " Gracias por tu compra")
    
    
} else {
    alert("el valor ingresado no es correcto recarga la pagina por favor")
    break
}
    function tarjeta(c) {
        let precioTarjeta =  c * 1.1
        precio = precioTarjeta
    }
        
    function efectivo(a, b) {
    let precioEfectivo = a * b
    precio = precioEfectivo
    
}
fin = prompt("Si queres terminar la compra preciona 9 \n Si queres seguir comprando toca 0" )
}

alert("Muchas Gracias!")