

const drop = '\n'

function print(label) {
  console.log(label)
}

function xerox(char, amount) {
  const inittialChar = char
  for (let value = 0; value < amount; value++) {
    char += inittialChar
  }
  return char
}

function getThousand(numberFourDigits) {
  return Math.floor(numberFourDigits / 1000)
}

function getHundred(numberFourDigits) {
  const hundred = (numberFourDigits % 1000) / 100
  return Math.floor(hundred)
}

function getTen(numberFourDigits) {
  const ten = (numberFourDigits % 100) / 10
  return Math.floor(ten)
}

function getUnit(numberFourDigits) {
  return numberFourDigits % 10
}

function isInteger(value) {
  if (value % 1 == 0) {
    return true
  } else {
    return false
  }
}

function imc(weight, height) {
  const heightIsInteger = height % 1 == 0
  let heightReal = 0
  
  if (heightIsInteger) {
    heightReal = height / 100
    return (weight / heightReal ** 2).toFixed(1)
  } else {
    return (weight / height ** 2).toFixed(1)
  }
}

print(drop)
print(`${xerox('=', 20)} Função: isInteger ${xerox('=', 20)}`)
print(`7 é um número inteiro? ${isInteger(7)}`)
print(`7.2 é um número inteiro? ${isInteger(7.2)}`)
print(xerox('=', 70))

print(drop)
print(`${xerox('=', 20)} Função: imc ${xerox('=', 20)}`)
print(`IMC de alguém com 1.78m e com 72kg: ${imc(72, 1.78)}`)

// ========== FUNÇÕES ADAPTÁVEIS ========== 
print(drop)
print(`${xerox('=', 20)} Função: getThousand ${xerox('=', 20)}`)
print(`Quem é o milhar de 7285? ${getThousand(7285)}`)

print(drop)
// Ex: se o alvo fosse, por exemplo, uma CENTENA 219, bastava + 1000 e passá-lo como parâmetro
print(`${xerox('=', 20)} Função: getHundred ${xerox('=', 20)}`)
print(`Quem é a centena de 7285? ${getHundred(7285)}`)

print(drop)
// Ex: se o alvo fosse, por exemplo, uma DEZENA 21, bastava + 100 e passá-lo como parâmetro
print(`${xerox('=', 20)} Função: getTen ${xerox('=', 20)}`)
print(`Quem é a dezena de 7285? ${getTen(7285)}`)

print(drop)
// Ex: se o alvo fosse, por exemplo, UNIDADE 7, bastava + 1000 e passá-lo como parâmetro
print(`${xerox('=', 20)} Função: getUnit ${xerox('=', 20)}`)
print(`Quem é a unidade de 7285? ${getUnit(7285)}`)
