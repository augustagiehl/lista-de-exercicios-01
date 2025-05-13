//
const prompt = require('prompt-sync')()

console.log('Bem-vindo ao jogo da Escolha Mágica!')
console.log('Diante de você há três portas misteriosas...')
console.log('1- Porta da Floresta')
console.log('2- Porta do Castelo')
console.log('3- Porta da Caverna')


let escolha = prompt('Digite o número da porta: ')
escolha = Number(escolha)

switch (escolha){
    case 1:
        console.log('Parabéns, você encontrou o tesouro escondido!')
        break;
    
    case 2: 
        console.log('Oh não! Você caiu em uma armadilha mágica...')
        break;

    case 3: 
        console.log('Oops, você caiu nas mãos de um ogro!')
        break;
    
    default:
        console.log('Essa opção não é válida!')
}
