function cargarContenido(url, contenedorId) {
    fetch(url)
      .then(response => response.text())
      .then(data => {
        document.getElementById(contenedorId).innerHTML = data;
      });
  }
 
  cargarContenido('/html/header.html', 'header-nav-container');
  cargarContenido('/html/footer.html', 'footer-container');