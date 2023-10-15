function cargarContenido(url, contenedorId) {
    fetch(url)
      .then(response => response.text())
      .then(data => {
        document.getElementById(contenedorId).innerHTML = data;
      });
  }
 
  cargarContenido('/html/ingresos.html', 'ingresos-container');
  cargarContenido('/html/recomendados', 'recomendados-container');