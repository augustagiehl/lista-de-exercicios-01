const prompt = require('prompt-sync')();

let numeroAtual = 0;
let somaAnterioreEAtual = 0;
let numeroAnterior = 0;
let totalFinal = 0;

for (let i = 0; i < 5; i++) {
    numeroAtual = Number(prompt('Digite um número: '));

    // Soma o número atual com o anterior
    somaAnterioreEAtual = numeroAtual + numeroAnterior;

    // Acumula o total das somas
    totalFinal += somaAnterioreEAtual;

    // Atualiza o número anterior para a próxima rodada
    numeroAnterior = numeroAtual;
}

console.log("Total final das somas:", totalFinal);