// Importa e ativa o prompt-sync para ler o que o usuário digitar no terminal
const prompt = require('prompt-sync')();

// Introduz o programa para o usuário
console.log('Quer descobrir se seu número é par ou ímpar?');

// Pede para o usuário informar um número
let number = prompt('Escreva um número: ');
number = Number(number);

// Verifica se o número é PAR ou ÍMPAR e imprime o resultado
if (number % 2 === 0) {
    console.log(`O número ${number} é PAR`);
} else {
    console.log(`O número ${number} é ÍMPAR`);
}

