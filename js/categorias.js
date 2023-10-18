var urlParams = new URLSearchParams(window.location.search);
var categoria = urlParams.get("categoria");

switch(categoria){
    case "arquitectura":
        categoriaNombre = "Arquitectura";
        break;
    case "fotografia":
        categoriaNombre = "Fotografía";
        break;
    case "musica":
        categoriaNombre = "Música";
        break;
    case "divulgacion-cientifica":
        categoriaNombre = "Divulgación científica"
        break;
    case "fisica-quimica-matematicas":
        categoriaNombre = "Física, química y matemáticas"
        break;
    case "teoria-derecho":
        categoriaNombre = "Teoría general del derecho";
        break;
    case "crimen-misterio":
        categoriaNombre = "Crimen y misterio"
        break;
    case "fantasia":
        categoriaNombre = "Fantasía";
        break;
    case "romance":
        categoriaNombre = "Romance";
        break;
    case "terror":
        categoriaNombre = "Terror";
        break;
    case "filosofia":
        categoriaNombre = "Filosofía";
        break;
    case "religion-espiritu-creencias":
        categoriaNombre = "Religión, espíritu y creencias";
        break;
    case "psicologia":
        categoriaNombre = "Psicología";
        break;
    case "sociologia-antropologia":
        categoriaNombre = "Sociología y antropología"
        break;

}

if (categoria) {
    mostrarCategoria(categoriaNombre);
}


function mostrarCategoria(categoriaNombre) {
    
    
    var productos = productosPorCategoria[categoriaNombre];

    productos.sort((a, b) => a.titulo.localeCompare(b.titulo));
    
    document.getElementById("titulo-categoria").textContent = categoriaNombre;

    
    var contenidoCategoria = document.getElementById("contenido-categoria");
    contenidoCategoria.innerHTML = "";

    productos.forEach(function (producto) {
        var tarjeta = document.createElement("div");
        tarjeta.className = "card";
        tarjeta.innerHTML = `
            <img src="${producto.img}" alt="${producto.titulo}">
            <h4>${producto.titulo}</h4>
            <p class="price">$${producto.precio}</p>
            <p class="genero">${categoriaNombre}</p>
            <p><button>Agregar al carrito</button></p>
        `;
        contenidoCategoria.appendChild(tarjeta);
    });
}