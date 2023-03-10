

import { question } from "readline-sync"

function main() {
  print('\n===== BEM-VINDO À CALCULADORA DE ÁGUA =====\n')
  const weight = numericInput('Informe o seu peso ---> ')
  const regularAthlete = waterNeeded(weight, 35)
  const intenseAthlete = waterNeeded(weight, 45)
  print('\n===== RELATÓRIO =====')
  print('PESQUISA: Litros de água consumíveis em atividades moderada e intensa')
  print(`Peso do atleta     || ${weight}kg`)
  print(`Categoria moderada || ${regularAthlete}L`)
  print(`Categoria intensa  || ${intenseAthlete}L`)
  print('===== FIM DA EXECUÇÃO =====\n')
}

function print(msg) {
  console.log(msg)
}

function numericInput(text) {
  const element = Number(question(text))
  return element
}

function waterNeeded(weight, waterMlPerKg) {
  const mlToLiter = 1000
  const waterNeeded = ((waterMlPerKg * weight) / mlToLiter).toFixed(2)
  return waterNeeded
}

main()
