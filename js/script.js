var fotoProjeto1 = document.querySelector('#fotoProjeto1');
var fotoProjeto2 = document.querySelector('#fotoProjeto2');

var setaDireita = document.querySelector('#setaDireita');
var setaEsquerda = document.querySelector('#setaEsquerda');


function rolarParaDireita() {
    fotoProjeto1.style = "display: none";
    fotoProjeto2.style = "display: flex";
    setaDireita.style = "display: none";
    setaEsquerda.style = "display: flex";
}

function rolarParaEsquerda() {
    fotoProjeto1.style = "display: flex";
    fotoProjeto2.style = "display: none";
    setaDireita.style = "display: flex";
    setaEsquerda.style = "display: none";
}