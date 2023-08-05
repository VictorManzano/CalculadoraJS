const resultado = document.querySelector('#telaResposta')


// colocar os numeros na tela

function inserir(num) {
    resultado.innerHTML += num;
}

// limpar

function clean() {
    resultado.innerHTML = "";
}

// fazer as operações

function somar() {
    let tela = resultado.innerHTML;

    if(tela) {
        resultado.innerHTML = eval(tela);
    } else {
        resultado.innerHTML = 'nenhum comando'
    }
}

// apagar 1 por vez

function back() {
    let tela = resultado.innerHTML
    resultado.innerHTML = tela.substring(0, tela.length - 1)
}

