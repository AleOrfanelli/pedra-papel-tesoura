var pedra = document.getElementById('pedra')
var papel = document.getElementById('papel')
var tesoura = document.getElementById('tesoura')

var imgpc = document.getElementById('pc')

var placar = document.getElementById('placar')

function jogar() {
    var pc = Math.floor(Math.random() * 3 + 1)

    if (pedra.checked == false && papel.checked == false && tesoura.checked == false) {
        alert('Selecione uma opção')
    } else {
        switch (pc) {
            case 1: {
                imgpc.src = "img/pedra-pc.png";
                break;
            }
            case 2: {
                imgpc.src = "img/papel-pc.png";
                break;
            }
            case 3: {
                imgpc.src = "img/tesoura-pc.png";
                break;

            }
        }
    }

    if (pedra.checked && pc == 1 || papel.checked && pc == 2 || tesoura.checked && pc == 3) {
        placar.innerHTML = 'Empate'
        placar.setAttribute('id', 'placar-empate')
    } else if (pedra.checked && pc == 3 || papel.checked && pc == 1 || tesoura.checked && pc == 2) {
        placar.innerHTML = 'Jogador Venceu'
        placar.setAttribute('id', 'placar-j')

    } else if (pedra.checked && pc == 2 || papel.checked && pc == 3 || tesoura.checked && pc == 1) {
        placar.innerHTML = 'Computador Venceu'
        placar.setAttribute('id', 'placar-pc')
    } else {
        placar.innerHTML = 'RESULTADO'
        placar.setAttribute('id', 'placar')
    }

}

function limpar() {
    imgpc.src = "img/pc.png";
    placar.innerHTML = 'RESULTADO'
    document.querySelector('form').reset();
    placar.setAttribute('id', 'placar')
}