
// SIDEMENU
const sidemenu = document.querySelector('aside');

// CHATSIDE
const chat = document.querySelector('main');

// IMAGE
const bg = document.querySelector('#chatbg');

// SIDEMENU BUTTONS
const menuBtns = document.querySelectorAll('.menuBtn')

// FOLDERS IN AN ARRAY
const folders = document.querySelectorAll('.folder');

// SIDEMENU TOGGLING
menuBtns.forEach(btn => {

    btn.addEventListener('click', (e) => {

        // CONFIGURING THE SIDEMENU
        sidemenu.classList.toggle('col-3');
        sidemenu.classList.toggle('col-1'); 
        sidemenu.classList.toggle('opacity-0');
        sidemenu.classList.toggle('h-0');

        // GETTING RID OF ALL THE DIVS IN SIDEMENU

        sidemenu.querySelectorAll('div').forEach(div => {

            div.classList.toggle('d-none');
        });

        // CHANGES THE CHAT SIZING
        chat.classList.toggle('col-9');
        chat.classList.toggle('col-11'); 

        // CHANGES THE BACKGROUND SO IT EXTENDS
        bg.classList.toggle('opacity-0');

        // ADJUST TEXT-INPUT AREAS
        document.querySelector('#inputs').classList.toggle('bg-1-75');
        document.querySelector('#chat').classList.toggle('bg-1-75');

        // BUTTON DISPLAY MECHANICs
        document.querySelector('#open').classList.toggle('d-none');

    })
})

folders.forEach(folder => {

    folder.addEventListener('click', (e) => {

        // ROTATE ARROWS


        folder.querySelector('.arrow.accord').classList.toggle('active')
        

        // EXPANDS THE MENU
        let content = folder.querySelector('.content');

        content.classList.toggle('h-0');
        content.classList.toggle('h-auto');
        content.classList.toggle('overflow-hidden');
        content.classList.toggle('py-2');

        // REVEALS THE CHATS

        
        // CHAT LINKS
        const chats = folder.querySelectorAll('.saveChat');
        let size = 0
        chats.forEach( x => {

            x.classList.toggle('h-0');


        })
        
    })
})