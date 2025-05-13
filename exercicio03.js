// Importa e ativa o prompt-sync para ler o que o usuário digitar no terminal
const prompt = require('prompt-sync')()

// Pede para o usuário informar sua nota
let nota = prompt('Digite sua nota: ')

// Converte o tipo do dado para Float
nota = Number.parseFloat(nota)

// Verifica se o aluno foi APROVADO, esta de RECUPERAÇÃO ou REPROVADO
if ((nota >= 0) && (nota <= 4.9)) {

    console.log('Você está REPROVADO')

} else if ((nota >= 5) && (nota <= 6.9)) {

    console.log('Você está de RECUPERAÇÃO')

} else {

    console.log('Você está APROVADO')
}