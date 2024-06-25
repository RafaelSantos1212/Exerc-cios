
function tudo() {
    let nome = (document.getElementById('nome').value)
    let idade = parseInt(document.getElementById('idade').value)

    document.getElementById('nome').classList.remove("vermelho")
    document.getElementById('idade').classList.remove("vermelho")

if (!nome || !idade || idade <=0) {
    document.getElementById('nome').classList.add("vermelho")
    document.getElementById('idade').classList.add("vermelho")
}
else{document.getElementById("textofinal").innerHTML= `Nome: ${nome}<br>Idade: ${idade}`}
}