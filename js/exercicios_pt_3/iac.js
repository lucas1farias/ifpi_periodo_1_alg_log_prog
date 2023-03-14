

/*
IAC = (quadril / (altura * sqrt(altura))) - 18
*/

const hipCm = 84             // 65: 9.37 > 92: 20.74 < 20.9
const heightCm = 178
const heightM = heightCm / 100
const denominator = heightM * Math.sqrt(heightM)
const bodyAdiposityIndex = ((hipCm / denominator) - 18).toFixed(2) 
const thinValue = 8.9        // 0 até 8.9
const normalValue = 20.9     // 9 até 20.9
const overweightValue = 25.9 // 21 até 25.9
const obeseValue = 29.9      // 26 até 29.9
console.log(`Seu IAC   || ${bodyAdiposityIndex}`)
console.log(`Magro     || ${thinValue - bodyAdiposityIndex}`)
console.log(`Normal    || ${normalValue - bodyAdiposityIndex}`)
console.log(`Sobrepeso || ${overweightValue - bodyAdiposityIndex}`)
console.log(`Obeso     || ${obeseValue - bodyAdiposityIndex}`)
