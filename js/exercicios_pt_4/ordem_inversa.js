

// problema 9
// Leia 2 números (A, B) e escreva-os em ordem inversa (B, A)

import { question } from "readline-sync"

function main() {
  title('\n===== BEM-VINDO AO INVERSOR DE NÚMEROS DE 2 DÍGITOS =====')
  
  // Entrada
  const firstNum = numericInput('Digite um valor ---> ')
  const secondNum = numericInput('Digite outro valor ---> ')
  
  // Processamento
  const numbersBackward = twoDigitsReversed(firstNum, secondNum)
  
  // Saída
  title('\n========== RELATÓRIO ==========')
  content(`Números escolhidos || ${firstNum}${secondNum}`)
  content(`Sua reversão       || ${numbersBackward}`)
  footer('===== FIM DA EXECUÇÃO =====\n')
}

function print(msg) {
  console.log(msg)
}

function title(titleLabel) {
  print(titleLabel)
}

function numericInput(text) {
  const element = Number(question(text))
  return element
}

function twoDigitsReversed(int1, int2) {
  const digitsReversed = int2 + '' + int1
  return digitsReversed
}

function content(contentLabel) {
  print(contentLabel)
}

function footer(footerLabel) {
  print(footerLabel)
}

main()
