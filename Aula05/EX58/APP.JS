
function tudo() {

    let in1 = parseFloat(document.getElementById('in1').value)
    let in2 = parseFloat(document.getElementById('in2').value)
    let in3 = parseFloat(document.getElementById("in3").value)
    let media = (in1 + in2 + in3) / 3
    let resultado = ''

    document.getElementById('in1').classList.remove('vermelho')
    document.getElementById("in2").classList.remove("vermelho")
    document.getElementById('in3').classList.remove("vermelho")
    for (let indice = 1; indice <= 3; indice++) { corInput(indice) }

    if (media >= 7.5) {
        resultado = "<span class='passou'>aprovado</span>"
        document.getElementById("textofinal").innerHTML = `A média aritmética das notas digitadas é: ${media.toFixed(2)} e o aluno foi ${resultado}`
    }
    else if (isNaN(media)) { document.getElementById("textofinal").innerHTML = "" }
    else {
        resultado = "<span class='reprovou'>reprovado</span>"
        document.getElementById("textofinal").innerHTML = `A média aritmética das notas digitadas é: ${media.toFixed(2)} e o aluno foi ${resultado}`
    }
}
function corInput(input) {
    if (!parseFloat(document.getElementById('in' + input).value)) {
        document.getElementById('in' + input).classList.add("vermelho")
    }
}