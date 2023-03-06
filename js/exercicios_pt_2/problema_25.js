

// problema 25
// Leia um número inteiro de metros, calcule e escreva quantos Km e quantos metros ele corresponde

let input = require('readline-sync')

// Entrada
let value = Number(input.question('Digite um valor exato em metros ---> '))

// Processamento
let conversion = 0.001
let formula = value * conversion

// Saída
let title = '\n===== RELATÓRIO =====\n'
let report = title + value + 'm é o equivalente à: ' + formula + 'km'

console.log(report)
