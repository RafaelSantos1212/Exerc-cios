let botao = document.getElementById("lazaro")
botao.addEventListener('click', function () {
    let salario = parseFloat(document.getElementById("salario").value)
    let salarioaumento = salario + (salario * 0.25)

    if (!salarioaumento) {
        alert("Escreve algo seu fodido")

    } else {
        document.getElementById("conta").innerHTML = ` ${salario} reais de salário + 25% de aumento = ${salarioaumento} reais.`
        console.log(`Salário: ${salario} \nSalário com aumento: ${salarioaumento}`)
    }
});