//Variables
let menu = 0;
let submenu = ""
let menuCarrito = 0;
let cant = 0;
let precioTotal = 0;

//Listas
listaEmpanadas = [
    { ID: 1, Tipo: "Empanada", Sabor: "Carne", Precio: 130, Cantidad: 0 },
    { ID: 2, Tipo: "Empanada", Sabor: "Carne picante", Precio: 110, Cantidad: 0, },
    { ID: 3, Tipo: "Empanada", Sabor: "Carne suave", Precio: 105, Cantidad: 0 },
    { ID: 4, Tipo: "Empanada", Sabor: "Pollo", Precio: 115, Cantidad: 0 },
    { ID: 5, Tipo: "Empanada", Sabor: "Jamón y Queso", Precio: 120, Cantidad: 0 },
    { ID: 6, Tipo: "Empanada", Sabor: "Caprese", Precio: 130, Cantidad: 0 },
    { ID: 7, Tipo: "Empanada", Sabor: "Jamón, Queso y Huevo", Precio: 130, Cantidad: 0 },
    { ID: 8, Tipo: "Empanada", Sabor: "Humita", Precio: 135, Cantidad: 0 },
]

listaPizzas = [
    { ID: 1, Tipo: "Pizza", Sabor: "Muzzarela", Precio: 1500, Cantidad: 0 },
    { ID: 2, Tipo: "Pizza", Sabor: "Fugazzeta", Precio: 2100, Cantidad: 0 },
    { ID: 3, Tipo: "Pizza", Sabor: "Jamón y Morrón", Precio: 1550, Cantidad: 0 },
    { ID: 4, Tipo: "Pizza", Sabor: "Peperoni", Precio: 1600, Cantidad: 0 },
    { ID: 5, Tipo: "Pizza", Sabor: "Americana", Precio: 2200, Cantidad: 0 },
]

//Función carrito
function market(array) {
    array.forEach((el) => {
        precioTotal += el.Precio * el.Cantidad
    })
    return precioTotal;
}
function factura(a) {
    console.log("¡Gracias por visitar Sabores Argentinos! \nEl detalle de su compra es el siguiente:")
    a.forEach(producto => {
        console.log("Has seleccionado " + producto.Tipo + " sabor " + producto.Sabor + " por una cantidad de " + producto.Cantidad + " ------> Subtotal: $" + (producto.Precio * producto.Cantidad))
    })
    console.log("El precio total de su compra es de: $" + market(carrito))
}

const carrito = []

//Inicio
console.log("¡Bienvenido a Sabores Argentinos!")
menu = Number(prompt("Elija una opción: \n1)Menú de empanadas.\n2)Menú de Pizzas.\n3)Finalizar.", 1))
if (menu != 3) {
    do {
        if (menu == 1) {
            //Ingreso al menú de empanadas
            console.log("Nuestro menú de empanadas es el siguiente: ")
            listaEmpanadas.forEach(producto => {
                console.log(producto.ID + ") Sabor: " + producto.Sabor + "\nPrecio: $" + producto.Precio)
            })
            //Carrito de compras
            do {
                menuCarrito = Number(prompt("Ingrese la opción deseada: "))
                if (listaEmpanadas.some(producto => producto.ID == menuCarrito)) {
                    cant = Number(prompt("Ingrese la cantidad deseada: "))
                    if (cant > 1) {
                        const producto = listaEmpanadas.find(producto => producto.ID == menuCarrito)
                        producto.Cantidad = cant;
                        carrito.push(producto)
                        console.log("¡Se ha agregado empanadas sabor " + producto.Tipo + " x" + producto.Cantidad + " agregado al carrito!")
                    } else {
                        console.log("El valor ingresado no es una cantidad válida.")
                    }
                } else {
                    console.log("No hemos podido validar el valor ingresado. ")
                }
                submenu = prompt("Si desea seguir comprando empanadas precione cualquier tecla. \nPara volver al menú principal ingrese 'ESC'.").toUpperCase()
            } while (submenu != "ESC")

        } else if (menu == 2) {
            //Ingreso al menú de pizzas
            console.log("Nuestro menú de pizzas es el siguiente: ")
            listaPizzas.forEach(producto => {
                console.log(producto.ID + ") Sabor: " + producto.Sabor + "\nPrecio: $" + producto.Precio)
            })
            //Carrito de compras
            do {
                menuCarrito = Number(prompt("Ingrese el sabor deseado: "))
                if (listaEmpanadas.some(producto => producto.ID == menuCarrito)) {
                    cant = Number(prompt("Ingrese la cantidad deseada: "))
                    if (cant > 1) {
                        const producto = listaPizzas.find(producto => producto.ID == menuCarrito)
                        producto.Cantidad = cant;
                        carrito.push(producto)
                        console.log("¡Se ha agregado pizza sabor" + producto.Nombre + " x" + producto.Cantidad + " al carrito!")
                    } else {
                        console.log("El valor ingresado no es una cantidad válida.")
                    }
                } else {
                    console.log("No hemos podido validar el valor ingresado.")
                }
                submenu = prompt("Si desea seguir comprando pizzas precione cualquier tecla. \nPara volver al menú principal ingrese 'ESC'.").toUpperCase()
            } while (submenu != "ESC")

        } else {
            console.log("El valor ingresado no es correcto.")
        }
        menu = Number(prompt("Elija una opción: \n1)Menú de empanadas.\n2)Menú de Pizzas.\n3)Finalizar.", 1))
    } while (menu != 3)
}

if (carrito.length === 0) {
    console.log("¡Gracias por visitar Sabores Argentinos!")
} else {
    factura(carrito)
}