class Producto {
    constructor(id, nombre, precio, descripcion, url_img) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion
        this.url_img = url_img;
    }

    descripcionHTML(){
        return `
        <article class="card" style="width: 18rem;">
                <img src="${this.url_img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${this.nombre}</h5>
                    <p class="card-text">Precio: $${this.precio}</p>
                    <p class="card-text">Descripcion: ${this.descripcion}</p>
                    <a href="#" class="btn btn-primary">Añadir al carrito</a>
                </div>
            </article>
        `
    }

}

class ProductoController {

    constructor() {
        this.listaProductos = []
    }

    agregarProducto(producto) {
        this.listaProductos.push(producto)
    }
}

const controladorProductos = new ProductoController()

controladorProductos.agregarProducto(new Producto(1, "Ryzen 5 5600G", 145000, "Un procesador de gama media/alta", "assets/img/ryzen5-5600g.jpg"))
controladorProductos.agregarProducto(new Producto(2, "Ryzen 5 5600X", 16000, "Un procesador de gama alta", "assets/img/ryzen5-5600X.jpg"))
controladorProductos.agregarProducto(new Producto(3, "Ryzen 7 5700G", 175000, "Un procesador de gama alta", "assets/img/ryzen7-5700g.jpg"))
controladorProductos.agregarProducto(new Producto(4, "Ryzen 5 5800X", 185000, "Un procesador de gama alta", "assets/img/ryzen7-5800X.jpg"))
controladorProductos.agregarProducto(new Producto(5,"Ryzen 9 5900X", 600000, "Un procesador de gama muy alta", "assets/img/ryzen9-5900X.jpg" ))


const productos = document.getElementById('productos')

controladorProductos.listaProductos.forEach(producto => {

    productos.innerHTML += producto.descripcionHTML()
    /*
    `
        <article class="card" style="width: 18rem;">
                <img src="${this.url_img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${this.nombre}</h5>
                    <p class="card-text">Precio: $${this.precio}</p>
                    <p class="card-text">Descripcion: ${this.descripcion}</p>
                    <a href="#" class="btn btn-primary">Añadir al carrito</a>
                </div>
            </article>
        `
     */
})