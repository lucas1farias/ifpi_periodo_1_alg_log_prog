

import { question } from "readline-sync"

export function print(msg) {
  console.log(msg)
}

export function title(titleLabel) {
  print(`\n========== ${titleLabel} ==========`)
}

export function numericInput(text) {
  const element = Number(question(text))
  return element
}

export function textInput(text) {
  const element = question(text)
  return element
}

export function content(contentLabel) {
  print(contentLabel)
}

export function footer(footerLabel) {
  print(`========== ${footerLabel} ==========\n`)
}

/*
const values = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

let loop = setInterval(() => {
  let first = values[Math.floor(Math.random() * values.length)]
  let second = values[Math.floor(Math.random() * values.length)]
  let third = values[Math.floor(Math.random() * values.length)]
  if (first + second + third == 180) {
    console.log(`${first} + ${second} + ${third}: ${triangleType(first, second, third)}`)
  }
}, 10)

*/
