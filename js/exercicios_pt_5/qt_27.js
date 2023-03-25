

/*
27. Determine a idade de uma pessoa, em anos, meses e dias, dadas a data (dia, mês e ano) do seu
nascimento e a data (dia, mês e ano) atual.
*/

import * as functionDb from "../../functions.js"

function main() {
  // Entradas
  // const birthDay = functionDb.numericInput("Informe o dia do mês que você nasceu ---> ")
  // const birthMonth = functionDb.numericInput("Informe o mês em que você nasceu ---> ")
  // const birthYear = functionDb.numericInput("Informe o ano em que você nasceu ---> ")
  const birthDay = 2
  const birthMonth = 8
  const birthYear = 1995
  const dayNow = 24
  const monthNow = 3
  const yearNow = 2023

  // Processamento
  const yearMonthsAmount = 12
  const personAge = getAge(birthDay, birthMonth, birthYear, dayNow, monthNow, yearNow)
  const personAgeInMonths = personAge * yearMonthsAmount
  const personAgeInDays = Math.round(personAge * 365.24)
  const totalDaysThisYear = getMonthsInDays(monthNow - 1)
  const leftover = Math.abs(Math.round(30.437 - birthDay))
  console.log(personAgeInDays + (totalDaysThisYear + dayNow) - leftover) 
  // console.log(personAge, personAgeInMonths, personAgeInDays)

  // Saída
  functionDb.title("RELATÓRIO")
  // functionDb.content()
  functionDb.footer("FIM DA EXECUÇÃO")
}

function getAge(day, month, year, dayNow, monthNow, yearNow) {
  let age = 0
  let yourAge = yearNow - year
  if (monthNow < month) {
    age = yourAge - 1
  } else if (monthNow > month) {
    age = yourAge
  } 
  // Se for o mesmo mês, precisa verificar o dia
  else {
    if (dayNow == day || dayNow > day) {
      age = yourAge
    } 
    // Se não tiver chegado o dia do mês
    else {
      age = yourAge - 1
    }
  }
  return age
}

function getMonthsInDays(monthsAmount) {
  return Math.round(monthsAmount * 30.437)
}

main()
