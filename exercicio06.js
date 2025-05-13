// Importa e ativa o prompt-sync para ler o que o usuário digitar no terminal
const prompt = require('prompt-sync')()

// Faz a introdução ao usuário
console.log('Vamos montar um triângulo e descobrir de qual tipo ele é!')

// Declara as variaveis que recebem o valor que o usuário digitar no terminal e converte em numero
let ladoA = Number(prompt('Digite o valor do lado A: '))
let ladoB = Number(prompt('Digite o valor do lado B: '))
let ladoC = Number(prompt('Digite o valor do lado C: '))

// Faz a verificação para ver se os valores formam um triângulo
if (((ladoA + ladoB) > ladoC ) && ((ladoA + ladoC) > ladoB ) && ((ladoB + ladoC) > ladoA )){

// Verificação para ver se o triângulo é equilatero
    if ((ladoA === ladoB) && (ladoB === ladoC)){
        console.log('O triângulo é EQUILATERO')

// Verificação para ver se o triângulo é escaleno
        } else if ((ladoA !== ladoB) && (ladoA !== ladoC) && (ladoB !== ladoC)){
            console.log('O triângulo é ESCALENO')

// Verificação para ver se o triângulo é isoceles
            } else if ((ladoA === ladoB) || (ladoA === ladoC) || (ladoB === ladoC)){
                console.log('O triângulo é ISOCELES')

                }
    
    // Caso os valores passados não formem um triangulo
    } else {
        console.log('Escolha outros números, estes não formam um triângulo!')

        }