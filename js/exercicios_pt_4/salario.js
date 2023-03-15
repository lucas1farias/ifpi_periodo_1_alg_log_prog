

// problema 12
// Leia o salário de um trabalhador e escreva seu novo salário com um aumento de 25%.

import { question } from "readline-sync"

function main() {
  title('\n===== BEM-VINDO à CALCULADORA DE ACRÉSCIMO DE SALÁRIO ... =====')
  
  // Entrada
  const personSalary = numericInput('Informe o valor do salário ---> ')
  const percentageRaise = numericInput('Informe o número inteiro da porcentagem do reajuste ---> ')
  
  // Processamento
  const personSalaryRaise = valueIncreasedByPercentage(personSalary, percentageRaise)
  const personNewSalary = personSalary + personSalaryRaise
  
  // Saída
  title('\n========== RELATÓRIO ==========')
  content(`Salário atual || $ ${personSalary}`)
  content(`Acréscimo     || $ ${personSalaryRaise} (${percentageRaise}%)`)
  content(`Salário novo  || $ ${personNewSalary}`)
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

function valueIncreasedByPercentage(targetValue, percentage) {
  const valueIncreased = targetValue * (percentage / 100)
  return valueIncreased
}

function content(contentLabel) {
  print(contentLabel)
}

function footer(footerLabel) {
  print(footerLabel)
}

main()
