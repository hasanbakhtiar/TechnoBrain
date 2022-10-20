function loadDoc(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        document.querySelector('p').innerHTML = this.responseText;
    }
    xhttp.open('GET','../data/letter.txt');
    xhttp.send();
}

document.querySelector('button').onclick = loadDoc;