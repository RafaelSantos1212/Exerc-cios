
function tudo() {
    let in1 = parseFloat(document.getElementById('in1').value)
    let in2 = parseFloat(document.getElementById('in2').value)
    let media = (in1 + in2) / 2

    document.getElementById('in1').classList.remove('vermelho')
    document.getElementById("in2").classList.remove("vermelho")

    if (!in1 || !in2) { alert("digite algo") }
    else if (in1 > 10 || in1 < 0 || in2 > 10 || in2 < 0) {
        document.getElementById('in1').classList.add("vermelho")
        document.getElementById("in2").classList.add("vermelho")
    }
    else if (media >= 7) {
        document.getElementById("textofinal").innerHTML = `Você foi aprovado com nota:<span class="passou">${media.toFixed(2)}</span>`
    }
    else if (media <= 5) { document.getElementById("textofinal").innerHTML = `Você foi reprovado com nota:<span class="reprovou">${media.toFixed(2)}</span>` }
else {document.getElementById("textofinal").innerHTML = `Você está de recuperação com nota:<span class="recuperação">${media.toFixed(2)}</span>` }
}