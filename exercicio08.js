const prompt = require('prompt-sync')()

let valor1 = Number(prompt('Escreva seu primeiro valor: '))
let valor2 = Number(prompt('Escreva seu segundo valor: '))

if (valor1 === valor2){
    console.log('Você digitou dois valores iguais')
}

let valores = [valor1, valor2]

function ordemCrescente(arr){
    let n = arr.length

    for(let i= 0; i < n - 1; i++){
        for(let j = 0; j < n -1 - i; j++){
            if (arr[j] > arr[j + 1]){
                let temp =  arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

let valorFinal = ordemCrescente(valores)
console.log(valorFinal)
