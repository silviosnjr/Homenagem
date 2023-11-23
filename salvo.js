let botoes = document.querySelectorAll(".botao");
let textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
        botoes.forEach(element => {
            element.classList.remove("ativo");
        });

        textos.forEach(element => {
            element.classList.remove("ativo");
        });
        
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

var i = 0;
// var A = 0;
var tag = document.getElementById("texto-animado");
var html = document.getElementById("texto-animado").innerHTML;
var attr = tag.setAttribute("data", html);
var txt = tag.getAttribute("data");
var speed = 170;

function typeWriter() {
    if (i <= txt.length) {
        document.getElementById("texto-animado").innerHTML = txt.slice(0 , i + 1);
        i++;
        setTimeout(typeWriter, speed);
    }
    console.log(document.getElementById("texto-animado").innerHTML);
}

typeWriter();
