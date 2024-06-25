function tudo() {

    let in1 = parseFloat(document.getElementById('in1').value)

    document.getElementById('in1').classList.remove('vermelho')

    for (let indice = 1; indice <= 1; indice++) {
        corInput(indice)
    }

    console.log(in1)

    if (in1 < 0) {
        document.getElementById("textofinal").innerHTML = `o número precisa ser maior que 0`
    }
    else if (in1 % 2 === 0) {
        document.getElementById('textofinal').innerHTML = `O número digitado é par`
    }
    else if (isNaN(in1)) {document.getElementById("textofinal").innerHTML=''}
    else {
        document.getElementById('textofinal').innerHTML = `O número digitado é ímpar`
    }


}

function corInput(input) {
    if (!parseFloat(document.getElementById('in' + input).value)) {
        document.getElementById('in' + input).classList.add("vermelho")
    }
}