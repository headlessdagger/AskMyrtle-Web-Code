// THE CHAT LOGS BEING MIMICED
const links = document.querySelectorAll('.saveChat');

let priorMenu = null

links.forEach( (link) => {

    // MENU ICON ADDER
    let menuDots = document.createElement("div")
    menuDots.classList.add('menu')

    link.appendChild(menuDots)

    // MAKE THE MENU
    let menu = document.querySelector('#menuTem').cloneNode(true)

    link.appendChild(menu)

    
    // THIS ACTIVATES THE MENU

    menuDots.addEventListener('click', () => {

        if (priorMenu == null) {

            menu.classList.toggle('visually-hidden')
            menu.classList.toggle('d-none')

            priorMenu = menu
        }

        else if (priorMenu == menu) {

            menu.classList.toggle('visually-hidden')
            menu.classList.toggle('d-none')

            priorMenu = null
        }

        else {

            priorMenu.classList.toggle('visually-hidden')
            priorMenu.classList.toggle('d-none')

            menu.classList.toggle('visually-hidden')
            menu.classList.toggle('d-none')

            priorMenu = priorMenu == menu ? null : menu
        }

    })
});