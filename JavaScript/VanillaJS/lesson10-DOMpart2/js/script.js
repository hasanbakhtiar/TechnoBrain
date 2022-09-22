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