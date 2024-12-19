
const refsnames = ['filter', 'export', 'feedback', 'user'];

const popupBtn = popup.querySelector('#popupBtn')

const pClosers = document.querySelectorAll('.pCloser')

let curTab = ''

let refs = {};

// BINDS ALL OF THE LINKS FOR THE POPUPS
refsnames.forEach( ref => {

    
    let btn = document.querySelector(`.${ref}`)
    let tab = popup.querySelector(`#${ref}`)


    btn.addEventListener('click', () => {

        popup.classList.toggle('d-none');
        tab.classList.toggle('d-none');
        curTab = ref;        

    })

})

// CLOSE BTN THINGY
popupBtn.addEventListener('click', () => {

    popup.classList.toggle('d-none')
    popup.querySelector(`#${curTab}`).classList.toggle('d-none')
})

// CUSTOMIZED CLOSING BUTTONS
pClosers.forEach( btn => {

    btn.addEventListener('click', () => {

    popup.classList.toggle('d-none')
    popup.querySelector(`#${curTab}`).classList.toggle('d-none')

    })
})