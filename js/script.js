let valor = document.querySelector('input#valor');
let lista = document.querySelector('select#add');
let res = document.querySelector('div#res');
let valores = [];

function adicionarNumero() {

// A função isNumero recebe o valor inserido como parâmetro
// A função inLista recebe o valor e o array como parâmetros

// Se o número é maior/igual a 1 e menor/igual a 100 e não está na lista
    if (isNumero(valor.value) && !inLista(valor.value, valores)) {
        valores.push(Number(valor.value))
        let option = document.createElement('option')
        option.setAttribute('value', Number(valor.value))
        option.text = `O valor ${valor.value} foi adicionado.`
        lista.appendChild(option)

        res.innerHTML = ''
    } else if (valor.value == 0) {
        alert('Insira um número entre 1 e 100.')
    } else {
        alert('Valor já encontrado na lista.')
    }

    valor.value = ''
    valor.focus()
}

// Essa função checa se o número recebido é maior/igual a 1 e menor/igual a 100
function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

// Essa função recebe o número e o array
function inLista(n, l) {
// Checa no array (l) se o índice do número recebido (n) é diferente de -1 (Está na lista)
    if (l.indexOf(Number(n)) != -1) {
        return true // Está na lista
    } else {
        return false // Não está na lista
    }
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }

        media = soma / total

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${total} números cadastrados</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é ${media}</p>`
    }
}

function limpar(){
    res.innerHTML = ''
    lista.innerHTML = ''
    valores = []
}