const tabSelection = document.querySelectorAll('.tab')
const tabInfo = document.querySelectorAll('.tab-info')

tabSelection.forEach( tab => {

    tab.addEventListener('click', e => {

        tabSelection.forEach( item => {

            if (item.classList.contains('active')) {
                 item.classList.remove('active')
            }

        })

        tabInfo.forEach( item => {

            if (!item.classList.contains('d-none')) {
                 item.classList.add('d-none')
            }

        })

        const curTab = document.querySelector(`#${e.target.getAttribute('tab')}`);

        curTab.classList.toggle('d-none')



        e.target.classList.add('active')

    })
})

