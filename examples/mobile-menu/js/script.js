const mobileBtn = document.querySelector('.mobile-button');
const nav = document.querySelector('.mobile-nav');
mobileBtn.onclick =()=>{
    if (nav.style.display == 'none') {
        nav.style.display = 'block';
    }else{
        nav.style.display = 'none';
    }
}