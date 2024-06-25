
function tudo() {
    let numero1 = parseInt(document.getElementById('numero1').value)
    let numero2 = parseInt(document.getElementById('numero2').value)
    if (numero1 > numero2) {
        document.getElementById('textofinal').innerHTML = `Os números digitados foram ${numero1} e ${numero2} e o maior número entre eles é<span class="verde">${numero1}</span>`
    }
    else if (numero1 < numero2) {
        document.getElementById('textofinal').innerHTML = `Os números digitados foram ${numero1} e ${numero2} e o maior número entre eles é<span class="verde">${numero2}</span>`
    }
    else {
        document.getElementById('textofinal').innerHTML = `Os números digitados são iguais:<span class="verde">${numero1}</span>`
    }

    if (!numero1 || !numero2) { alert("escreva um número válido")}
    if (!numero1 || !numero2) { document.getElementById('textofinal').innerHTML = ""}
}