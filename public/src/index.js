window.addEventListener('load',start())
const links = document.querySelector('[container]')
links.classList.add('section','centered')

function start() {
    toggle()
    getlinks()
}

// NAVBAR
function toggle(){
    let toggle_btn = document.querySelector('[toggle-button]')
    let mobile_nav = document.querySelector('[nav-links]')

    toggle_btn.addEventListener('click',function () {
        mobile_nav.classList.toggle('display')
    })
}

// Used Api and Other Codes Omitted