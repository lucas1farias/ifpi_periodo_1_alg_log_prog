

// problema 24
// 24. Leia um valor em m, calcule e escreva o equivalente em cm

let input = require('readline-sync')

// Entrada
let value = Number(input.question('Digite um valor em (m) ---> '))

// Processamento
let conversion = 100
let formula = value * conversion

// Saída
let title = '\n===== RELATÓRIO =====\n'
let report = title + value + 'm é o equivalente à: ' + formula + 'cm' + '\n'

console.log(report)
