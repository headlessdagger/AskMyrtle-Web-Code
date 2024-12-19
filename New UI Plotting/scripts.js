
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

// POPUP
const popup = document.querySelector('#mask');

// POPUP ACTIVATORS
const popupListeners = document.querySelectorAll('.popupBtn');

// POPUP CLOSERS
const popupClosers = document.querySelectorAll('.closer');

// CHATBOXES
const chatBox = document.querySelector('#chat');

// NOTIFICATION POPUP
const notif = document.querySelector('#welcome');

// TURTORIAL BTNS
const turtBtns = document.querySelectorAll('#notif button');

// CURRENT DISPLAY TAP ON POPUP
let cur = ''


// SIDEMENU TOGGLING
menuBtns.forEach( btn => {

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

        chatBox.classList.toggle('active')

        // CHANGES THE BACKGROUND SO IT EXTENDS
        bg.classList.toggle('opacity-0');

        // BUTTON DISPLAY MECHANICs
        document.querySelector('#open').classList.toggle('d-none');

    })
})

// ACCORDION CONFIGURATION
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

// KEYBINDING FOR THE TURTORIAL BTNS
turtBtns.forEach( btn => {

    // TUROTRIAL SEPARATE CALLED FUNCTION BASED ON A SWITCH-CASE CONDITIONAL
    
    btn.addEventListener('click', () => {

        notif.classList.toggle('d-none');
    })
})