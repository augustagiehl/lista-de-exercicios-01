// Importa e ativa o prompt-sync para ler o que o usuário digitar no terminal
const prompt = require('prompt-sync')()

// Introdução ao usuário
console.log('Vamos descobrir se você esta a cima do peso?')
console.log('Pra isso você precisa informar sua altura e seu peso!')

// Solicita ao usuário sua altura e peso respectivamente, e converte em Number

// Lê a altura e transforma em número
let alturaInput = prompt('Qual sua altura? ');
let altura = parseFloat(alturaInput.replace(',', '.')); //O .replace() é um método que usamos em strings em JavaScript para trocar parte do texto por outra coisa.

// Se for maior que 3, assume que foi digitado em centímetros
if (altura >= 3) {
    altura = altura / 100;
}

//Le o peso e transforma em número
let peso = Number(prompt('Qual seu peso? '))

// Declara a variavel imc e faz o calculo do icm
let imc = (peso / altura ** 2)

// Verifica qual a situação do usuário (imc.toFixed(2) é para mostrar o número com duas casas decimais)
if (imc < 18.5) {
    console.log(`Seu IMC é de ${imc.toFixed(2)} - Seu IMC é "Magreza"!`)

    } else if ((imc > 18.5) && (imc <= 24.9)) {
        console.log(`Seu IMC é de ${imc.toFixed(2)} - Seu peso esta NORMAL!`)

        } else if (imc >= 25 && imc <= 29.9) {
            console.log(`Seu IMC é de ${imc.toFixed(2)} Você está com SOBREPESO`);

            } else if ((imc >= 30) && (imc <= 34.9)) {
                console.log(`Seu IMC é de ${imc.toFixed(2)} Você esta com OBESIDADE GRAU I`)

                } else if ((imc >= 35) && (imc <= 39.9)) {
                    console.log(`Seu IMC é de ${imc.toFixed(2)} Você esta com OBESIDADE GRAU II`)

                    } else if (imc >= 40) {
                        console.log(`Seu IMC é de ${imc.toFixed(2)} Você esta com OBESIDADE GRAU III`)
                    }