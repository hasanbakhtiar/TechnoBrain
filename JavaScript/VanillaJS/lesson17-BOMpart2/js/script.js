// document.querySelector('span').innerHTML = screen.height;
// document.querySelector('span').innerHTML = screen.width;
// document.querySelector('span').innerHTML = screen.availHeight;
// document.querySelector('span').innerHTML = screen.availWidth;
// document.querySelector('span').innerHTML = screen.colorDepth;
// document.querySelector('span').innerHTML = screen.pixelDepth;
// document.querySelector('span').innerHTML = screen.pixelDepth;
// document.querySelector('span').innerHTML = window.location.href;
// document.querySelector('span').innerHTML = window.location.hostname;
// document.querySelector('span').innerHTML = window.location.pathname;
// document.querySelector('span').innerHTML = window.location.protocol;
// document.querySelector('span').innerHTML = window.location.assign("https://www.w3schools.com");
// document.querySelector('span').innerHTML = navigator.cookieEnabled;
// document.querySelector('span').innerHTML = navigator.language;
// var a = window.prompt("Please, add your name.","Name:");
// document.querySelector('span').innerHTML = a;

// const info=() => {
//     document.write('Hello');
// }

// 1s = 1000ms
// setInterval(info, 2000);



var lang = {
    az:"Salam",
    en:"Hello"
}

// ["af", "sq", "ar-SA", "ar-IQ", "ar-EG", "ar-LY", "ar-DZ", "ar-MA", "ar-TN", "ar-OM",
//  "ar-YE", "ar-SY", "ar-JO", "ar-LB", "ar-KW", "ar-AE", "ar-BH", "ar-QA", "eu", "bg",
//  "be", "ca", "zh-TW", "zh-CN", "zh-HK", "zh-SG", "hr", "cs", "da", "nl", "nl-BE", "en",
//  "en-US", "en-EG", "en-AU", "en-GB", "en-CA", "en-NZ", "en-IE", "en-ZA", "en-JM",
//  "en-BZ", "en-TT", "et", "fo", "fa", "fi", "fr", "fr-BE", "fr-CA", "fr-CH", "fr-LU",
//  "gd", "gd-IE", "de", "de-CH", "de-AT", "de-LU", "de-LI", "el", "he", "hi", "hu", 
//  "is", "id", "it", "it-CH", "ja", "ko", "lv", "lt", "mk", "mt", "no", "pl",
//  "pt-BR", "pt", "rm", "ro", "ro-MO", "ru", "ru-MI", "sz", "sr", "sk", "sl", "sb",
//  "es", "es-AR", "es-GT", "es-CR", "es-PA", "es-DO", "es-MX", "es-VE", "es-CO", 
//  "es-PE", "es-EC", "es-CL", "es-UY", "es-PY", "es-BO", "es-SV", "es-HN", "es-NI", 
//  "es-PR", "sx", "sv", "sv-FI", "th", "ts", "tn", "tr", "uk", "ur", "ve", "vi", "xh",
//  "ji", "zu"];

if (navigator.language === "en-US") {
    document.querySelector('h1').innerHTML = lang.en;
}else{
    document.querySelector('h1').innerHTML = lang.az;

}

setTimeout(() => {
        document.querySelector('.info').style.display = "block";
        document.querySelector('.preloader').style.display = "none";
}, 500);

const a=setInterval(()=>{
    document.querySelector('.info-text').innerHTML = new Date().getMilliseconds();
},10)
// clearTimeout();
document.querySelector('button').onclick = ()=>{
        clearInterval(a);
}



