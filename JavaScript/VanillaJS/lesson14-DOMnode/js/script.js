const ol = document.querySelector('ol');
const input = document.querySelector('input');
const btn = document.querySelector('button');


btn.onclick=()=>{
    let li = document.createElement('li');
    li.innerHTML = input.value;
    ol.appendChild(li);
    input.value = '';
    li.onclick = ()=>{
        li.style.textDecoration = 'line-through';
    }
    li.ondblclick = ()=>{
        li.remove();
    }
}
