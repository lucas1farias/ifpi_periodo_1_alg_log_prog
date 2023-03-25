

// 10. Leia uma data (dia, mês e ano), verifique e escreva se a data é ou não válida.

import * as functionDb from "../../functions.js"

function main() {
  // Entradas
  // const day = functionDb.numericInput("Informe uma data de dia do mês válida (de 26 até 31) ---> ")
  // const month = functionDb.numericInput("Informe uma mês válido (de 1 até 12) ---> ")
  // const year = functionDb.numericInput("Informe um ano válido (de 1 até 9999) ---> ")
  const day = 31
  const month = 4
  const year = 2023 

  // Processamento
  const dateScanned = dateValidator(day, month, year)

  // Saída
  functionDb.title("RELATÓRIO")
  functionDb.content(dateScanned)
  functionDb.content("FIM DA EXECUÇÃO")
}

function dateValidator(d, m, y) {
  const theDate = `${d}/${m}/${y}`
  const invalidDay = d <= 0
  const invalidDayMax = d > 31
  const invalidMonth = m <= 0
  const invalidMonthMax = m > 12
  const invalidYear = y <= 0
  const invalidYearMax = y > 9999 
  const februaryInvalidDayMin = d < 26
  const februaryInvalidDayMax = d > 29
  const dayIsInvalid = `A data ${theDate} é inválida por causa do dia`
  const monthIsInvalid = `A data ${theDate} é inválida por causa do mês`
  const yearIsInvalid = `A data ${theDate} é inválida por causa do ano`
  const correctDate = `A data ${theDate} é uma data em formato válido` 
  
  // Verificação exclusiva p/ o mês Fevereiro
  if (m == 2) {
    if (februaryInvalidDayMin || februaryInvalidDayMax) {
      return dayIsInvalid
    }
  }
  // Tratar dias entre 1 a 31
  else if (invalidDay || invalidDayMax) {
    return dayIsInvalid
  } 
  // Tratar meses entre 1 a 12
  else if (invalidMonth || invalidMonthMax) {
    return monthIsInvalid
  } 
  // Tratar anos entre 1 a 9999
  else if (invalidYear || invalidYearMax) {
    return yearIsInvalid
  }
  
  else {
    // Se fevereiro passou acima, é validado aqui
    if (m == 2) {
      return correctDate
    }
    // Meses até dia 30
    if (d == 31) {
      if (m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12) {
        return monthIsInvalid
      } 
      // Meses com dia 31
      else {
        return correctDate
      }
    }
  }
}

main()
