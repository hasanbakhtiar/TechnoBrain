const lang = {
  az: ["ana sehife", "haqqimizda", "xidmet", "meqale", "elaqe"],
  en: ["home", "about", "services", "blog", "contact"],
};

document.querySelector("button").addEventListener("click", () => {
  if (document.querySelector("button").innerHTML == "az") {
    for (let count in lang.az) {
      localStorage.setItem("lang", lang.az);
      document.querySelectorAll("a")[count].innerHTML = localStorage
        .getItem("lang")
        .split(",")[count];
    }
    localStorage.setItem('btn','en');
    document.querySelector('button').innerHTML = localStorage.getItem('btn');
  }else{
    for (let count in lang.en) {
        localStorage.setItem("lang", lang.en);
        document.querySelectorAll("a")[count].innerHTML = localStorage
          .getItem("lang")
          .split(",")[count];
      }
    document.querySelector('button').innerHTML = 'az';
    localStorage.setItem('btn','az');
    document.querySelector('button').innerHTML = localStorage.getItem('btn');
  }
});

if (localStorage.getItem("lang") === null) {
    localStorage.setItem('lang',lang.en);
    localStorage.setItem('btn','az');
}else{
    for( let count  = 0; count < 5; count++){
        document.querySelectorAll("a")[count].innerHTML = localStorage
          .getItem("lang")
          .split(",")[count];
      }
      document.querySelector('button').innerHTML = localStorage.getItem('btn');
}
