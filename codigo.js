let nombre;

function inicio() {
    let Usuario = document.getElementById("Usuario").value;
    let Contraseña = document.getElementById("Contraseña").value;
    let Contraseñaconfir = document.getElementById("Contraseñaconfir").value;

    if (Contraseña === "") {
        alert("Por favor ingrese una contraseña");
    } else if (Contraseña !== Contraseñaconfir) {
        alert("Error: Las contraseñas no coinciden");
    } else {
        alert("¡Gracias por registrarte! Bienvenido " + Usuario);
    }
}
