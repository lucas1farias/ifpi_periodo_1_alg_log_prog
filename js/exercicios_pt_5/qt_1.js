

// 1. Leia 3 (três) números, verifique e escreva quantos números iguais existem entre os números.

import * as functionDb from "../../functions.js"

function main() {
  // const firstNum = functionDb.numericInput('Informe um primeiro número ---> ')
  // const secondNum = functionDb.numericInput('Informe um segundo número ---> ')
  // const thirdNum = functionDb.numericInput('Informe um terceiro número ---> ')
  const firstNum = 14
  const secondNum = 14
  const thirdNum = 14
  
  // Processamento
  const equals = numberIsEqual(firstNum, secondNum) + numberIsEqual(secondNum, thirdNum) + numberIsEqual(firstNum, thirdNum)
  const combination = `${firstNum} ${secondNum} ${thirdNum}`
  
  // Saída
  functionDb.title('RELATÓRIO')
  if (equals == 1) {
    functionDb.content(`Quantidades de números iguais em "${combination}": ${equals + 1}`)
  } else if (equals == 2) {
    functionDb.content(`Quantidades de números iguais em "${combination}": ${equals - 1}`)
  } else {
    functionDb.content(`Quantidades de números iguais em "${combination}": ${equals}`)
  }
  
  functionDb.footer('FIM DA EXECUÇÃO')
}

function numberIsEqual(v1, v2) {
  if (v1 == v2) {
    return 1
  } else {
    return 0
  }
}

main()
