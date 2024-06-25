
function tudo() {

    let in1 = 3 * parseFloat(document.getElementById('in1').value)
    let in2 = 5 * parseFloat(document.getElementById('in2').value)
    let in3 = 6 * parseFloat(document.getElementById("in3").value)
    let in4 = 6 * parseFloat(document.getElementById("in4").value)
    let ponderada = (in1 + in2 + in3 + in4) / 20
    let resultado = ''

    document.getElementById('in1').classList.remove('vermelho')
    document.getElementById("in2").classList.remove("vermelho")
    document.getElementById('in3').classList.remove("vermelho")
    document.getElementById("in4").classList.remove("vermelho")
    for (let indice = 1; indice <= 4; indice++) { corInput(indice) }

    if (ponderada >= 6) {
        resultado = "<span class='passou'>aprovado</span>"
        document.getElementById("textofinal").innerHTML = `A média ponderada das notas digitadas é: ${ponderada} e o aluno foi${resultado}`
    }
    else if (isNaN(ponderada)) { document.getElementById("textofinal").innerHTML = "" }
    else { resultado ="<span class='reprovou'>reprovado</span>" 
    document.getElementById("textofinal").innerHTML = `A média ponderada das notas digitadas é: ${ponderada} e o aluno foi${resultado}`
}

    function corInput(input) {
        if (!parseFloat(document.getElementById('in' + input).value)) {
            document.getElementById('in' + input).classList.add("vermelho")
        }
    }
}
