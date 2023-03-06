

/*
===== PROBLEMA 27 =====
  Leia um número inteiro de segundos, calcule e escreva quantas horas, 
  quantos minutos e quantos segundos ele corresponde. 
*/

let seconds = 69
let hour = 3600
let minute = 60
let secondsInHour = seconds / hour
let secondsInMinute = seconds / minute
let remainings = Math.floor(seconds / minute)

console.log(secondsInHour, ' horas')
console.log((69 / 3600), ' horas')

// quantos minutos tantos segundos possui
console.log('69 segundos', Math.floor(69 / 60), 69 % 60)

// console.log(remainings + ' minutos')
// console.log(seconds - (minute * remainings), 'segundos')
