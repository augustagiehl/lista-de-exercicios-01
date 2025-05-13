// Exibe os 10 primeiros números da sequência de Fibonacci

let anterior = 0;
let atual = 1;

console.log('Sequência de Fibonacci (10 primeiros números):');

for (let i = 0; i < 10; i++) {
    console.log(anterior);

    // Calcula o próximo número
    let proximo = anterior + atual;

    // Atualiza os valores para a próxima rodada
    anterior = atual;
    atual = proximo;
}
