document.addEventListener("DOMContentLoaded", function() {

   // Mostrar mensaje de alerta al hacer clic en los enlaces del menú de navegación
    const enlacesMenu = document.querySelectorAll(".menu li a");
    enlacesMenu.forEach(function(enlace) {
        enlace.addEventListener("click", function() {
            alert("¡Has hecho clic en un enlace del menú!");