
function insertPics() {

    document.getElementById('container-medalha').innerHTML += `<img title="Protetor da Mãe Natureza" src="img/medal.png" >`
    for (let i = 0; i <= 90; i++) {

        document.getElementById('container-medalha').innerHTML += `<img src="img/medaltemp.png" style="box-shadow:none">`

    }
}

var ilustra = document.getElementById('illustra');

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

    function comecar() {
        document.getElementById("black").style.display = "block";
        setTimeout(function () { document.getElementById("black").style.animationPlayState = "running" }, 400);
        ilustra.style.animationPlayState = "running"
        setTimeout(function () { document.getElementById("black").style.animationPlayState = "running" }, 1000);
        setTimeout(function () { document.getElementById("container-escolhas").style.animationPlayState = "running" }, 1500);
    }

    
    function fecharLei(){
        document.getElementById("container-lei").style.opacity="0"
        setTimeout(function () { document.getElementById("container-lei").style.display="none" }, 401);
        }
        function abrirLei(){
        document.getElementById("container-lei").style.display="block"
        setTimeout(function () { document.getElementById("container-lei").style.opacity="1" }, 10);
        }
