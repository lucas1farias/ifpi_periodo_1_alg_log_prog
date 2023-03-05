

// Leia 2 (duas) frações (numerador e denominador), calcule e escreva a soma destas frações, 
// escrevendo o resultado em forma de fração.

let input = require('readline-sync')

let numerador1 = 2
let numerador2 = 1
let denominador1 = 3
let denominador2 = 4

// Multiplicação dos denominadores p/ determinar o novo valor do denominador
let denominadorCalculus = denominador1 * denominador2

// Divide o denominador principal pelos das frações e multiplica pelo numerador das mesmos
let numerador1Calculus = (denominadorCalculus / denominador1) * numerador1

let numerador2Calculus = (denominadorCalculus / denominador2) * numerador2

// Soma os dois novos resultados dos numerados achados
let numeradorProdutos = numerador1Calculus + numerador2Calculus

// Junta o dado do numerador seguido do denominador
let fractionCalculus = numeradorProdutos + '/' + denominadorCalculus

console.log(fractionCalculus)
