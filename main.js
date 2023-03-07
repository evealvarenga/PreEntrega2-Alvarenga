//Variables
let menu = ""
let submenu = ""
let menuCarrito = ""
let cant = 0;

//Listas
listaEmpanadas = [
    {ID:1,Tipo: "Carne", Precio: 130, Cantidad: 0},
    {ID:2,Tipo: "Carne picante", Precio: 110,Cantidad: 0,},
    {ID:3,Tipo: "Carne suave", Precio: 105,Cantidad: 0},
    {ID:4,Tipo: "Pollo", Precio: 115,Cantidad: 0},
    {ID:5,Tipo: "Jamón y Queso", Precio: 120,Cantidad: 0},
    {ID:6,Tipo: "Caprese", Precio: 130,Cantidad: 0},
    {ID:7,Tipo: "Jamón, Queso y Huevo", Precio: 130,Cantidad: 0},
    {ID:8,Tipo: "Humita", Precio: 135,Cantidad: 0},
]

listaPizzas = [
    {ID:1,Tipo: "Muzzarela", Precio: 1500,Cantidad: 0},
    {ID:2,Tipo: "Fugazzeta", Precio: 2100,Cantidad: 0},
    {ID:3,Tipo: "Jamón y Morrón", Precio: 1550,Cantidad: 0},
    {ID:4,Tipo: "Peperoni", Precio: 1600,Cantidad: 0},
    {ID:5,Tipo: "Americana", Precio: 2200,Cantidad: 0},
]

//Función carrito
function market(array){
    let precioTotal = 0;
    array.forEach((el) => {
        precioTotal += el.Precio * el.Cantidad
    })
        return precioTotal;
    }


const carrito = []

//Inicio
console.log("¡Bienvenido a Sabores Argentinos!")
menu = Number(prompt("Elija una opción: \n1)Menú de empanadas.\n2)Menú de Pizzas.\n3)Finalizar.",1))
if(menu != 3){
    do{
        if(menu == 1){
            //Ingreso al menú de empanadas
            console.log("Nuestro menú de empanadas es el siguiente: ")
            listaEmpanadas.forEach ( producto => {
                console.log(producto.ID+") Sabor: "+producto.Tipo+"\nPrecio: $"+producto.Precio)
            })
            //Carrito de compras
            do{
                menuCarrito = Number(prompt("Ingrese la opción deseada: "))
                if(listaEmpanadas.some( producto => producto.ID == menuCarrito)){
                    //////////// 
                    cant = prompt("Ingrese la cantidad deseada: ")
                    if (cant > 1 ){
                        carrito.push((listaEmpanadas.find(producto => producto.ID == menuCarrito).cantidad = cant ))
                        console.log("¡Nuevo producto agregado al carrito! ")
                    } else{
                        console.log("El valor ingresado no es una cantidad válida.")
                    }
                    
                } else {
                    console.log("No hemos podido validar el valor ingresado.")
                }
                submenu = prompt("Si desea seguir comprando empanadas precione cualquier tecla. \nPara volver al menú principal ingrese 'ESC'.").toUpperCase()
            }while(submenu != "ESC")
        


        }else if(menu == 2){
            //Ingreso al menú de pizzas
            console.log("Nuestro menú de pizzas es el siguiente: ")
            listaPizzas.forEach ( producto => {
                console.log(producto.ID+") Sabor: "+producto.Tipo+"\nPrecio: $"+producto.Precio)
            })
            //Carrito de compras
            do{
                menuCarrito = prompt("Ingrese el sabor deseado: ")
                if(listaEmpanadas.some(producto => producto.ID == menuCarrito)){
                    ////////////
                    cant = prompt("Ingrese la cantidad deseada: ")
                    if (cant > 1 ){
                        carrito.push((listaPizzas.find(producto => producto.ID == menuCarrito).cantidad = cant ))
                        console.log("¡Nuevo producto agregado al carrito!")
                    } else{
                        console.log("El valor ingresado no es una cantidad válida.")
                    }
                } else {
                    console.log("No hemos podido validar el valor ingresado.")
                }
                submenu = prompt("Si desea seguir comprando pizzas precione cualquier tecla. \nPara volver al menú principal ingrese 'ESC'.").toUpperCase()
            }while(submenu != "ESC")

        }else{
            console.log("El valor ingresado no es correcto.")
        }
        menu = Number(prompt("Elija una opción: \n1)Menú de empanadas.\n2)Menú de Pizzas.\n3)Finalizar.",1))
    }while(menu != 3)
}


 console.log("Precio total de su compra: "+ market(carrito))