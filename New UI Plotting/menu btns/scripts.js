// THE CHAT LOGS BEING MIMICED
const links = document.querySelectorAll('a');
const mask = document.querySelector('#mask');

links.forEach(link => {

    let menu = document.createElement("div")
    menu.classList.add('menu')
    link.appendChild(menu)

    

    menu.addEventListener('click', () => {
        
        
    })
});