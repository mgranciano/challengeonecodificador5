var splashScreen = document.querySelector('.splash');
var splashScreen = document.querySelector('.splash');
var headerSection = document.querySelector('header');
var mainSection = document.querySelector('main');
var footerSection = document.querySelector('footer');


splashScreen.addEventListener('click', () => {
    splashScreen.style.opacity = 0;
    setTimeout(() => {
        splashScreen.classList.add('hidden-splash');
        headerSection.classList.remove('hidden');
        mainSection.classList.remove('hidden');
        footerSection.classList.remove('hidden');

        //colocar el estado de los panel de resultado en espera , y ocultando el panel donde se mostrara el resultado
        standby('<br><strong>Ningún mensaje fue encontrado </strong><br> <br> Ingresa el msg que desees encriptar o desencriptar.');

        headerSection.style.opacity = 1;
        mainSection.style.opacity = 1;
        footerSection.style.opacity = 1;

    }, 610)
});