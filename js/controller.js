//importando modulos


import { pintarTienda } from "./llenadotienda.js";
import { ampliarInformacion } from "./ampliarinfo.js";

//lamando al modulo de pintar
pintarTienda()


//llamando al modulo ampliar info 

let contenedortienda = document.getElementById("fila")
contenedortienda.addEventListener("click",function(event){

    let modalinfoproducto = new bootstrap.Modal(document.getElementById('modalinfo'))

    modalinfoproducto.show()


    ampliarInformacion(event)

})



