
function Z() {

let idade = parseInt(document.getElementById("idade").value)
let idadeDias = idade *365
console.log("Idade em anos: " + idade + " / Idade em dias: " + idadeDias)
if (!idade) {
    document.getElementById("soma").innerHTML = ""
}else {

    document.getElementById("soma").innerHTML = `Você tem ${idadeDias} dias de idade.`}

}