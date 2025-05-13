const prompt = require('prompt-sync')();

console.log('Vamos descobrir o fatorial dos números?');

let numero = Number(prompt('Digite um número: '));
let total = 1; // Começa com 1 porque 0 anula a multiplicação

// Loop de i = numero até 1 (contagem regressiva)
for (let i = numero; i >= 1; i--) {
    total *= i; // total = total * i
}

console.log(`O fatorial de ${numero} é: ${total}`);