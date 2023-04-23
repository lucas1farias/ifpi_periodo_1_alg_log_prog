

// inverter valores: achar unidade, dezena, centena, milhar...etc
// pt_2 ... binario.js
// pt_2 ... caixa_eletronico.js

// function calculateAgeInDays(birthDate) {
//   // Get the current date and time
//   const now = new Date();
//   console.log([1], now)

//   // Convert the birth date to a Date object
//   const birthday = new Date(birthDate);
//   console.log([2], birthday)

//   // Calculate the difference in milliseconds between the two dates
//   const diffInMs = now.getTime() - birthday.getTime();
//   console.log([3], now.getTime())
//   console.log([4], birthday.getTime())

//   // Convert the difference to days and return it
//   const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
//   return diffInDays;
// }

// // Example usage
// const birthDate = '1992-07-16'; // format yyyy-mm-dd
// const ageInDays = calculateAgeInDays(birthDate);
// console.log(ageInDays); // output: 11802.709081018518

import { question } from "readline-sync"

function main(){

    // Entrada
    // const valor_mensalidade = Number(question('Mensalidade: '))
    // const duracao_anos = Number(question('Duração (anos): '))
    // const selic = Number(question('SELIC (%): ')) / 100
    // const salario_minimo = Number(question('Salário Mínimo (R$): '))
    // const renda_familiar = Number(question('Renda Familiar (R$): '))
    // const qtd_membros_familia = Number(question('Qtd Membros Família: '))
    // const ano_inicio = Number(question('Ano início: '))
    // const semestre_inicio = Number(question('Semestre início: '))

    const valor_mensalidade = 800
    const duracao_anos = 2.5
    const selic = 13.75 / 100
    const salario_minimo = 1302
    const renda_familiar = 5000
    const qtd_membros_familia = 3
    const ano_inicio = 2023
    const semestre_inicio = 1

    const taxa_fixa = 150
    const pagamento_constante = 3
    const duracao_meses_pagamento_carencia = 18
    const duracao_meses = duracao_anos * 12

    // Processamento
    const apto = verificar_aptidao(renda_familiar, qtd_membros_familia, salario_minimo)
    const valor_financiado = calcular_valor_curso(duracao_anos, valor_mensalidade)
    const juros_totais = calcular_juros_financiamento(valor_financiado, selic, renda_familiar, qtd_membros_familia, duracao_anos, salario_minimo)
    const total_a_pagar = valor_financiado + juros_totais
    const taxa_durante_curso = calcular_taxa_durante_curso(taxa_fixa, pagamento_constante, duracao_anos)
    const taxa_durante_carencia = calcular_taxa_durante_carencia(taxa_fixa, pagamento_constante, duracao_meses_pagamento_carencia)
    const taxa_durante_curso_e_carencia = taxa_durante_curso + taxa_durante_carencia
    const valor_parcela = calcular_parcela_financiamento(valor_financiado, juros_totais, taxa_durante_curso_e_carencia, duracao_anos)
    // const renda_minima_formado = valor_parcela * 10

    // const inicio_pagamento = calcular_inicio_pagamento(ano_inicio, semestre_inicio, duracao_meses)
    // const final_pagamento = calcular_final_pagamento(ano_inicio, semestre_inicio, duracao_meses)

    // Saída
    console.log(`APTO?: ${apto}`)
    console.log(`Valor a ser Financiado R$: ${valor_financiado.toFixed(2)}`)
    console.log(`Taxa de juros FIES: ${calcular_taxa((renda_familiar / qtd_membros_familia), selic, salario_minimo)}`)
    console.log(`Juros do Financiamento R$: ${juros_totais.toFixed(2)}`)
    console.log(`Total a Pagar R$: ${total_a_pagar.toFixed(2)}`)
    console.log(`Taxas (R$ 150) Pagas: ${taxa_durante_curso_e_carencia.toFixed(2)} `)
    console.log(`Parcelamento: ${duracao_meses * 4} de R$ ${valor_parcela}`)
    // console.log(`Renda Mínimo (R$): ${renda_minima_formado.toFixed(2)}`)
    // console.log(`Início Pagamento: ${inicio_pagamento}`)
    // console.log(`Final Pagamento: ${final_pagamento}`)
}

// FUNCOES DE NEGOCIO
function verificar_aptidao(renda_familiar, qtd_membros_familia, salario_minimo) {
    const renda_por_pessoa = renda_familiar / qtd_membros_familia
    const triplo_salario_minimo = 3 * salario_minimo
    
    console.log('ITEM 1: Se está habilitado a contratar (APROVADO) =================================')
    console.log(`renda_por_pessoa = renda_familiar / qtd_membros_familia`)
    console.log(`renda_por_pessoa = ${renda_familiar} / ${qtd_membros_familia} = ${renda_por_pessoa}\n`)
    
    if (renda_por_pessoa <= triplo_salario_minimo) {
        return `SIM (${renda_por_pessoa} é menor que ${triplo_salario_minimo})`
    } else {
        return `NÃO (${triplo_salario_minimo} é maior que ${renda_por_pessoa})`
    }
}

function calcular_valor_curso(duracao, valor_mensalidade) {
    const duracao_em_meses = duracao * 12
    const valor_curso = duracao_em_meses * valor_mensalidade
    
    console.log('ITEM 2: Valor a ser financiado ===========================================')
    console.log('valor_curso = duracao_em_meses * valor_mensalidade')
    console.log(`valor_curso = (${duracao} * ${12}) * ${valor_mensalidade} = ${valor_curso}\n`)
    
    return valor_curso
}

function calcular_taxa(renda_por_pessoa, selic, salario_minimo) {
    if (renda_por_pessoa <= (1.5 * salario_minimo)) {
        console.log('Condição 1')
        return (10/100) * selic
    }else if (renda_por_pessoa <= 2 * salario_minimo) {
        console.log('Condição 2')
        return (15/100) * selic
    }else if (renda_por_pessoa <= 2.5 * salario_minimo) {
        console.log('Condição 3')
        return 20/100 * selic 
    }else{
        console.log('Condição 4')
        return 25/100 * selic
    }
}

function calcular_juros_financiamento(valor_financiado, selic, renda_familiar, qtd_membros_familia, duracao, salario_minimo) {
    const renda_por_pessoa = renda_familiar / qtd_membros_familia
    const taxa = calcular_taxa(renda_por_pessoa, selic, salario_minimo)
    const juros = valor_financiado * taxa * duracao
    
    console.log('===================================================== ITEM 3: Valor total dos juros')
    console.log('renda_por_pessoa = renda_familiar / qtd_membros_familia')
    console.log(`renda_por_pessoa = ${renda_familiar} / ${qtd_membros_familia} = ${renda_por_pessoa}`)
    console.log(`taxa = ${taxa}`)
    console.log('juros = valor_financiado * taxa * duracao')
    console.log(`juros = ${valor_financiado} * ${taxa} * ${duracao} = ${juros}\n`)

    return juros
}

function calcular_taxa_durante_curso(taxa, meses_variacao, duracao_curso_anos) {
    const ano = 12
    const qtd_pagamentos_ao_ano = ano / meses_variacao
    const pagamento_anual = taxa * qtd_pagamentos_ao_ano
    return pagamento_anual * duracao_curso_anos
}

function calcular_taxa_durante_carencia(taxa, meses_variacao, duracao_carencia) {
    const qtd_pagamentos_ao_ano = duracao_carencia / meses_variacao
    return taxa * qtd_pagamentos_ao_ano
}

function calcular_parcela_financiamento(valor_sem_juros, valor_juros, valor_taxas, duracao_curso_anos) {
    const duracao_curso_quadruplo = 4 * duracao_curso_anos
    const duracao_pagamento = duracao_curso_quadruplo * 12
    // Taxas são subtraídas, pois já são cobradas durante o curso
    const calculo = (valor_sem_juros + valor_juros - valor_taxas) / duracao_pagamento
    return calculo.toFixed(2)
}

// function calcular_inicio_pagamento(ano_inicio, semestre_inicio, duracao_meses){
//     const carencia_em_meses = 18
//     const meses_semestre_inicio = semestre_inicio === 1 ? 0 : 6
//     const ano_inicio_em_meses = ano_inicio * 12

//     // tudo em meses (mes 0 - Início do D.C.) + 1 mes (iniciar pagamento no mes seguinte)
//     const inicio_em_meses = ano_inicio_em_meses + meses_semestre_inicio + duracao_meses + carencia_em_meses + 1

//     const ano_semestre = converter_meses_em_ano_semestre(inicio_em_meses)

//     return ano_semestre
// }

// function calcular_final_pagamento(ano_inicio, semestre_inicio, duracao_meses){
//     const carencia_em_meses = 18
//     const meses_semestre_inicio = semestre_inicio === 1 ? 0 : 6
//     const ano_inicio_em_meses = ano_inicio * 12

//     // tudo em meses (mes 0 - Início do D.C.) + 1 mes (iniciar pagamento no mes seguinte)
//     const final_em_meses = ano_inicio_em_meses + meses_semestre_inicio + duracao_meses + carencia_em_meses + 1 + (4 * duracao_meses)

//     const ano_semestre = converter_meses_em_ano_semestre(final_em_meses)

//     return ano_semestre
// }

// function converter_meses_em_ano_semestre(meses){
//     const ano = Math.floor(meses / 12)
//     const semestre = meses % 12 <= 6 ? 1 : 2

//     return `${ano}/${semestre}`
// }

main()
