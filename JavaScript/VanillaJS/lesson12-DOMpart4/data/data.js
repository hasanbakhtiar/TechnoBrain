const selectors ={
    modeBtn:document.querySelector('.mode-btn'),
    langBtn:document.querySelector('.lang-btn'),
    nav:document.querySelector('nav'),
    link:document.querySelectorAll('.nav-link')

}
const lang={
    az:["Ana Shife","Haqqimizda","Xidmetlerimiz","Meqale","Elaqe"],
    en:["Home","About","Services","Blog","Contact"]
}

const mode={
    dark:'navbar navbar-expand-lg bg-dark navbar-dark',
    light:'navbar navbar-expand-lg bg-light navbar-light'
}

export {selectors,lang,mode}