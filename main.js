//Clases
class Product {
    constructor(id, name, precio, sum, stock) {
        this.id = id;
        this.name = name;
        this.precio = precio;
        this.sum = sum;
        this.stock = stock;
    }

    descripcion() {
        return "ID :" + this.id
            + "\nNombre :" + this.name
            + "\nPrecio: $" + this.precio
    }
}

class ProductControl  {
    constructor() {
        this.listaProductos = []
    }

    agregarJuego(producto) {
        this.listaProductos.push(producto)
    }

    filtrarJuegosPorPrecio(precio) {
        return this.listaProductos.filter((el) => el.precio <= precio)
    }

    mostrarJuegos() {
        this.listaProductos.forEach((el) => {
            console.log( el.descripcion() )
        }
        )
    }
}

class Carrito{
    constructor(listaDeCompra){
        this.precioTotal = 0
        this.listaDeCompra = listaDeCompra
    }

    calcularPrecioTotal(arr){
        let  precioTotal = 0;
        arr.forEach( producto => {
            precioTotal += producto.precio * producto.cantidad
        })
        for (const objeto_dentro of this.listaDeCompra) {
            this.precioTotal = this.precioTotal + objeto_dentro.precio * objeto_dentro.cantidad 
        }
        return this.precioTotal
    }
}

//Declaración de productos
const allProducts  = new ProductControl()
allProducts .agregarJuego(new Product(001, "VOL.1: Balance", 4490, "Otorga balance y humectación a la piel, reduciendo la inflamación y/o enrojecimiento de la misma. Ayuda a controlar el acné y brinda luminosidad.", 50))
allProducts .agregarJuego(new Product(002, "VOL.2: Restauración", 4990, "Su fórmula combina ácido hialurónico de diversos pesos moleculares con un polímero cruzado para hidratar múltiples niveles de la piel. La vitamina B5 potencia la hidratación y restaura la barrera cutánea dejando una apariencia suave y elástica.", 55))
allProducts .agregarJuego(new Product(003, "VOL.3: Renovación", 4990, "Su fórmula con Bakuchiol, una alternativa vegana al retinol con propiedades antioxidantes que renueva la textura de la piel suavizando la apariencia de líneas finas y arrugas, evitando la descamación.", 45))
allProducts .agregarJuego(new Product(004, "Defensa AM/PM", 4400, "Sella la hidratación, protegiendo y fortaleciendo la barrera de la piel. Su fórmula de textura fluida incorpora la tecnología probiótica, combinando la acción del Extracto de Matcha Plus de propiedades antioxidantes, con el Hydraskin, un activo postbiótico que hidrata la piel en profundidad, penetrando hasta 4mm y conservando su efecto por 72hs, para sellarla y protegerla de daños externos.", 50))
allProducts .agregarJuego(new Product(005, "Energía", 3190, "ENERGÍA es la crema para contorno de ojos que estabas esperando, una fórmula especialmente diseñada en pomo con aplicador metálico.", 50))
allProducts .agregarJuego(new Product(006, "Máscara Hidratante", 2790, "Esta máscara hidratante es ideal para suavizar, hidratar e iluminar todo tipo de pieles.", 60))
allProducts .agregarJuego(new Product(006, "Máscara Hidratante", 2790, "Esta máscara hidratante es ideal para suavizar, hidratar e iluminar todo tipo de pieles.", 60))
allProducts .agregarJuego(new Product(007, "Ampollas de Melatonina", 3590, "Estimula la producción de enzimas antioxidantes para maximizar la regeneración de la piel durante la noche.", 100))

//Inicio


allProducts .mostrarJuegos()