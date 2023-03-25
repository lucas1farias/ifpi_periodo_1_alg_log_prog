

/*
22. Leia a hora do início de um jogo e a hora de fim do jogo (cada hora é composta por 2 variáveis inteiras:
hora e minuto). Calcule e escreva a duração do jogo (horas e minutos), sabendo-se que o tempo
máximo de duração do jogo é de 24 horas e que ele pode iniciar-se em um dia e terminar no dia
seguinte.
*/

import * as functionDb from "../../functions.js"

function main() {
  // Entradas
  // const gameStartedHour = functionDb.numericInput("Informe a hora que o jogo iniciou ---> ")
  // const gameStartedMinute = functionDb.numericInput("Informe o minuto que o jogo iniciou ---> ")
  // const gameEndedHour = functionDb.numericInput("Informe a hora que o jogo terminou ---> ")
  // const gameEndedMinute = functionDb.numericInput("Informe o minuto que o jogo terminou ---> ")
  
  // 3 horas e 45 minutos
  const gameStartedHour = 12
  const gameStartedMnt = 10
  const gameEndedHour = 13
  const gameEndedMnt = 55

  // Processamento
  if (gameStartedHour == gameEndedHour) {
    functionDb.title("RELATÓRIO")
    functionDb.content('Jogo excede as 24 horas de duração!')
    functionDb.footer("FIM DA EXECUÇÃO")
    return
  } else {
    const hourDuration = getTimeDifference('hora', gameStartedHour, gameStartedMnt, gameEndedHour, gameEndedMnt)
    const minDuration = getTimeDifference('min', gameStartedHour, gameStartedMnt, gameEndedHour, gameEndedMnt)
    const beginning = activityStarted(gameStartedHour, gameEndedHour)
    const activityReport = `Início: ${gameStartedHour}:${gameStartedMnt} / Fim: ${gameEndedHour}:${gameEndedMnt}`
    const resultReport = `A atividade iniciou ${beginning}, com duração de: ${hourDuration}h:${minDuration}min`
  
    // Saída
    functionDb.title("RELATÓRIO")
    functionDb.content(activityReport)
    functionDb.content(resultReport)
    functionDb.footer("FIM DA EXECUÇÃO")
  }
}

function getTimeDifference(category, hour1, hour1Minutes, hour2, hour2Minutes) {

  const hourDifference = hour2 - hour1
  let minutesLeftover = 0

  if (hour1Minutes < hour2Minutes) {
    minutesLeftover = hour2Minutes - hour1Minutes
  } else {
    minutesLeftover = hour1Minutes - hour2Minutes
  }

  if (category == 'hora' && hourDifference > 0) {
    return hourDifference
  } else if (category == 'hora' && hourDifference < 0) {
    return Math.abs(hourDifference)
  } 
  else {
    return minutesLeftover
  }
}

function activityStarted(hour1, hour2) {
  if (hour2 < hour1) {
    return 'ontem'
  } else {
    return 'hoje'
  }
}

main()
