

// 2. Leia 2 (dois) números, verifique e escreva o menor e o maior entre os números lidos.

import * as functionDb from "../../functions.js"

function main() {
  
  // Entradas
  // const firstNum = functionDb.numericInput('Informe um primeiro número ---> ')
  // const secondNum = functionDb.numericInput('Informe um segundo número ---> ')
  const firstNum = -10
  const secondNum = 5

  // Processamento
  const bigger = compareValues(firstNum, secondNum, 'bigger')
  const smaller = compareValues(firstNum, secondNum, 'smaller')

  // Saída
  functionDb.title('RELATÓRIO')
  functionDb.content(`Maior valor: ${bigger}`)
  functionDb.content(`Menor valor: ${smaller}`)
  functionDb.footer('FIM DA EXECUÇÃO')
}

function compareValues(v1, v2, category) {
  if (category == 'bigger' && v1 < v2) {
    return v2
  } //
  else if (category == 'bigger' && v1 > v2) {
    return v1
  } //
  else if (category == 'smaller' && v1 < v2) {
    return v1
  } //
  else if (category == 'smaller' && v1 > v2) {
    return v2
  } // 
  if (v1 == v2) {
    return `Valores iguais`
  }
}

main()
