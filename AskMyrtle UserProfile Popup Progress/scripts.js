const button1 = document.querySelector('.button-box');
const popup = document.querySelector('#profile-config-div');
const main_div = document.querySelector('#main-div');
const mask1 = document.querySelector('#mask1');
const closeButton = document.querySelector('#closeX');
const passwordChangeButton = document.querySelector("password-change-button");
const secretPhraseChangeButton = document.querySelector("secret-phrase-change-button");

function openProfileWindow(){
    button1.classList.toggle('toggled1');
    popup.classList.toggle('d-none');
    mask1.classList.toggle('d-none');
    main_div.classList.toggle('blur');
    // mask1.classList.toggle('vignette')
}

function changeSecretPhraseWindow(){
}

function changePasswordWindow(){

}

button1.addEventListener('click', () => {openProfileWindow()})
closeButton.addEventListener('click', () => {openProfileWindow()})
passwordChangeButton.addEventListener('click', () => {changePasswordWindow()})
secretPhraseChangeButton.addEventListener('click', () => {changeSecretPhraseWindow()})
