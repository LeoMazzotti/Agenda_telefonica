const form = document.querySelector('form')
let contato = document.getElementById('name')
let numero = document.getElementById('phone-number')
let exibirNome = document.getElementById('show-name')
let exibirNumero = document.getElementById('show-number')

const contatos = []
const numeros = []

let linhas = ' '

form.addEventListener('submit', function (e) {
  e.preventDefault()

  cadastrarContatos()
  exibirContatos()
})

function cadastrarContatos() {
  if (!contatos.includes(contato.value)) {
    contatos.push(contato.value)
    numeros.push(numero.value)

    let linha = `<tr>`
    linha += `<td> ${contato.value} </td>`
    linha += `<td> ${numero.value}</td>`
    linha += `</tr>`

    linhas += linha

    contato.value = ''
    numero.value = ''
  } else {
    alert(
      `O contato ${contato.value} já foi cadastrado, informe outro nome para esse contato`
    )
  }
}

function exibirContatos() {
  const table = document.querySelector('table')
  table.innerHTML = linhas
}
