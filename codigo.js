<<<<<<< HEAD
function iniciarSesion() {
    let usuario = document.getElementById("usuario").value;
    let contraseña = document.getElementById("contraseña").value;

    if (usuario === "marco" && contraseña === "1234" || usuario === "cristian" && contraseña === "1234") {
        alert("Inicio de sesión exitoso");
    } else {
        alert("Nombre de usuario o contraseña incorrectos");
    }
}
=======
let nombre;

function inicio() {
    let Usuario = document.getElementById("Usuario").value;
    let Contraseña = document.getElementById("Contraseña").value;
    let Contraseñaconfir = document.getElementById("Contraseñaconfir").value;

    if (Contraseña === "") {
        alert("Por favor ingrese una contraseña");
    } else if (Contraseña !== Contraseñaconfir) {
        alert("las contraseñas no coinciden");
    } else {
        alert("¡Gracias por registrarte! Bienvenido " + Usuario);
    }
}
>>>>>>> a35dc61ebd46277798e80523942af5afec580ad7
