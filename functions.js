

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
