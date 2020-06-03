
var quadro = document.getElementById("pic-principal");
var quadro2 = document.getElementById("pic-over");
var texto = document.getElementById("texto");
var chatbox = document.getElementById("chatbox");
var opcao1 = document.getElementById("opcao-1");

function olhar(){

    if (document.getElementById('btn-opcao-1')) {
        document.getElementById('btn-opcao-1').addEventListener('mouseenter', e => {
            quadro.src= "img/15-2.jpg";
        })
        document.getElementById('btn-opcao-1').addEventListener('mouseleave', e => {
            quadro.src= "img/15.jpg";
        })
    }
    
    if (document.getElementById('btn-opcao-2')) {
        document.getElementById('btn-opcao-2').addEventListener('mouseenter', e => {
            quadro.src= "img/15-3.jpg";
        })
        document.getElementById('btn-opcao-2').addEventListener('mouseleave', e => {
            quadro.src= "img/15.jpg";
        })
    }


}



function frame1() {

    quadro2.style.display = "block";

    setTimeout(function () {
        chatbox.style.backgroundImage = 'url("./img/chat-quem.png")';
        texto.innerHTML = "Uau, Que lugar incrível!!" + `<button onclick="frame2()"><img src="img/arrow.png"></button></p>`;
        quadro.src = "img/3.jpg";
        quadro2.style.display = "none";
    }, 600);

}

function frame2() {
    chatbox.style.backgroundImage = 'url("./img/chat-ipe.png")'
    quadro.src = "img/2.jpg";
    texto.innerHTML = "Está pronto para começar uma aventura?" + `<button onclick="frame3()"><img src="img/arrow.png"></button></p>`;
}

function frame3() {
    chatbox.style.backgroundImage = 'url("./img/chat-quem.png")'
    quadro.src = "img/3.jpg"
    texto.innerHTML = "SIMM!!" + `<button onclick="frame4()"><img src="img/arrow.png"></button></p>`;
}

function frame4() {
    chatbox.style.backgroundImage = 'url("./img/chat-ipe.png")'
    quadro.src = "img/2.jpg"
    texto.innerHTML = " Vamos andando para a fogueira... Hoje vou contar uma história bem legal" + `<button onclick="frame5()"><img src="img/arrow.png"></button></p>`;
}

function frame5() {
    quadro.src = "img/4.jpg"
    texto.innerHTML = "Antes de irmos tenho que dar seu codinome, aqui no acampamento cada pessoa tem um, o seu vai ser Recruta!!" + `<button onclick="frame6()"><img src="img/arrow.png"></button></p>`;
}

function frame6() {
    chatbox.style.backgroundImage = 'url("./img/chat-rec.png")'
    quadro.src = "img/3.jpg"
    texto.innerHTML = "Legal!" + `<button onclick="frame7()"><img src="img/arrow.png"></button></p>`;
}

function frame7() {
    chatbox.style.backgroundImage = 'url("./img/chat-ipe.png")'
    quadro.src = "img/2.jpg"
    texto.innerHTML = "Agora, para a fogueira!" + `<button onclick="frame8()"><img src="img/arrow.png"></button></p>`;
}

function frame8() {

    document.getElementById("black").style.display = "block"

    setTimeout(function () {
        quadro.src = "img/5.jpg";
        texto.innerHTML = "Essa é uma história que meu avô me contou e aconteceu nessa região que estamos agora. Ele jura que é verdadeira." + `<button onclick="frame9()"><img src="img/arrow.png"></button></p>`
    }, 620)

    setTimeout(function () { document.getElementById("black").style.opacity = "0" }, 2000)

}

function frame9() {
    quadro.src = "img/6.jpg";
    texto.innerHTML = `A muito tempo atrás existia uma grande tribo indígena que vivia aos arredores da floresta tupi, essa tribo vivia da terra, só comia coisas saudáveis.` + `<button onclick="frame10()"><img src="img/arrow.png"></button></p>`;
}

function frame10() {
    quadro.src = "img/7.jpg";
    texto.innerHTML = `Ela contou que os filhos dela, os espíritos da água, do vento, do fogo e do ar, estavam prestes a entrar em uma crise, por causa das queimadas,
desmatamentos, lixo e a poluição do ar ` + `<button onclick="frame11()"><img src="img/arrow.png"></button></p>`;

    document.getElementById("black").style.display = "none"
    document.getElementById("black").style.opacity = "1"
}

function frame11() {
    quadro.src = "img/8.jpg";
    texto.innerHTML = `E nos pediu ajuda para ajudar a restabelecer esse equilíbrio` + `<button onclick="frame12()"><img src="img/arrow.png"></button></p>`;
}

function frame12() {
    quadro.src = "img/7.jpg";
    texto.innerHTML = ` Pela manhã, ele ouviu falar que na cidade próxima
aconteceu uma enchente muito grande e que não sabiam o porque. A tribo foi
até o rio e descobriu que ele estava cheio de lixo.` + `<button onclick="frame13()"><img src="img/arrow.png"></button></p>`;
}

function frame13() {
    quadro.src = "img/5.jpg";
    texto.innerHTML = `Então foram até as margens e começaram a limpeza. Os peixes voltaram a viver por lá, e nunca mais
houveram enchentes` + `<button onclick="frame14()"><img src="img/arrow.png"></button></p>`;
}

function frame14() {
    texto.innerHTML = `Então, a mãe natureza deu para eles a missão de proteger a natureza e se
transformarem em animais.` + `<button onclick="frame15()"><img src="img/arrow.png"></button></p>`;
}

function frame15() {
    texto.innerHTML = `Ninguém nunca mais viu essa tribo, dizem que eles estão por aí, protegendo a natureza e nosso planeta, e são chamados de Eco
Guardians.` + `<button onclick="frame16()"><img src="img/arrow.png"></button></p>`;
}

function frame16() {
    quadro.src = "img/9.jpg";
    chatbox.style.backgroundImage = 'url("./img/chat-rec.png")';
    texto.innerHTML = `Uau, que história incrível. Um dia quero ser um Eco Guardian
também.` + `<button onclick="frame17()"><img src="img/arrow.png"></button></p>`;
}

function frame17() {

    document.getElementById("black").style.display = "block"

    setTimeout(function () {
        chatbox.style.backgroundImage = 'url("./img/chat-rec2.png")';
        quadro.src = "img/10.jpg";
        texto.innerHTML = "Onde está todo mundo? Acho que estou vendo a sombra de alguém perto das árvores…" + `<button onclick="frame18()"><img src="img/arrow.png"></button></p>`
    }, 620)

    setTimeout(function () { document.getElementById("black").style.opacity = "0" }, 2000)
}

function frame18() {
    quadro.src = "img/11.jpg";
    chatbox.style.backgroundImage = 'url("./img/chat-quem.png")';
    texto.innerHTML = `Olá, não está atrasado para as atividades com o Professor Ipê?` + `<button onclick="frame19()"><img src="img/arrow.png"></button></p>`;
}

function frame19() {
    quadro.src = "img/12.jpg";
    chatbox.style.backgroundImage = 'url("./img/chat-rec2.png")';
    texto.innerHTML = `VOCÊ FALA?` + `<button onclick="frame20()"><img src="img/arrow.png"></button></p>`;
}

function frame20() {
    quadro.src = "img/11.jpg";
    chatbox.style.backgroundImage = 'url("./img/chat-leo.png")';
    texto.innerHTML = `Sim! Sou um Eco Guardian, meu nome é Leãonardo mas pode me chamar de Leo!` + `<button onclick="frame21()"><img src="img/arrow.png"></button></p>`;
}

function frame21() {
    quadro.src = "img/12.jpg";
    chatbox.style.backgroundImage = 'url("./img/chat-rec2.png")';
    texto.innerHTML = ` Que incrível, então aquela lenda é real? ` + `<button onclick="frame22()"><img src="img/arrow.png"></button></p>`;
}

function frame22() {
    quadro.src = "img/11.jpg";
    chatbox.style.backgroundImage = 'url("./img/chat-leo.png")';
    texto.innerHTML = `Sim! E talvez você possa ser meu ajudante na próxima missão! Tenho que ir, mas vou observar suas escolhas para saber se você pode me ajudar` + `<button onclick="frame23()"><img src="img/arrow.png"></button></p>`;
}

function frame23() {
    quadro.src = "img/12.jpg";
    chatbox.style.backgroundImage = 'url("./img/chat-rec2.png")';
    texto.innerHTML = `Qual é sua missão ? ` + `<button onclick="frame24()"><img src="img/arrow.png"></button></p>`;
}

function frame24() {
    quadro.src = "img/11.jpg";
    chatbox.style.backgroundImage = 'url("./img/chat-leo.png")';
    texto.innerHTML = `Proteger a Mãe Natureza.` + `<button onclick="frame25()"><img src="img/arrow.png"></button></p>`;
}

function frame25() {
    texto.innerHTML = "";
    chatbox.style.opacity = "0";
    quadro2.src = "img/13.jpg"
    setTimeout(function () {
        quadro2.style.display = "block";
    }, 600)

    setTimeout(function () {
        quadro.src = "img/13.jpg";
        quadro2.style.display = "none";
        quadro2.style.opacity = "0";
    }, 900)

    setTimeout(function () {
        quadro2.src = "img/14.jpg";
        quadro2.style.display = "block";
    }, 1200)

    setTimeout(function () {
        quadro2.src = "img/15.jpg";
        quadro.src = "img/15.jpg";
    }, 2200)

    setTimeout(function () {
        quadro2.style.display="none";
        document.getElementById("opcoes").style.display="grid";
    }, 3100)

}

function finalBom(){

    quadro2.src = "img/17.jpg";

    document.getElementById("black").style.opacity = "1"
    document.getElementById("black").style.display = "block"

    setTimeout(function () {
        document.getElementById("opcoes").style.display ="none";
        quadro.src = "img/16.jpg";
    }, 620)

    setTimeout(function () { document.getElementById("black").style.opacity = "0" }, 2000)

    setTimeout(function () {
        quadro2.style.display ="block";
    }, 2600)

    setTimeout(function () {
        quadro2.src = "img/18.jpg";
        quadro.src= "img/17.jpg"
        document.getElementById("texto-fim-ctn").style.display ="block";
    }, 3700)
    

}

function frame26(){
    quadro2.style.display ="none";
    document.getElementById("texto-fim-ctn").style.display ="none";
    document.getElementById("medal-overlay").style.display="block";
    setTimeout(function () { document.getElementById("sair").style.display="block"; }, 1200)
}


function finalRuim(){
    document.getElementById("btn-opcao-1").style.pointerEvents="none";
    document.getElementById("btn-opcao-2").style.pointerEvents="none";
    texto.innerHTML = `Estou chateado… Os Eco Guardians tem o dever de proteger o meio ambiente e você tomou a decisão errada. Infelizmente não foi dessa vez, talvez
    na próxima missão!` + `<button onclick="frame27()"><img src="img/arrow.png"></button></p>`
    chatbox.style.backgroundImage = 'url("./img/chat-leo.png")';

    document.getElementById("black").style.opacity = "1"
    document.getElementById("black").style.display = "block"

    setTimeout(function () {
        document.getElementById("opcoes").style.display ="none";
        quadro.src= "img/16-2.jpg"
        quadro2.src = "img/17-2.jpg";
    }, 620)

    setTimeout(function () { document.getElementById("black").style.opacity = "0" }, 2000)

    setTimeout(function () {
        quadro2.style.display ="block";
    }, 2600)

    setTimeout(function () {
        quadro2.src = "img/19.jpg";
        quadro.src= "img/20.jpg";
        chatbox.style.display = "block";
        chatbox.style.opacity= "1";
    }, 3700)

}

function frame27(){
    quadro2.style.display="none";
    chatbox.style.backgroundImage = 'url("./img/chat-rec2.png")';
    texto.innerHTML = `Vou aprender com essa lição e nunca mais jogar o lixo no chão, e espero que possa repetir esse teste.` + `<a href="../home.html""><h2 id="voltar-home-2">Voltar para Home <img src="img/sair.png"> </h2></a>`

}
