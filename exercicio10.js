// Importa o prompt-sync para ler o que o usuário digitar no terminal
const prompt = require('prompt-sync')();

// Lê um número inteiro digitado pelo usuário e converte para tipo Number
let numero = Number(prompt('Digite um número: '));

// Loop que repete 10 vezes (de i = 0 até i < 10)
for (let i = 0; i < 10; i++) {
    // Escreve o número no console a cada repetição
    console.log(numero);
}
