let botoes = document.querySelectorAll(".botao");
let textos = document.querySelectorAll(".aba-conteudo");
var audio;

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
        var id = "texto-animado"+i;
        var tag = document.getElementById(id);
        var html = document.getElementById(id).innerHTML;
        var attr = tag.setAttribute("data", html);
        var txt = tag.getAttribute("data");
        j=0;
        tag.style.display = "inline-block";
        if(audio){audio.pause();}
        audio = document.getElementById("som"+i);
        audio.volume = 0.5;
        audio.play();
        typeWriter(id, txt);
    }
}

var j = 0;
var speed = 50;

function typeWriter(id, txt) {    
    if (j <= txt.length) {
        document.getElementById(id).innerHTML = txt.slice(0 , j + 1);
        j++;
        setTimeout(function(){
            typeWriter(id, txt);
        }, speed);
    }
    //console.log(id+" "+document.getElementById(id).innerHTML);
}

//typeWriter("texto-animado0");
