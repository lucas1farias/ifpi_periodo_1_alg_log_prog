

// problema 26
// Leia um número inteiro de dias, calcule e escreva quantas semanas e quantos dias ele corresponde.

let input = require('readline-sync')

// Entrada
let days = Number(input.question('Digite um valor de dia ---> '))

// Processamento
let week = 7
let remainings = Math.floor(days / week)
let calculus = days - (week * remainings)

// Saída
let title = '\n===== RELATÓRIO =====\n'
let report = title + days + ' dias: ' + remainings + ' semana(s) e ' + calculus + ' dia(s)' + '\n'

console.log(report)
