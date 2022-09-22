import * as data from './data.js';
const langBtn = document.querySelector('.lang-btn');
const langItem = document.querySelectorAll('.nav-link');
langBtn.onclick = ()=>{
    if (langBtn.innerHTML === 'AZ') {
        for(let x in data.lang.az){
            langItem[x].innerHTML = data.lang.az[x];
        }
        langBtn.innerHTML = 'EN';
    }else{
        for(let x in data.lang.en){
            langItem[x].innerHTML = data.lang.en[x];
        }
        langBtn.innerHTML = 'AZ'
    }
}


// mode
const modeBtn = document.querySelector('.mode-btn');
const nav = document.querySelector('nav');
modeBtn.onclick=()=>{
    if (nav.className == data.mode.dark) {
        nav.className = data.mode.light
        modeBtn.innerHTML = 'Dark';
    }else{
        nav.className = data.mode.dark;
        modeBtn.innerHTML = 'Light';

    }
}

const btnMenu = document.querySelector('.btn-menu');
const menu = document.querySelector('menu');

btnMenu.onclick = () =>{
    if (menu.className == 'show') {
        menu.classList.add('hide');
        menu.classList.remove('show');
    }else{
        menu.classList.add('show');
        menu.classList.remove('hide');
    }

}