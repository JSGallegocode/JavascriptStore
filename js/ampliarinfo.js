 export function ampliarInformacion(event) {

     let producto = {}
     if (event.target.classList.contains("btn")) {


         producto = {

             foto: event.target.parentElement.querySelector("img").src,
             nombre: event.target.parentElement.querySelector("h2").textContent,
             descripcion: event.target.parentElement.querySelector("h4").textContent,
             precio: event.target.parentElement.querySelector("h6").textContent,


         }

         console.log(producto)
             //asociando valores al modal 

         let foto = document.getElementById("fotoinfo")
         foto.src = producto.foto
         let nombre = document.getElementById("nombreinfo")
         nombre.textContent = producto.nombre
         let descripcion = document.getElementById("descrip")
         descripcion.textContent = producto.descripcion
         let precio = document.getElementById("preciog")
         precio.textContent = producto.precio

         return producto

     }



 }