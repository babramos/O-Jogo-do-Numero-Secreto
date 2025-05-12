let numeroSecreto = numeroAleatorio();
let tentativas = 1


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});
}


function mensagemInicial() {
    exibirTextoNaTela('h1','O jogo do Número Secreto');
    exibirTextoNaTela('p','Escolha um número de 1 a 100');
}

mensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou! Parabéns!');
        let palavraTentativas = tentativas > 1 ? 'tentativas': 'tentativa'; 
        let mensangemTentativas =`Você descobriu o número secreto com ${tentativas} ${palavraTentativas}`;
        exibirTextoNaTela('p', mensangemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        } else {
                if (chute > numeroSecreto) {
                        exibirTextoNaTela('p', 'O número secreto é menor');
                } else {
                        exibirTextoNaTela('p', 'O número secreto é maior');
                }
                tentativas++;
                limparCampo();
            }

}
   
function numeroAleatorio() {
   return  parseInt(Math.random() * 100+ 1);
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
numeroSecreto = numeroAleatorio();
limparCampo();
tentativas = 1;
mensagemInicial();
document.getElementById('reiniciar').setAttribute('disabled',true);
}