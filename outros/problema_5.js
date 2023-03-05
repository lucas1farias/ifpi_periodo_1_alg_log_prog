

// problema 5
// 5. Leia um número inteiro (3 dígitos), calcule e escreva a soma de seus elementos (C + D + U).

let input = require('readline-sync')
let numberThreeDigits = input.questionInt('Digite um valor inteiro entre 100 a 999 ---> ')
let numberThreeDigitsText = numberThreeDigits.toString()
let numberThreeDigitsSize = numberThreeDigits.toString().length
let threeDigitsMin = 100
let threeDigitsMax = 999

if (numberThreeDigits >= threeDigitsMin && numberThreeDigits <= threeDigitsMax) {
  let sum = 0
  for (let i = 0; i < numberThreeDigitsSize; i++) { 
    sum += Number(numberThreeDigitsText[i])
  }
  console.log('RESULTADO:', sum)
} else {
  console.log('Valores permitidos: 100 até 999')
}
