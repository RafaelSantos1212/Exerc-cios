// let meuBotao = document.getElementById("meuBotao").innerHTML
// document.querySelector("meuParagrafo").classList.add("active");
function tudo() 
{
    // LimparRes(1)
    document.getElementById('textofinal').classList.remove('par')
    document.getElementById('textofinal').classList.remove('impar')
    let numero = parseInt(document.getElementById('numero').value)
    if (numero % 2 == 0) {
        document.getElementById('textofinal').innerHTML = numero
        document.getElementById('textofinal').classList.add('par')
    }
    else {
        document.getElementById('textofinal').innerHTML = numero
        document.getElementById('textofinal').classList.add('impar')
    }

    if (!numero) {alert("escreva um número válido")}
}