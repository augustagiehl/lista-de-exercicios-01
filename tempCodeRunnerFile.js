const prompt = require('prompt-sync')()

let numero = Number(prompt('Digite um número: '))
let temp = 0
let total = 0

for(let i = 0; i < numero; i++){
    
    let fatorial = temp * (numero - 1)
    temp = numero
    total = fatorial * total
    numero = numero - 1


}

console.log(total)