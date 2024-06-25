function tudo() {

    let in1 = parseFloat(document.getElementById('in1').value)
    let quadrado = Math.pow(in1, 2)
    let cubo = Math.pow(in1, 3)
    document.getElementById('in1').classList.remove('vermelho')
    for (let indice = 1; indice <= 1; indice++) { corInput(indice) }

    if (in1 % 2 === 0) { document.getElementById('textofinal').innerHTML = `O número digitado, ${in1}, é par e seu valor elevado ao quadrado é ${quadrado}` }
    else { document.getElementById('textofinal').innerHTML = `O número digitado, ${in1}, é ímpar e seu valor elevado ao cubo é ${cubo}` }


}

function corInput(input) {
    if (!parseFloat(document.getElementById('in' + input).value)) {
        document.getElementById('in' + input).classList.add("vermelho")
    }
}