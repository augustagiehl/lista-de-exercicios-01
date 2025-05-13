const prompt = require('prompt-sync')();

let total = 0;      // Acumulador da soma dos números
let contador = 0;   // Contador de quantos números foram digitados
let numero;

do {
    numero = Number(prompt('Digite um número DECIMAL (0 para encerrar): '));

    // Se for 0, encerra
    if (numero === 0) break;

    // Se for inteiro, rejeita e pede de novo
    if (numero % 1 === 0) {
        console.log('Número inválido! Digite apenas números decimais.');
        continue;
    }

    // Se for decimal, soma e conta
    total += numero;
    contador++;

} while (true);

// Calcula a média, se tiver pelo menos um número válido
if (contador > 0) {
    let media = total / contador;
    console.log(`A média dos ${contador} números decimais é: ${media.toFixed(2)}`);
} else {
    console.log('Nenhum número decimal válido foi digitado.');
}
