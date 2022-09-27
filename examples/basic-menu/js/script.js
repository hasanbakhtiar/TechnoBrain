const btn = document.querySelector('button');
const menu = document.querySelector('menu');

btn.onclick =()=>{
    if (menu.attributes[0].value === 'show') {
        menu.attributes[0].value = 'hide'
    }else{
        menu.attributes[0].value ='show'
    }
}