// Importa e ativa o prompt-sync para ler o que o usuário digitar no terminal
const prompt = require('prompt-sync')()

// Realiza a introdução ao usuário
console.log('Maçãs por R$ 0,30 a unidade.')
console.log('Na compra de 12 ou mais maçãs a undade sai por R$ 0,25! ')

// Declara a variavel do valor das maçãs
let valorMacas = 0

// Declara a variavel do numero de maçãs e converte para número
let numeroDeMacas = Number(prompt('Quantas maçãs deseja? '))

//Verificação para ver se a quantidade de maçãs é maior ou igual a 12 
if (numeroDeMacas >= 12 ){
    valorMacas = numeroDeMacas * 0.25
    console.log(`O total de ${numeroDeMacas} maçãs deu R$ ${valorMacas}`)

    //Verificação para ver se a quantidade de maçãs é maior que 0 e menor que 12
    } else if ( (numeroDeMacas > 0) && (numeroDeMacas < 12)){
        valorMacas = numeroDeMacas * 0.30
        console.log(`O total de ${numeroDeMacas} maçãs deu R$ ${valorMacas}`)
    } 