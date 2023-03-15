

// problema 21
// Leia uma temperatura em °F, calcule e escreva a equivalente em °C. (t°C = (5 * t°F - 160) / 9).

import { question } from "readline-sync"

function main() {
  title('\n===== BEM-VINDO AO CONVERSOR DE DE TEMPERATURA FAHRENHEIT -> CELSIUS =====')
  
  // Entrada
  const fahrenheitTemp = numericInput('Informe um valor em temperatura fahrenheit ---> ')
  
  // Processamento
  const celsius = fahrenheitToCelsius(fahrenheitTemp)
  
  // Saída
  title('\n========== RELATÓRIO ==========')
  content(`${fahrenheitTemp}°F = ${celsius}°C`)
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

function fahrenheitToCelsius(fahrenTemperature) {
  const calculus = (5 * fahrenTemperature - 160) / 9
  return calculus.toFixed(2)
}

function content(contentLabel) {
  print(contentLabel)
}

function footer(footerLabel) {
  print(footerLabel)
}

main()
