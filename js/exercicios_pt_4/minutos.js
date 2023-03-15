

// problema 3
// Leia um valor em minutos, calcule e escreva o equivalente em horas e minutos.

import { question } from "readline-sync"

function main() {
  title('\n===== BEM-VINDO AO CONVERSOR DE MINUTOS EM HORAS/MINUTOS =====')
  
  // Entrada
  const minute = numericInput('Digite um valor em minutos (ex: 1, 12, 24) ---> ')
  
  // Processamento
  const hourMinute = minuteIntoHourMinute(minute)
  
  // Saída
  title('\n========== RELATÓRIO ==========')
  content(`Minutagem escolhida || ${minute} min(s)`)
  content(`Conversão           || ${hourMinute}`)
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

function minuteIntoHourMinute(minuteValue) {
  const minuteAsHour = 60
  const hour = Math.floor(minuteValue / minuteAsHour)
  const minuteLeftover = minuteValue % minuteAsHour
  return `${hour}h:${minuteLeftover}min`
}

function content(contentLabel) {
  print(contentLabel)
}

function footer(footerLabel) {
  print(footerLabel)
}

main()
