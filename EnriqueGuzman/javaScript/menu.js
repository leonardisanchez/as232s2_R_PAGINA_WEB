(function(){
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');

    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav__link--show');
    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });


})();

const organigrama = document.getElementById("organigrama");

    organigrama.addEventListener("click", () => {
        organigrama.style.transform = "scale(1.05)";
        setTimeout(() => {
            organigrama.style.transform = "scale(1)";
        }, 300);
    });

