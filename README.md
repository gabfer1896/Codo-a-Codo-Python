# Codo a Codo Python
El proyecto es sobre una tienda de libros llamada "Codo a Codo" y la idea es crear las páginas básicas que necesitaría (index, categorías, login y registro y en lo posible la sección de compras).
Para hacerlo más sencillo se separó el HEADER, NAV y FOOTER en archivos separados de HTML que son importados a los archivos principales por medio de JS ("headerFooter.js") para poder modficarlos fácilmente y que se replique en todas la páginas sin modificar una por una. Se utiliza un diseño tipo Grid para poder sectorizar el contenido de manera cómoda.

#HTML

>HEAD: favicon de una imagen obtenida de "icons8.com" convertida en "convertico.com". Fuentes de Google Fonts: Autour One, Dancing Lights, Mohave y Oswald. Actualmente se importa un solo archivo CSS "style.css" para todas las páginas, idealmente tendríamos un archivo CSS común para HEADER, NAV, FOOTER y cuestiones generales que se quieran mantener en todos las páginas, por ejemplo: color de fondo del body, margin y padding 0 como base y estilos particulares de los h1, h2 o h3 que se quieren mantener en todos los archivos y por otro lado cada página importaría su propio archivo CSS también para poder modularizar el CSS y que sea más fácil de leer y modificar. 
 
>HEADER y NAV: están en un solo archivo llamado por el momento "header.html" y contiene en el HEADER el título que consta de una animación "fade in left" y una imagen obtenida de "icons8.com" que también se utilizó en el HEAD para el favicon, también cuenta por el momento con el "botón" de login que nos dirige a la página "login.html" y el ícono de carrito que nos dirige a la página de "carrito.html". El NAV cuenta con 3 enlaces, "Inicio" que nos devuelve a la página "index.html", "Quienes somos" y "Contacto" que nos llevan también a "index.html", pero a sus respectivas secciones indicadas por id "seccionQuienesSomos" y "seccionContacto" respectivamente y también con el botón de "Categorías" que abre un dropdown con las categorías. El contenido de este dropdown también se encuentra con display "grid" para facilitar la ubicación de los enlaces.

>FOOTER: actualmente solo contiene la leyenda del copyright y un enlace a la página de defensa al consumidor "https://autogestion.produccion.gob.ar/consumidores".

>MAIN-index.html: actualmente cuenta con 3 secciones:

>"Últimos ingresos" --> Cuenta con un carrusel para exponer los últimos ingresos de libros a la tienda, dividido en 3 diapositivas (slides) de hasta 3 tarjetas de producto (cards) que cambian cuando el usuario hace click en las flechas a la izquierda (prev) o a la derecha (next) o en los 3 puntos debajo del carrusel (dots) que también marcan en qué slide se encuentra.

>"Más vendidos" --> Para agregar, se puede utilizar la misma estructura de "Últimos ingresos".

>"Quienes somos" --> Un texto corto que cuenta sobre la tienda (actualmente solo cuenta con lorem como placeholder).

>"Contacto" --> Cuenta con un sector con los datos de contacto y los íconos/link de redes sociales (Facebook, Instagram y Youtube), pero estos no llevan a ningún lado. Cuenta con un Iframe de Google Maps y un formulario de contacto que actualmente no envía correo.

>MAIN-login.html: actualmente cuenta con 2 formularios:
>"Login" --> formulario para ingresar usuario (type=text) y contraseña (type=password), ambos con la condición "required". Sin funcionalidad al no tener backend, pero con el archivo validarUsuario.js se hace una petición a la API JSON Placeholder para simular un login con el nombre de usuario.

>"Registro" --> formulario para registrase que solicita: nombre (type=text), apellido (type=text), número de documento (type=number), email (type=email), fecha de nacimiento (type=date), teléfono (type=tel), usuario (type=text), contraseña (type=password) y repetir contraseña (type=password). Todos los campos con la condición "required", excepto el teléfono. Por el momento cuenta con validación JS para corroborar que el contenido de los campos contraseña y repetir contraseña sea el mismo para poder enviar el formulario.

>MAIN-carrito.html:
>Actualmente no cuenta con funcionalidad real, pero toma datos de código tipo JSON insertado en el archivo JS "carrito.js" para simular un carro de compras con productos que pueder retirarse por completo o seleccionar con un checkbox para ver cuanto queda el precio total sin ellos sin necesidad de retirarlos del carrito. Se importa de la biblioteca de JQuery para poder darle funcionalidad a la página.

>MAIN-categorias.html:
>Visualización de las tarjetas de productos para los libros de las categorías seleccionadas alfabéticamente (por el momento sin posibilidad de alterar el orden). Para esto utiliza los archivos libros.js y categorias.js.


#CSS

>style.css: por el momento es el único archivo CSS para el sitio. Está separado en:

>GENERAL: margin, padding base de todo el documento, aspecto de formularios, títulos (h) y enlaces (a). Keyframes para la animación del título y detalle básico del body.

>HEADER-NAV: diseño grid y posición "sticky" para que se comporte como relative con el contenido que le siga esta sección, pero que se comporte como un "fixed" al hacer scroll por la página quedando siempre visible en la parte superior.

>HEADER: diseño grid, características del título como la animación slide in y características del botón de login con bordes diferentes al hacer hover para dar sensación de profundidad.

>NAV: diseño grid de los enlaces de la barra de navegación.

>MAIN: características básicas del main para todos los archivos, altura mínima y posición relative.

>FOOTER: características básicas para el footer y posición static al final de cada página.

>INDEX: diseño grid y características para las secciones "Quienes somos" y "Contacto"

>LOGIN: diseño grid y características para los formularios de login y registro para dar sensación de profundidad.

>CATEGORIAS: diseño grid y características del desplegable y de la página de categorías.

>LIBROS: diseño de las tarjetas de productos (cards) para los libros a exponer.

>SLIDER: características del carrusel de "Últimos ingresos".

>CARRITO: características para la página del carrito de compras.


#JS

>carrito.js: código que permite utilizar datos en formato JSON para simular la funcionalidad de un carrito de compra. Toma los datos del documento para ir generando HTML en una tabla para que sea visible al usuario y con esos datos calcula el precio total a pagar, teniendo en cuenta las unidades y si se encuentra tildado el checkbox a la izquierda de cada producto.

>compararContrasenia.js: usado en el formulario de registro, evita que el formulario se envíe y compara que el contenido en los campos id "contrasenia" y "repetirContrasenia" sean iguales para poder enviarlo, en caso contrario muestra un alert al usuario.

>headerFooter.js: usado en todas las páginas del sitio, recupera el html contenido en los archivos "header.html" y "footer.html" y los inserta en los div que contengan el id "header-nav-container" y "footer-container" respectivamente.

>sliderIngresosRecomendados: usado en el "index.html" para la sección "Últimos ingresos" y posiblemente "Recomendados" o "Más vendidos" si se desarrollan. Establece el índice para las slides en 1, y el valor que va a adoptar n en función de qué botón (prev o next) se pulse con la función plusSlides(). Con la función currentSlide() se detecta en qué slide se está ubicado y con la función showSlides se va rotando entre las slides dependiendo el valor que adopte n respecto de i, si excede a 3 vuelve a 1 y si es menor a 1 vuelve a 3. Además de cambiar el slide se activa el dot correspondiente a la diapositiva.

>dropdown.js: detecta el click sobre el botón "Categorías" de la barra de navegación y abre un menú en dropdown con enlaces a las categorías.

>validarFormContacto.js: controla que los campos de "Nombre y Apellido" e "Email" no estén vacíos y que este último posean "@" y "." antes de enviar el formulario.

>validarUsuario.js: recupera de la API Rest JSON Placeholder una lista de usuarios y controla que el input del usuario en el campo "Usuario" coincida con algún username presente en la API.

>libros.js: crea arreglos de objetos con las categorías de libros, conteniendo por cada libro: título, precio y ruta de la imagen de portada.

>categorias.js: recupera el valor del parámetro "categoria" de la URL y con un switch case determina el valor de la variable nombreCategoria. A partir de ahí recupera los objetos dentro de esa categoría del archivo "libros.js" para generar cards de estos y que se puedan visualizar en el html, ordenando estos alfabéticamente previo a insertar el html en "categorias.html". Además inserta el valor de esta variable en el título de la página. 
