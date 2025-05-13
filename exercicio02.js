// Importa e ativa o prompt-sync para ler o que o usuário digitar no terminal
const prompt = require('prompt-sync')()

// Solicita ao usuário que informe sua idade
let idade = prompt('Digite sua idade: ')

// Verifica em que faixa etária esta o usuário
if ((idade >= 0) && (idade <= 11)) {
    console.log('Você é uma criança')
} else if ((idade >= 12) && (idade <= 17)) {
    console.log('Você é um adolescente')
} else if ((idade >= 18) && (idade <= 59)) {
    console.log('Você é adulto')
} else {
    console.log('Você é idoso')
}