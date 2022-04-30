
import {getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"

let botonregistro = document.getElementById("btnregistro")
botonregistro.addEventListener("click",function(evento){

    evento.preventDefault()
    console.log("registrando")

    let correo = document.getElementById("correo").value 
    let password = document.getElementById("password").value
    let modalinformativo= new bootstrap.Modal(document.getElementById('modalinformativo'))


    const auth = getAuth();
    createUserWithEmailAndPassword(auth, correo, password)
    .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user)
    let textoinformativo = document.getElementById("informacion")
    let formulario = document.getElementById("formularioregistro")
    formulario.reset()
    textoinformativo.textContent = "exito registrando"
    modalinformativo.show()
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    let textoinformativo = document.getElementById("informacion")
    textoinformativo.textContent = "nanay"
    modalinformativo.show()
    setTimeout(function(){
        modalinformativo.hide()
    ,2000})
    });





})