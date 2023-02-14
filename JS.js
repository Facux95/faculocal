const boton = document.querySelector("#boton");
const foto = document.getElementById("foto");
const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const telefono = document.getElementById("telefono");

console.log (boton);

const generarUsuario = async() => {
    try {
        const url = "https://randomuser.me/api/";
        const respuesta = await fetch (url);
        const {results} = await respuesta.json();
        const datos = results [0];
        console.log (datos);
        foto.src = datos.picture.large;
        nombre.textContent = datos.name.first;
        correo.textContent = datos.email;
        telefono.textContent= datos.phone;
    } catch (error) {
        console.log (error); 
    }
}

boton.addEventListener("click", generarUsuario);
document.addEventListener("DOMContentLoaded", generarUsuario);