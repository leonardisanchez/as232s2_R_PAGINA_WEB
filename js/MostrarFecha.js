document.addEventListener("DOMContentLoaded", function() {
    // Funcionalidad 1: Mostrar la fecha actual en el pie de página
    const fechaActual = new Date();
    const piePagina = document.querySelector("footer p");
    piePagina.textContent += " " + fechaActual.getFullYear();
