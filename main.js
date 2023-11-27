let botoes = document.querySelectorAll(".botao");
let textos = document.querySelectorAll(".aba-conteudo");
var audio;

//let senha = prompt("Insira a palavra chave para desbloquear:");
//senha = senha.toUpperCase();
let senha = "FORMADORES EM PROGRAMAÇÃO";//desbloqueado a exigência de senha.

if(senha === "FORMADORES EM PROGRAMAÇÃO"){
    var tag = document.getElementById("msg-bloqueado");
    tag.style.display = "none";
    var tag = document.getElementById("conteudo-bloqueado");
    tag.style.display = "flex";

    audio = document.getElementById("somPrincipal");
    audio.volume = 0.5;
    var areaReproducao = document.getElementById('msg-bloqueado');
    areaReproducao.addEventListener('mouseover', function() {
        meuAudio.play();
    });
    
}else{
    var tag = document.getElementById("msg-bloqueado");
    tag.outerHTML  = "<h1 class='titulo-principal'>Você não inseriu a palavra chave correta para o desbloqueio, atualize a página e tente novamente<span class='pisca'>_</span></h1>";
}

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
