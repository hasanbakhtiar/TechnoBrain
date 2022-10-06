// document.querySelector('button').addEventListener('mousedown',()=>{
// document.querySelector('button').addEventListener('mouseenter',()=>{
// document.querySelector('button').addEventListener('mouseleave',()=>{
//   document.querySelector('button').addEventListener('mouseup',()=>{
//   document.querySelector('h1').classList.add('a')
//   document.querySelector('h1').classList.remove('a')
//   document.querySelector('h1').classList.toggle('a')
// })


document.querySelector('input').onkeydown=()=>{
  document.querySelector('input').style.backgroundColor = 'red';
  document.querySelector('input').style.transition = '1s';
  document.querySelector('input').style.height = '100px';

}

document.querySelector('input').onkeyup=()=>{
  document.querySelector('input').style.backgroundColor = 'white';
  document.querySelector('input').style.transition = '1s';
  document.querySelector('input').style.height = '30px';

}

document.querySelector('button').onclick=()=>{
  document.querySelector('p').innerHTML = document.querySelector('input').value;
}