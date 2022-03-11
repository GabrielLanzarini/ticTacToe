var o1 = document.getElementById("l1c1");
var o2 = document.getElementById("l1c2");
var o3 = document.getElementById("l1c3");

var o4 = document.getElementById("l2c1");
var o5 = document.getElementById("l2c2");
var o6 = document.getElementById("l2c3");

var o7 = document.getElementById("l3c1");
var o8 = document.getElementById("l3c2");
var o9 = document.getElementById("l3c3");

var turnoText = document.getElementById("turnoAviso");

o1.addEventListener('click', jogar);
o2.addEventListener('click', jogar);
o3.addEventListener('click', jogar);
o4.addEventListener('click', jogar);
o5.addEventListener('click', jogar);
o6.addEventListener('click', jogar);
o7.addEventListener('click', jogar);
o8.addEventListener('click', jogar);
o9.addEventListener('click', jogar);

function jogar(){
    if(o1.click){
        if(turno = "X"){
            o1.textContent="X"
        }
        else if(turno = "O"){
            o1.textContent = "O"
        }
    } else if(o2.click){
        alert("teste")
    }
}

var turno = "O";

document.getElementById("turnoChange").addEventListener('click', mudarTurno);

function mudarTurno(){
    switch(turno){
    case "X":
        turno = "O"
        turnoText.textContent = "O"
        break;
    case "O":
        turno = "X"
        turnoText.textContent = "X"
        break;
    }
}


var pontoXplacar = document.getElementById("scoreX");
var pontoOplacar = document.getElementById("scoreO");

var botaoZerar = document.getElementById("zerarPonto");
botaoZerar.addEventListener('click', zerarPonto);

function zerarPonto(){
    pontoOplacar.textContent = "O: " + 0;
    pontoXplacar.textContent = "X: " + 0;
}