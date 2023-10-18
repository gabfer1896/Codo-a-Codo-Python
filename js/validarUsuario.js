document.getElementById("formularioLogin").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const usuarioInput = document.getElementById("usuario").value;

   
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
           
            const usuarioExistente = data.find(user => user.username === usuarioInput);

            if (usuarioExistente) {
                alert("Bienvenido!");
            } else {
                alert("Usuario no reconocido");
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
});