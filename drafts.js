

// inverter valores: achar unidade, dezena, centena, milhar...etc
// pt_2 ... binario.js
// pt_2 ... caixa_eletronico.js

function getUnit(numberFourDigits) {
  return numberFourDigits % 10
}

let number = 1002
console.log(getUnit(number))
number = 109
console.log(getUnit(number + 1000))
number = 84
console.log(getUnit(number + 1000))
number = 6
console.log(getUnit(number + 1000))
