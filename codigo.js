let nombre
function inicio(){
    let Usuario = document.getElementById("Usuario").value;
    let Contraseña = document.getElementById("Contraseña").value

    if (Contraseña == "") {
        alert("Por favor ingrese una contraseña")
    } else {
        alert(" ¡Gracias por registrarte! Bienvenido " + Usuario);
        
    }
}
