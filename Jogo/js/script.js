
var quadro = document.getElementById("pic-principal");
var quadro2 = document.getElementById("pic-over");
var texto = document.getElementById("texto");
var chatbox = document.getElementById("chatbox");
var opcao1 = document.getElementById("opcao-1");
var trilha = document.getElementById("trilha-sonora")
var voice = document.getElementById("voice");


function rosto() {

    document.getElementById('char1').addEventListener('mouseenter', e => {
        document.getElementById('char1').src = "img/char1-smile.png";
        document.getElementById('char2').src = "img/char2-sad.png";
    })
    document.getElementById('char1').addEventListener('mouseleave', e => {
        document.getElementById('char1').src = "img/char1.png";
        document.getElementById('char2').src = "img/char2.png";
})


    document.getElementById('char2').addEventListener('mouseenter', e => {
        document.getElementById('char2').src = "img/char2-smile.png";
        document.getElementById('char1').src = "img/char1-sad.png";
    })
    document.getElementById('char2').addEventListener('mouseleave', e => {
        document.getElementById('char2').src = "img/char2.png";
        document.getElementById('char1').src = "img/char1.png";
    })

}

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
        voice.src = "audio/voice/2.mp3"
    }, 600);

}

function frame2() {
    chatbox.style.backgroundImage = 'url("./img/chat-ipe.png")'
    quadro.src = "img/2.jpg";
    texto.innerHTML = "Está pronto para começar sua aventura?" + `<button onclick="frame3()"><img src="img/arrow.png"></button></p>`;
    voice.src = "audio/voice/3.mp3"
}

function frame3() {
    chatbox.style.backgroundImage = 'url("./img/chat-quem.png")'
    quadro.src = "img/3.jpg"
    texto.innerHTML = "SIMM!!" + `<button onclick="frame4()"><img src="img/arrow.png"></button></p>`;
    voice.src = "audio/voice/4.mp3"
}

function frame4() {
    chatbox.style.backgroundImage = 'url("./img/chat-ipe.png")'
    quadro.src = "img/2.jpg"
    texto.innerHTML = " Vamos andando até a fogueira... Hoje vou contar uma história bem legal" + `<button onclick="frame5()"><img src="img/arrow.png"></button></p>`;
    voice.src = "audio/voice/5.mp3"
}

function frame5() {
    quadro.src = "img/4.jpg"
    texto.innerHTML = "Antes de irmos tenho que dar seu codinome, aqui no acampamento cada pessoa tem um codinome próprio, o seu vai ser Recruta!!" + `<button onclick="frame6()"><img src="img/arrow.png"></button></p>`;
    voice.src = "audio/voice/6.mp3"
}

function frame6() {
    chatbox.style.backgroundImage = 'url("./img/chat-rec.png")'
    quadro.src = "img/3.jpg"
    texto.innerHTML = "Legal!" + `<button onclick="frame7()"><img src="img/arrow.png"></button></p>`;
    voice.src = "audio/voice/7.mp3"
}

function frame7() {
    chatbox.style.backgroundImage = 'url("./img/chat-ipe.png")'
    quadro.src = "img/2.jpg"
    texto.innerHTML = "Agora, para a fogueira!" + `<button onclick="frame8()"><img src="img/arrow.png"></button></p>`;
    voice.src = "audio/voice/8.mp3"
}

function frame8() {

    document.getElementById("black").style.display = "block"

    setTimeout(function () {
        quadro.src = "img/5.gif";
        texto.innerHTML = "Essa é uma história que meu avô me contou e aconteceu nessa região que estamos agora. Ele jura que é uma história verdadeira." + `<button onclick="frame9()"><img src="img/arrow.png"></button></p>`
    }, 620)

    setTimeout(function () { document.getElementById("black").style.opacity = "0" }, 2000)  

    setTimeout(function () {
        trilha.src = "audio/fogueira.mp3" 
        voice.src = "audio/voice/9.mp3"
    }, 2000)
    
    

}

function frame9() {
    quadro.src = "img/6.gif";
    texto.innerHTML = `Há muito tempo atrás existia uma grande tribo indígena que vivia aos arredores da floresta tupi, essa tribo vivia da terra, só comiam coisas saudáveis.` + `<button onclick="frame9meio()"><img src="img/arrow.png"></button></p>`;
    voice.src = "audio/voice/10.mp3"
}

function frame9meio() {
    texto.innerHTML = `Um dia, uma das pessoas dessas tribo teve um sonho, que o espírito da mãe natureza estava pedindo ajuda deles para manter nosso planeta em equilíbrio.` + `<button onclick="frame10()"><img src="img/arrow.png"></button></p>`;
    voice.src = "audio/voice/11.mp3"
}

function frame10() {
    quadro.src = "img/7.gif";
    texto.innerHTML = `Ela contou que os filhos dela, os espíritos da água, do vento, do fogo e da terra, estavam prestes a entrar em uma crise, por causa das queimadas,
desmatamentos, lixo e a poluição do ar ` + `<button onclick="frame11()"><img src="img/arrow.png"></button></p>`;

    document.getElementById("black").style.display = "none"
    document.getElementById("black").style.opacity = "1"
    voice.src = "audio/voice/12.mp3"
}

function frame11() {
    quadro.src = "img/8.gif";
    texto.innerHTML = `E pediu para restabelecer o equilíbrio que havia perdido` + `<button onclick="frame12()"><img src="img/arrow.png"></button></p>`;
    voice.src = "audio/voice/13.mp3"
}

function frame12() {
    quadro.src = "img/7.gif";
    texto.innerHTML = ` Pela manhã, ele ouviu falar que na cidade próxima
aconteceu uma enchente muito grande e que não sabiam o porque dela. A tribo foi
até o rio e descobriu que ele estava cheio de lixo.` + `<button onclick="frame13()"><img src="img/arrow.png"></button></p>`;
voice.src = "audio/voice/14.mp3"
}

function frame13() {
    quadro.src = "img/5.gif";
    texto.innerHTML = `Então foram até as margens e começaram a limpeza. Assim que terminaram, os peixes voltaram a viver por lá, e nunca mais
houveram enchentes` + `<button onclick="frame14()"><img src="img/arrow.png"></button></p>`;
voice.src = "audio/voice/15.mp3"
}

function frame14() {
    texto.innerHTML = `E Então, a mãe natureza deu para eles a missão de proteger a natureza e se
transformarem em animais.` + `<button onclick="frame15()"><img src="img/arrow.png"></button></p>`;
voice.src = "audio/voice/16.mp3"
}

function frame15() {
    texto.innerHTML = `Ninguém nunca mais viu essa tribo, dizem que eles estão por aí, protegendo a natureza e nosso planeta, e eles são chamados de Eco
Guardians.` + `<button onclick="frame16()"><img src="img/arrow.png"></button></p>`;
voice.src = "audio/voice/17.mp3"
}

function frame16() {
    quadro.src = "img/9.gif";
    chatbox.style.backgroundImage = 'url("./img/chat-rec.png")';
    texto.innerHTML = `Uau, que história incrível. Um dia eu quero ser um Eco Guardian
também.` + `<button onclick="frame17()"><img src="img/arrow.png"></button></p>`;
voice.src = "audio/voice/18.mp3"
}

function frame17() {

    document.getElementById("black").style.display = "block"

    setTimeout(function () {
        chatbox.style.backgroundImage = 'url("./img/chat-rec2.png")';
        quadro.src = "img/10.jpg";
        texto.innerHTML = "Onde tá todo mundo? Acho que estou vendo a sombra de alguém perto das árvores…" + `<button onclick="frame18()"><img src="img/arrow.png"></button></p>`
    }, 620)

    setTimeout(function () { document.getElementById("black").style.opacity = "0" }, 2000)

    setTimeout(function () {
        trilha.src = "audio/floresta.mp3" 
        voice.src = "audio/voice/19.mp3"
    }, 2300)
}

function frame18() {
    quadro.src = "img/11.jpg";
    chatbox.style.backgroundImage = 'url("./img/chat-quem.png")';
    texto.innerHTML = `Olá, não está atrasado para as atividades com o Professor Ipê?` + `<button onclick="frame19()"><img src="img/arrow.png"></button></p>`;
    voice.src = "audio/voice/20.mp3"
}

function frame19() {
    quadro.src = "img/12.jpg";
    chatbox.style.backgroundImage = 'url("./img/chat-rec2.png")';
    texto.innerHTML = `VOCÊ FALA?` + `<button onclick="frame20()"><img src="img/arrow.png"></button></p>`;
    voice.src = "audio/voice/21.mp3"
}

function frame20() {
    quadro.src = "img/11.jpg";
    chatbox.style.backgroundImage = 'url("./img/chat-leo.png")';
    texto.innerHTML = `Sim! Sou um Eco Guardian, meu nome é Leãonardo mas pode me chamar de Leo!` + `<button onclick="frame21()"><img src="img/arrow.png"></button></p>`;
    voice.src = "audio/voice/22.mp3"
}

function frame21() {
    quadro.src = "img/12.jpg";
    chatbox.style.backgroundImage = 'url("./img/chat-rec2.png")';
    texto.innerHTML = ` Que incrível, então aquela lenda é real? ` + `<button onclick="frame22()"><img src="img/arrow.png"></button></p>`;
    voice.src = "audio/voice/23.mp3"
}

function frame22() {
    quadro.src = "img/11.jpg";
    chatbox.style.backgroundImage = 'url("./img/chat-leo.png")';
    texto.innerHTML = `Sim! E talvez você possa ser meu ajudante na próxima missão! Tenho que ir, mas vou observar suas escolhas para saber se você pode me ajudar` + `<button onclick="frame23()"><img src="img/arrow.png"></button></p>`;
    voice.src = "audio/voice/24.mp3"
}

function frame23() {
    quadro.src = "img/12.jpg";
    chatbox.style.backgroundImage = 'url("./img/chat-rec2.png")';
    texto.innerHTML = `Qual é sua missão ? ` + `<button onclick="frame24()"><img src="img/arrow.png"></button></p>`;
    voice.src = "audio/voice/25.mp3"
}

function frame24() {
    quadro.src = "img/11.jpg";
    chatbox.style.backgroundImage = 'url("./img/chat-leo.png")';
    texto.innerHTML = `Proteger a Mãe Natureza.` + `<button onclick="frame25()"><img src="img/arrow.png"></button></p>`;
    voice.src = "audio/voice/26.mp3"
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
    document.getElementById("btn-opcao-1").style.pointerEvents = "none";

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
        voice.src = "audio/voice/leao-final-bom.mp3"
    }, 3700)
    

}

function frame26(){
    voice.src = "audio/voice/leao-final-bom-2.mp3"
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
        voice.src = "audio/voice/leao-final-ruim.mp3"
    }, 3700)
    
}

function frame27(){
    quadro2.style.display="none";
    chatbox.style.backgroundImage = 'url("./img/chat-rec2.png")';
    texto.innerHTML = `Vou aprender com essa lição e nunca mais jogar o lixo no chão, e espero que possa repetir esse teste.` + `<a href="../home.html""><h2 id="voltar-home-2">Voltar para o inicio <img src="img/sair.png"> </h2></a>`;
    voice.src = "audio/voice/recruta-final-ruim.mp3"

}

function classToggle() {
    this.classList.toggle('desligado');
    var trilha = document.getElementById("trilha-sonora");
    var voice = document.getElementById("voice");
    var musicBtn = document.querySelector('#musicBtn');
    var voiceBtn = document.querySelector('#voiceBtn');

    if(musicBtn.classList.contains("desligado")){
        console.log("Desligado - Trilha Sonora")
        musicBtn.src = "img/music-off.png"
        trilha.volume = "0.0"
    }else{
        console.log("Ligado - Trilha Sonora")
        musicBtn.src = "img/music-on.png"
        trilha.volume = "0.5"
    }

    
    if(voiceBtn.classList.contains("desligado")){
        console.log("Desligado - Voice")
        voiceBtn.src = "img/audio-off.png"
        voice.volume = "0.0"
    }else{
        console.log("Ligado - Voice")
        voiceBtn.src = "img/audio-on.png"
        voice.volume = "1.0"
    }





}

document.querySelector('#musicBtn').addEventListener('click', classToggle);
document.querySelector('#voiceBtn').addEventListener('click', classToggle);

voice.src="audio/voice/1.mp3";
trilha.src="audio/floresta.mp3";
voice.volume = "1.0";
trilha.volume = "0.5";

function comecar(){

document.getElementById("black-inicio").style.opacity = "0";
trilha.play();
trilha.autoplay = "true";

setTimeout(function () { document.getElementById("black-inicio").style.display = "none"; 


setTimeout(function () { document.getElementById("abertura").style.animationPlayState = "running"}, 1100) 

setTimeout(function () { document.getElementById("comeco").style.display = "none"
voice.play();
voice.autoplay = "true";
}, 1950) 

}, 801)  


}
