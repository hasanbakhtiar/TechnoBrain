// import * as data from "../data/data.js";
// // ====================lang==============
// data.selectors.langBtn.onclick = () => {
//   if (data.selectors.langBtn.innerHTML == "AZ") {
//     for (let x in data.lang.az) {
//       data.selectors.link[x].innerHTML = data.lang.az[x];
//     }
//     data.selectors.langBtn.innerHTML = "EN";
//   } else {
//     for (let x in data.lang.en) {
//       data.selectors.link[x].innerHTML = data.lang.en[x];
//     }
//     data.selectors.langBtn.innerHTML = "AZ";
//   }
// };
// // ================mode====================
// data.selectors.modeBtn.onclick=()=>{
//     if (data.selectors.modeBtn.innerHTML == '🌞') {
//         data.selectors.modeBtn.innerHTML = '🌙'
//         data.selectors.nav.className = data.mode.light;
//     }else{
//         data.selectors.modeBtn.innerHTML = '🌞';
//         data.selectors.nav.className = data.mode.dark;


//     }
// }


import * as data from "../data/data.js";
// ====================lang==============

if (localStorage.getItem==null) {
    localStorage.setItem('lang',data.lang.az)
}else{
    data.selectors.langBtn.onclick = () => {
        if (data.selectors.langBtn.innerHTML == "AZ") {
          for (let x in data.lang.az) {
            data.selectors.link[x].innerHTML = data.lang.az[x];
          }
          localStorage.setItem('lang',data.lang.az)
      
          data.selectors.langBtn.innerHTML = "EN";
        } else {
          for (let x in data.lang.en) {
              localStorage.setItem('lang',data.lang.en)
            data.selectors.link[x].innerHTML = data.lang.en[x];
          }

          data.selectors.langBtn.innerHTML = "AZ";
        }
      };
}
for (let x in data.lang.en) {
  data.selectors.link[x].innerHTML =localStorage.getItem('lang').split(',')[x];
}
// ================mode====================
data.selectors.modeBtn.onclick=()=>{
    if (data.selectors.modeBtn.innerHTML == '🌞') {
        data.selectors.modeBtn.innerHTML = '🌙'
        data.selectors.nav.className = data.mode.light;
    }else{
        data.selectors.modeBtn.innerHTML = '🌞';
        data.selectors.nav.className = data.mode.dark;


    }
}



// localStorage.setItem('a','hello1')
// localStorage.setItem('b','hello2')
// localStorage.removeItem('mykey')
// localStorage.clear()

// document.querySelectorAll('h1')[0].innerHTML = localStorage.getItem('a');
// document.querySelectorAll('h1')[1].innerHTML = localStorage.getItem('b');

