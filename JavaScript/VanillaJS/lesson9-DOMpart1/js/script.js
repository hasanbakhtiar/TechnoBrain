// for(let x=0;x<7;x++){
//     document.getElementsByTagName('h1')[x].innerHTML = "new value1";
// }


// document.getElementById('text').innerHTML = "new value2";
// document.getElementsByClassName('test')[0].innerHTML = 'new value3';
// document.getElementsByTagName('h2')[0].attributes[0].value = 'text1';

// Query Selectors
// document.querySelector("h2").innerHTML = 'a';
// document.querySelectorAll("h2")[0].innerHTML = 'a';

const btn = document.querySelector('button');
const text = document.querySelector('h1');


const info =()=>{
    if (text.innerHTML === "Hello") {
        text.innerHTML = "Bye"
    }else{
        text.innerHTML = "Hello";
    }
}

// btn.addEventListener('click',info);
btn.onclick = info;



