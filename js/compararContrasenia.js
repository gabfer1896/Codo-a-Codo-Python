document.getElementById("formularioRegistro").addEventListener("submit", function (event) {
   
    event.preventDefault();
  
    var contrasenia = document.getElementById("contrasenia").value;
    var repetir_contrasenia = document.getElementById("repetirContrasenia").value;
  
  
    if (contrasenia != repetir_contrasenia){
      alert("Las contraseñas no coinciden.");
    } else {
      
      alert("Formulario enviado correctamente.");
      document.getElementById("formularioRegistro").submit();
    }
  });