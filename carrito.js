class Producto {
    constructor(id, img, nombre, descripcion, precio) {
        this.id = id;
        this.img = img;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.cantidad = 1;
    }
}

//SE CREAN LOS ARTICULOS

const capaG = new Producto(1, "../img/tienda/robe-frente-gryffindor.webp", "Capa Gryffindor", "Capa de gala", 15000)
const capaS = new Producto(2, "../img/tienda/robe-frente-slytherin.webp", "Capa Slytherin", "Capa de gala", 15000)
const capaH = new Producto(3, "../img/tienda/robe-huffe.webp", "Capa Huffelpuf", "Capa de gala", 15000)
const capaR = new Producto(4, "../img/tienda/robe-raven.webp", "Capa Ravenclaw", "Capa de gala", 15000)
const busoG = new Producto(5, "../img/tienda/buso-gryff.webp", "Buso Gryffindor", "Buso tejido", 10500)
const busoS = new Producto(6, "../img/tienda/buso-slytherin.webp", "Buso Slytherin", "Buso tejido", 10500)
const busoH = new Producto(7, "../img/tienda/buso-huff.webp", "Buso Huffelpuf", "Buso tejido", 10500)
const busoR = new Producto(8, "../img/tienda/buso-raven.webp", "Buso Ravenclaw", "Buso tejido", 10500)
const libretaG = new Producto(13, "../img/tienda/book-gyrff.webp", "Libreta Gryffindor", "Libreta de notas, mascota", 700)
const libretaS = new Producto(14, "../img/tienda/book-slytherin.webp", "Libreta Slytherin", "Libreta de notas, mascota", 700)
const libretaH = new Producto(15, "../img/tienda/book-huff.webp", "Libreta Huffelpuf", "Libreta de notas, mascota", 700)
const libretaR = new Producto(16, "../img/tienda/book-raven.webp", "Libreta Ravenclaw", "Libreta de notas, mascota", 700)
const bufandaG = new Producto(17, "../img/tienda/bufanda-gryff.webp", "Bufanda Gryffindor", "Bufandas tejidas", 2500)
const bufandaS = new Producto(18, "../img/tienda/bufanda-slytherin.webp", "Bufanda Slytherin", "Bufandas tejidas", 2500)
const bufandaH = new Producto(19, "../img/tienda/bufanda-huff.webp", "Bufanda Huffelpuf", "Bufandas tejidas", 2500)
const bufandaR = new Producto(20, "../img/tienda/bufanda-raven.webp", "Bufanda Ravenclaw", "Bufandas tejidas", 2500)
const MaquillajeG = new Producto(21, "../img/tienda/cosm-gryff.webp", "Make up Gryffindor", "Make up exclusivo de cada casa", 1500)
const MaquillajeS = new Producto(22, "../img/tienda/cosm-slytherin.webp", "Make up Slytherin", "Make up exclusivo de cada casa", 1500)
const MaquillajeH = new Producto(23, "../img/tienda/cosm-huff.webp", "Make up Hufflepuf", "Make up exclusivo de cada casa", 1500)
const MaquillajeR = new Producto(24, "../img/tienda/cosm-raven.webp", "Make up Ravenclaw", "Make up exclusivo de cada casa", 1500)
const MaquillajeReliquias = new Producto(25, "../img/tienda/Hallows_Cosm.webp", "Maquillaje Reliquias", "Maquillaje exclusivo fabula", 1500)
const LibretaHog = new Producto(26, "../img/tienda/book-hogwarts.webp", "Libreta Hogwarts", "Libreta de notas, aplique dorado", 1200)


const productos = [capaG, capaS, capaH, capaR, busoG, busoS, busoH, busoR, libretaG, libretaS, libretaH, libretaR, bufandaG, bufandaS, bufandaH, bufandaR, MaquillajeG, MaquillajeS, MaquillajeH, MaquillajeR, MaquillajeReliquias, LibretaHog]

let carrito = []

if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
}

const contenedorTienda = document.getElementById("contenedorTienda");

const mostrarTienda = () => {
    productos.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3","col-md-6", "col-xs-12");
        card.innerHTML = `
      <div class="card mt-3 cards" style="width: 15rem;">
          <img src="${producto.img}" class="card-img-top" alt="${producto.nombre}">
         <div class="card-body">
           <h3 class="card-title">${producto.nombre}</h3>
           <p class="card-text">${producto.descripcion}</p>
           <p class="card-text">$${producto.precio}</p>
           <button class="btn boton" id=botonCompra${producto.id}>Comprar</button>
         </div>
      </div>
     `
     contenedorTienda.appendChild(card);

     const boton = document.getElementById(`botonCompra${producto.id}`);
     boton.addEventListener("click",() => {
        agregarCarrito(producto.id)
     })

    })

}

mostrarTienda()

const agregarCarrito = (id) => {
    const articulo = carrito.find(producto => producto.id === id )
    if(articulo) {
        articulo.cantidad++;
    }else {
        const producto = productos.find(producto => producto.id === id )
        carrito.push(producto)
    }    

  //AGREGAMOS JSON CON EL FUTURO HIJO DE SAMU

    localStorage.setItem("carrito", JSON.stringify(carrito));
    FinCompra();


}

//Boton de carrito
const carritoCompras = document.getElementById("carrito");
const contenedorCarrito = document.getElementById("contenedorCarrito");

carritoCompras.addEventListener("click", () => {
    mostrarCarrito();
})

const mostrarCarrito = () => {
    contenedorCarrito.innerHTML = ""
    carrito.forEach( producto => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3","col-md-6", "col-xs-12");
        card.innerHTML = `
      <div class="card mt-3 cards" style="width: 15rem;">
          <img src="${producto.img}" class="card-img-top" alt="${producto.nombre}">
         <div class="card-body">
           <h3 class="card-title">${producto.nombre}</h3>
           <p class="card-text">$${producto.precio}</p>
           <p class="card-text">${producto.cantidad}</p>
           <button class="btn boton" id="quitarArticulo${producto.id}">Eliminar</button>
         </div>
      </div>
     `
     contenedorCarrito.appendChild(card);

     const boton = document.getElementById(`quitarArticulo${producto.id}`);
     boton.addEventListener("click", () => {
        eliminarArticulo(producto.id);
     })
    })
    FinCompra();
}

// ELIMINAMOS UN ARTICULO DEL CARRITO

const eliminarArticulo = (id) => {
    const producto = carrito.find(producto => producto.id === id);
    let indice = carrito.indexOf(producto);
    carrito.splice(indice, 1);
    mostrarCarrito();
}

// ELIMINAMOS TODOS LOS ELEMENTOS DEL CARRITO

const vaciarCarrito = document.getElementById("eliminarCarrito") ;
vaciarCarrito.addEventListener("click", () => {
    eliminarElCarrito();
})

const eliminarElCarrito = () => {
    carrito = []
    mostrarCarrito();
}

//TOTAL DE LA COMPRA

const total = document.getElementById("total");

const FinCompra = () => {
    let totalCompra = 0;
    carrito.forEach(producto => {
        totalCompra = totalCompra + producto.precio * producto.cantidad;
    })
    total.innerHTML = `El total de su compra es de:$${totalCompra} `

}