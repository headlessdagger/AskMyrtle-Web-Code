const button1 = document.querySelector('.button-box');
const popup = document.querySelector('#profile-config-div');
const main_div = document.querySelector('#main-div');
const mask1 = document.querySelector('#mask1');
const closeButton = document.querySelector('#closeX')

function doStuff(){
    button1.classList.toggle('toggled1');
    popup.classList.toggle('d-none');
    mask1.classList.toggle('d-none');
    main_div.classList.toggle('blur');
    // mask1.classList.toggle('vignette')
}


button1.addEventListener('click', () => {doStuff()})
closeButton.addEventListener('click', () => {doStuff()})