total = 0;
productos = [];

function agregarProducto(producto, precio) {
    let carrito = document.getElementById("carrito");
    let productoItem = document.createElement("p");
    productoItem.textContent = producto;
    carrito.appendChild(productoItem);
    total = total + precio;

    document.getElementById("btnPagar").textContent = `Pagar: $${total}`
}

function vaciar() {
    let carrito = document.getElementById("carrito");

    if(document.getElementById("btnPagar").textContent === "Pagar") {

        alert("El Carrito ya esta vacio")

    } else {

    if(confirm("¿Desea vaciar el Carrito?"))

    total = 0;

    carrito.textContent = "";

    document.getElementById("btnPagar").textContent = `Pagar`
    }
}

function pagar() {
    if(total <= 0) {
        alert("No agregaste ningun producto al carrito!")
    }else {
        alert("Total a pagar: $" + total)
        let detalleProductos = "";
        for (let i = 0; i < productos.length; i++) {
            detalleProductos += `${productos[i].nombre}\n`;
        }
    
            // Agrega una línea separadora
        detalleProductos += "------------------------\n";
    
        // Agrega el total a la cadena
        detalleProductos += `Total: $${total}\n`;
    
        detalleProductos += `\nalias: finance.graduates\nFecha: ${new Date().toLocaleDateString()}`;
    
            // Agrega el mensaje de agradecimiento y la fecha
            detalleProductos += `\n\nGracias por su compra!\n`;
    
        // Codifica la cadena para que sea segura en una URL
        let encodedDetalleProductos = encodeURIComponent(detalleProductos);
    
        // Redirige a la página compra.html y pasa la información como parámetro en la URL
        window.location.href = `compra.html?detalle=${encodedDetalleProductos}`;
    }
}








