// Importa o prompt-sync para permitir a entrada de dados pelo terminal
const prompt = require('prompt-sync')();

// Exibe uma mensagem inicial para o usuário
console.log('Digite um número e descubra sua tabuada completa!');

// Solicita ao usuário que digite um número de 1 a 10 e converte para número
let numero = Number(prompt('Escolha um número de 1 a 10: '));

// Enquanto o número for inválido (menor que 1 ou maior que 10), continua pedindo
while (numero > 10 || numero < 1) {
    numero = Number(prompt('Por favor, escolha um número entre 1 e 10: '));
}

// Laço de repetição para calcular a tabuada do número de 0 a 10
for (let i = 0; i < 11; i++) {
    // Calcula o valor da multiplicação
    let tabuada = numero * i;

    // Exibe o resultado no formato: número x i = resultado
    console.log(`${numero} x ${i} = ${tabuada}`);
}
