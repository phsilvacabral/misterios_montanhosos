const nomeUsuario = window.prompt('Qual seu nome, detetive?')
let musica = document.getElementById('music')
musica.play()

// Cenário
const cenarios = {
    inicio: {
        imagem: "imagens/1_inicio.jpg",
        descricao: `<strong>E lá vamos nós para mais um caso de mistério!</strong> <br>${nomeUsuario}, uma mulher nos ligou e disse que o marido dela tinha saído e não voltou mais. Vamos lá. <br>Use as setas laterais e a superior para avançar e a seta inferior para voltar ao cenário anterior. Boa sorte!`,
        esquerda: "penha_left1", 
        direita: "penha_right1",
        acima: "mulher",
        abaixo: null
    },
    penha_left1: {
        imagem: "imagens/1_penha_left.jpg",
        descricao: `<strong>${nomeUsuario}:</strong> Vista linda, porém, temos um mistério para resolver!`,
        esquerda: null,
        direita: null,
        acima: null,
        abaixo: "inicio"
    },
    penha_right1: {
        imagem: "imagens/1_penha_right.jpg",
        descricao: `<strong>${nomeUsuario}:</strong> Vista linda, porém, temos um mistério para resolver!`,
        esquerda: null, 
        direita: null,
        acima: null,
        abaixo: "inicio"
    },
    mulher: {
        imagem: "imagens/2_mulher.jpg",
        descricao: `<strong>Laura:</strong> Bom dia, ${nomeUsuario}. <br><strong>${nomeUsuario}:</strong> Desculpe o atraso, como você está? Me conte mais sobre o ocorrido! <br><strong>Laura:</strong> Hoje, de madrugada, nós acordamos com um barulho muito estranho e alto. Ele foi atrás para descobrir o que aconteceu e não voltou mais. Estou preocupada! <br><strong>${nomeUsuario}:</strong> Ok, irei investigar. Vou começar aqui pela na casa! <br><strong>Laura:</strong> Pois entre!`,
        esquerda: null,
        direita: null,
        acima: "sala",
        abaixo: "inicio"
    },
    sala: {
        imagem: "imagens/3_sala.jpg",
        descricao: `<strong>${nomeUsuario}:</strong> Ok, sala normal, a não ser aquele baú!`,
        esquerda: "quarto",
        direita: "cozinha",
        acima: "arma",
        abaixo: "mulher"
    },
    arma: {
        imagem: "imagens/4_arma.jpg",
        descricao: `<strong>${nomeUsuario}:</strong> Essa arma pode ser últil para mais tarde, vamos pegar!`,
        esquerda: null,
        direita: null,
        acima: null,
        abaixo: "sala"
    },
    cozinha: {
        imagem: "imagens/5_cozinha.jpg",
        descricao: `<strong>${nomeUsuario}:</strong> Estou me sentido fraco, queria comer algo!`,
        esquerda: null,
        direita: null,
        acima: "maca",
        abaixo: "sala"
    },
    maca: {
        imagem: "imagens/6_maca.jpg",
        descricao: `<strong>${nomeUsuario}:</strong> Pode ser uma maçã, já me sinto melhor!`,
        esquerda: null,
        direita: null,
        acima: null,
        abaixo: "cozinha"
    },
    quarto: {
        imagem: "imagens/7_quarto.jpg",
        descricao: `<strong>${nomeUsuario}:</strong> Tudo ok no quarto, vamos ver aquele mapa alí!`,
        esquerda: "mapa",
        direita: null,
        acima: "saida_casa",
        abaixo: "sala"
    },
    mapa: {
        imagem: "imagens/8_mapa.jpg",
        descricao: `<strong>${nomeUsuario}:</strong> Interessante, mas parece uma criança que desenhou! Vamos atrás desse X.`,
        esquerda: null,
        direita: null,
        acima: null,
        abaixo: "quarto"
    },  
    saida_casa: {
        imagem: "imagens/9_saida_casa.jpg",
        descricao: `<strong>${nomeUsuario}:</strong> O que será aquele X? Esse caminho deve dar lá!`,
        esquerda: null,
        direita: null,
        acima: "caminho",
        abaixo: "quarto"
    },
    caminho: {
        imagem: "imagens/12_cam_cav.jpg",
        descricao: `<strong>${nomeUsuario}:</strong> Acho que já posso enxegar, é uma caverna!`,
        esquerda: null,
        direita: "penha_right",
        acima: "entrada_cav",
        abaixo: "saida_casa"
    },
    penha_right: {
        imagem: "imagens/11_penha_right.jpg",
        descricao: `<strong>${nomeUsuario}:</strong> Cuidado, um precipício!`,
        esquerda: null,
        direita: null,
        acima: null,
        abaixo: "caminho"
    },
    entrada_cav: {
        imagem: "imagens/13_entrada_cav.jpg",
        descricao: `<strong>${nomeUsuario}:</strong> Chegamos, que lugar sombrio. Eu nunca entraria aqui atrás de barulho!`,
        esquerda: "penha_left",
        direita: null,
        acima: "dentro_cav",
        abaixo: "caminho"
    },
    penha_left: {
        imagem: "imagens/10_penha_left.jpg",
        descricao: `<strong>${nomeUsuario}:</strong> Lugar cheio de precipícios, cuidado!`,
        esquerda: null,
        direita: null,
        acima: null,
        abaixo: "entrada_cav"
    },
    dentro_cav: {
        imagem: "imagens/14_dentro_cav.jpg",
        descricao: `<strong>${nomeUsuario}:</strong> Por fora não parecia ser grande! Será que ele realmente entrou aqui?!`,
        esquerda: null,
        direita: null,
        acima: "cadaver",
        abaixo: "entrada_cav"
    },
    cadaver: {
        imagem: "imagens/15_cadaver.jpg",
        descricao: `<strong>${nomeUsuario}:</strong> MEU DEUS! Ele não está bem. Mas o que causou isso?`,
        esquerda: "monstro",
        direita: "monstro",
        acima: "monstro",
        abaixo: "monstro"
    },
    monstro: {
        imagem: "imagens/16_monstro.jpg",
        descricao: `<strong>${nomeUsuario}:</strong> QUE BIXO É ESSEEEE!! Terei que lutar. O monstro tirará de 0 a 5 pontos de vida. Clique na tela branca para lutar!`,
        esquerda: null,
        direita: null,
        acima: null,
        abaixo: null
    }
}

let cenaAtual = "inicio"
let vidas = 3

// Função para atualizar a exibição do cenário
function atualizarCenario() {
    const cenario = cenarios[cenaAtual]
    const telacenario = document.getElementById('cenario')
    telacenario.src = cenario.imagem

    const descricaoAtual = cenarios[cenaAtual]
    const telaDescricao = document.getElementById('TelaBranca')
    telaDescricao.innerHTML = `<p>${descricaoAtual.descricao}</p>`

    if (cenaAtual == "maca" || cenaAtual == "arma"){
        if (vidas < 5){
        vidas += 1
        const vidasEmais = document.getElementById('vidasemais')
        const novaVida = document.createElement("img")
        novaVida.src = "imagens/coracao.png"
        vidasEmais.appendChild(novaVida)
        }}
    telaDescricao.addEventListener('click', function(){
        if (cenaAtual == "monstro"){
            let danoMonstro = randint(0, 6)
            let restante = vidas - danoMonstro
            if (restante <= 0){
                telacenario.src = "imagens/fim.jpeg"
                telaDescricao.innerHTML = `<p>O monstro tirou ${danoMonstro} de vida e você morreu!</p>`
                musica.pause()
            } else {
                telacenario.src = "imagens/fim.jpeg"
                telaDescricao.innerHTML = `<p><strong id="parabens">PARABÉNS!</strong><br>O monstro tirou ${danoMonstro} de vida e ainda restaram ${restante}. Temos história para contar!!</p>`
                musica.pause()
            }
        }
    })
}

// Escolher número aleatório para o dano do monstro
function randint(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    let resul = Math.floor(Math.random() * (max - min)) + min
    return Number(resul)
}

// Função para navegar para um novo cenário
function navegar(direcao) {
    const cenario = cenarios[cenaAtual];
    const novoCenario = cenario[direcao];
    
    if (novoCenario !== null) {
        cenaAtual = novoCenario;
        atualizarCenario();
    }
}

// Adicionar evento ao clicar nas setas
document.getElementById('setaesquerda').addEventListener("click", function () {
    navegar("esquerda");
});

document.getElementById('setadireita').addEventListener("click", function () {
    navegar("direita");
});

document.getElementById('setacima').addEventListener("click", function () {
    navegar("acima");
});

document.getElementById('setabaixo').addEventListener("click", function () {
    navegar("abaixo");
});

// Inicializar o cenário
atualizarCenario();

