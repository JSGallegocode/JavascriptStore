
let nombreUsuario = 'Juan'
let estaturaUsuario = 1.62
let edad =32
let telefonoUsuario = "6986666"
let esPaisa = true

const APELLIDOS_USUARIO="Gallego Mesa"
/*
console.log(edad)
console.log(nombreUsuario)
console.log("buenas tardes "+ nombreUsuario +""+ " Su edad es " + edad)

console.log(`buenas tardes ${nombreUsuario} su edad es ${edad}`)
*/

//utilizando dom

let etiquetaTitulo = document.getElementById("saludo")
let titulo = document.getElementById("titulo")
let foto1 = document.getElementById("goku")
let slider = document.getElementById("slider")

slider.src="img/fondo.jpg"


foto1.src="img/goku.png"
etiquetaTitulo.classList.add("text-danger")
etiquetaTitulo.classList.add("text-center")

titulo.textContent="Dragon Ball"
etiquetaTitulo.textContent="SOLO VERDE"