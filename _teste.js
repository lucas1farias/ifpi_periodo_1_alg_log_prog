

import { question } from "readline-sync"

function main() {
  title('\n===== BEM-VINDO À ... =====')
  
  // Entrada
  
  // Processamento
  
  // Saída
  title('\n========== RELATÓRIO ==========')
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

function content(contentLabel) {
  print(contentLabel)
}

function footer(footerLabel) {
  print(footerLabel)
}

main()
