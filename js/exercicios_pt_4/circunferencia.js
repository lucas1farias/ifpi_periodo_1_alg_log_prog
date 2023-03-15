

/*
========== Problema 18 ==========
. Leia o valor do raio de uma circunferência, calcule e escreva seu comprimento.(c = 2 * p * r)

RAIO        || distância do centro do círculo até uma de suas extremidades
DIÂMETRO    || Dobro do valor do RAIO 
COMPRIMENTO || Tamanho da medida da volta dada ao redor do círculo (também chamado de PERÍMETRO)
PI          || Valor usado na fórmula do cálculo da área do círculo
*/

import { question } from "readline-sync"

function main() {
  title('\n===== BEM-VINDO À CALCULADORA DE COMPRIMENTO DA CIRCUNFERÊNCIA =====')
  
  // Entrada
  const circleRadius = numericInput('Digite o valor do raio de uma circunferência ---> ')
  
  // Processamento
  // FÓRMULA: [pi = C/D]  Tecnicamente, pi sempre será multiplicado com D (onde D é o dobro de R)
  const circleLenght = getCircleLength(circleRadius)
  const circleArea = getCircleArea(circleRadius)
  
  // Saída
  title('\n========== RELATÓRIO ==========')
  content(`Comprimento || ${circleLenght}`)
  content(`Área        || ${circleArea}`)
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

function getCircleLength(radius) {
  const pi = Math.PI
  const calculus = pi * (radius * 2)
  return calculus.toFixed(2)
}

function getCircleArea(radius) {
  const pi = Math.PI
  const calculus = pi * (radius * radius)
  return calculus.toFixed(2)
}

function content(contentLabel) {
  print(contentLabel)
}

function footer(footerLabel) {
  print(footerLabel)
}

main()
