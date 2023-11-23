let rez = document.getElementById("result")

function shtyp (v){
    rez.textContent+=v;
}

function fshij(){
    rez.textContent= " "
}

function kalkulo(){
    rez.textContent=eval(rez.textContent)
}