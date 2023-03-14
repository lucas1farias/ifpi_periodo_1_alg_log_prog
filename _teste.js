

/*
Cálculo da taxa metabólica basal (TMB)
Pesquise o que é TMB e bote como comentário de várias linhas no top do arquivo.
Dado o peso (em kg), a altura (em cm), a idade (em anos) e o gênero (M ou F) de uma pessoa, calcule a TMB dessa pessoa.
Fórmula da TMB para homens: TMB = 88,36 + (13,4 x peso) + (4,8 x altura) - (5,7 x idade)
Fórmula da TMB para mulheres: TMB = 447,6 + (9,2 x peso) + (3,1 x altura) - (4,3 x idade)
Arredonde o valor da TMB para o inteiro mais próximo utilizando a função floor.
Exemplo de entrada: peso = 70, altura = 170, idade = 30, genero = "M"
Saída esperada: 1608
*/

const personWeight = 72
const personHeight = 178
const personAge = 30
const personGender = 'M'

// https://www.calculator.net/bmr-calculator.html
console.log('Homem', Math.round((10 * personWeight) + (6.25 * personHeight) - (5 * personAge) + 5))
console.log('Mulher', Math.round((10 * personWeight) + (6.25 * personHeight) - (5 * personAge) - 161))
