var o1 = document.getElementById("l1c1");
var o2 = document.getElementById("l1c2");
var o3 = document.getElementById("l1c3");

var o4 = document.getElementById("l2c1");
var o5 = document.getElementById("l2c2");
var o6 = document.getElementById("l2c3");

var o7 = document.getElementById("l3c1");
var o8 = document.getElementById("l3c2");
var o9 = document.getElementById("l3c3");

var botaoZerar = document.getElementById("zerarPonto");

var botaoResetar = document.getElementById("resetar");

var pontoXplacar = document.getElementById("scoreX");
var pontoOplacar = document.getElementById("scoreO");
var pontoX = null;
var pontoO = null;


var turno = "X";

var turnoText = document.getElementById("turnoAviso");

var objeto = [o1,o2,o3,o4,o5,o6,o7,o8,o9]

o1.addEventListener('click', jogarBot1);
o2.addEventListener('click', jogarBot2);
o3.addEventListener('click', jogarBot3);
o4.addEventListener('click', jogarBot4);
o5.addEventListener('click', jogarBot5);
o6.addEventListener('click', jogarBot6);
o7.addEventListener('click', jogarBot7);
o8.addEventListener('click', jogarBot8);
o9.addEventListener('click', jogarBot9);

document.getElementById("turnoChange").addEventListener('click', mudarTurno);

function jogarBot1(){
     verificaTurno(o1)
    console.log(o1.textContent)}

function jogarBot2(){
    verificaTurno(o2)}

function jogarBot3(){
    verificaTurno(o3)}

function jogarBot4(){
    verificaTurno(o4)}

function jogarBot5(){
    verificaTurno(o5)}

function jogarBot6(){
    verificaTurno(o6)}

function jogarBot7(){
    verificaTurno(o7)}

function jogarBot8(){
    verificaTurno(o8)}

function jogarBot9(){
    verificaTurno(o9)}

function verificaTurno(obj){
    if (turno == "X"){
        obj.textContent = "X"
        turno = "O"
        turnoText.textContent = "O"
    } else if(turno == "O"){
        obj.textContent = "O"
        turno = "X"
        turnoText.textContent = "X"
    }
}

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

botaoZerar.addEventListener('click', zerarPonto);
botaoResetar.addEventListener('click', limparTela);

function zerarPonto(){
    pontoOplacar.textContent = "O: " + 0;
    pontoXplacar.textContent = "X: " + 0;
}

window.onclick = function(){
    verificarVitoria();
}

function verificarVitoria(){
    if (o1.textContent == "X" && o2.textContent == "X" && o3.textContent == "X"){
        limparTela();
        pontoX+=1;
        pontoXplacar.textContent = "X: "+ pontoX;
    } else if(o4.textContent == "X" && o5.textContent == "X" && o6.textContent == "X"){
        limparTela();
        pontoX+=1;
        pontoXplacar.textContent = "X: "+ pontoX;
    } else if (o7.textContent == "X" && o8.textContent == "X" && o9.textContent == "X"){
        limparTela();
        pontoX+=1;
        pontoXplacar.textContent = "X: "+ pontoX;
    } else if(o1.textContent == "X" && o4.textContent == "X" &&o7.textContent == "X"){
        limparTela();
        pontoX+=1;
        pontoXplacar.textContent = "X: "+ pontoX;
    } else if(o2.textContent == "X" && o5.textContent == "X" && o8.textContent == "X"){
        limparTela();
        pontoX+=1;
        pontoXplacar.textContent = "X: "+ pontoX;
    } else if(o3.textContent == "X" && o6.textContent == "X" && o9.textContent == "X"){
        limparTela();
        pontoX+=1;
        pontoXplacar.textContent = "X: "+ pontoX;
    } else if(o1.textContent == "X" && o5.textContent == "X" && o9.textContent == "X"){
        limparTela();
        pontoX+=1;
        pontoXplacar.textContent = "X: "+ pontoX;
    } else if(o3.textContent == "X" && o5.textContent == "X" && o7.textContent == "X"){
        limparTela();
        pontoX+=1;
        pontoXplacar.textContent = "X: "+ pontoX;
    }

    else if (o1.textContent == "O" && o2.textContent == "O" && o3.textContent == "O"){
        limparTela();
        pontoO+=1;
        pontoOplacar.textContent = "O: "+ pontoO;
    } else if(o4.textContent == "O" && o5.textContent == "O" && o6.textContent == "O"){
        limparTela();
        pontoO+=1;
        pontoOplacar.textContent = "O: "+ pontoO;
    } else if (o7.textContent == "O" && o8.textContent == "O" && o9.textContent == "O"){
        limparTela();
        pontoO+=1;
        pontoOplacar.textContent = "O: "+ pontoO;
    } else if(o1.textContent == "O" && o4.textContent == "O" && o7.textContent == "O"){
        limparTela();
        pontoO+=1;
        pontoOplacar.textContent = "O: "+ pontoO;
    } else if(o2.textContent == "O" && o5.textContent == "O" && o8.textContent == "O"){
        limparTela();
        pontoO+=1;
        pontoOplacar.textContent = "O: "+ pontoO;
    } else if(o3.textContent == "O" && o6.textContent == "O" && o9.textContent == "O"){
        limparTela();
        pontoO+=1;
        pontoOplacar.textContent = "O: "+ pontoO;
    } else if(o1.textContent == "O" && o5.textContent == "O" && o9.textContent == "O"){
        limparTela();
        pontoO+=1;
        pontoOplacar.textContent = "O: "+ pontoO;
    } else if(o3.textContent == "O" && o5.textContent == "O" && o7.textContent == "O"){
        limparTela();
        pontoO+=1;
        pontoOplacar.textContent = "O: "+ pontoO;
    }
}

function limparTela(){
    for (let i = 0; i < objeto.length; i++) {
        objeto[i].textContent = null;
    }
}