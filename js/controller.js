//importando modulos

import { pintarTienda } from "./llenadotienda.js";
import { ampliarInformacion } from "./ampliarinfo.js";
import { pintarcarrito } from "./pintarcarrito.js";

let producto = {};
//lamando al modulo de pintar
pintarTienda();

//GLOBAL MODAL (CREAR VARIABLE GLOBAL PARA NO REPETIR LINEA let modalinfoproducto = new bootstrap.Modal(document.getElementById('modalinfo'))"")

//PONER CANTIDAD PREDETERMINADA =1

//llamando al modulo ampliar info

let contenedortienda = document.getElementById("fila");
contenedortienda.addEventListener("click", function (event) {
  let modalinfoproducto = new bootstrap.Modal(
    document.getElementById("modalinfo")
  );

  modalinfoproducto.show();

  producto = ampliarInformacion(event);
});

// carrito es un arreglo de objetos
let carrito = [];

// detectar la accion de añadir al carrito
let botonadd = document.getElementById("botonadd");
botonadd.addEventListener("click", function (event) {
  let modalinfoproducto = new bootstrap.Modal(
    document.getElementById("modalinfo")
  );
  modalinfoproducto.hide();

  //capturar la cantidad del producto
  let cantidad = document.getElementById("cantidadproducto").value;
  producto.cantidad = cantidad;

  //agregar el producto al carrito
  carrito.push(producto);

  let suma = 0;

  carrito.forEach(function (producto) {
    suma = suma + Number(producto.cantidad);
  });

  //calculo sumatorio de cantidades

  // tarea: recorrer el arreglo y sacar solo la cantidad

  //tarea limpiar carrito
  pintarcarrito(suma);
});

/*let limpiarcarrito = document.getElementById("limpiar")
limpiarcarrito.addEventListener("click",function(evento){
    carrito = []
    let capsula= document.getElementById("capsula")
    capsula.textcontent = 0
    capsula.classList.add("invisible")
*/

//ver resumen venta

let botoncarrito = document.getElementById("botoncarrito");
botoncarrito.addEventListener("click", function (evento) {
  let contenedor = document.getElementById("contenedorventa");
  let modalcarrito = new bootstrap.Modal(document.getElementById("modalventa"));

  contenedor.innerHTML = "";

  //volver esto funcion

  //recorrer el carrito para pintar productos en la factura

  carrito.forEach(function (producto) {
    //traversing

    let fila = document.createElement("div");
    fila.classList.add("row");

    let columna1 = document.createElement("div");
    columna1.classList.add("col-12", "col-md-4");

    let columna2 = document.createElement("div");
    columna2.classList.add("col-12", "col-md-8");

    let foto = document.createElement("img");
    foto.classList.add("img-fluid", "w-100");
    foto.src = producto.foto;

    let nombre = document.createElement("h5");
    nombre.textContent = producto.nombre;

    let descripcion = document.createElement("p");
    descripcion.textContent = producto.descripcion;

    let cantidad = document.createElement("p");
    cantidad.textContent = producto.cantidad;

    let precio = document.createElement("p");
    precio.textContent = producto.precio;

    let subtotal = document.createElement("p");
    subtotal.textContent =
      "el subtotal es " + producto.precio * producto.cantidad;

    let total = 0;
    carrito.forEach(function (producto) {
      total = total + Number(producto.cantidad) * Number(producto.precio);
    });

    let totalCuenta = document.getElementById("totalventa");
    totalCuenta.textContent = "Total : " + total;
    totalCuenta.classList.add("text-center");

    let totalusd = document.getElementById("totalusd");
    totalusd.textContent = "Total en usd:" + Math.round(total * 0.00026);
    totalusd.classList.add("invisible");

    //PADRES E HIJOS

    columna1.appendChild(foto);
    fila.appendChild(columna1);
    fila.appendChild(columna2);
    contenedor.appendChild(fila);

    columna2.appendChild(nombre);
    columna2.appendChild(descripcion);
    columna2.appendChild(cantidad);
    columna2.appendChild(precio);
    columna2.appendChild(subtotal);
  });
  let botonusd = document.getElementById("usd");
  botonusd.addEventListener("click", function (evento) {
    totalusd.classList.remove("invisible");
  });
  modalcarrito.show();
});
