document.addEventListener("DOMContentLoaded", function() {

    const logo = document.querySelector(".logo");
            const header = document.querySelector("header");
            logo.addEventListener("click", function() {
                header.style.backgroundColor = "#ff6600";
            });