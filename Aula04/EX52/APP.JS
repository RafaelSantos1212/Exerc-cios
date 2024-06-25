function tudo() {

    let valor = parseFloat(document.getElementById("valor").value)
    let gorjeta = parseFloat(document.getElementById("gorjeta").value)
    let valorgorjeta = valor * (gorjeta / 100)
let valorpago = valor + valorgorjeta

if (gorjeta <0 || gorjeta > 100) {alert("A porcentagem da gorjeta deve ser de 0 a 100")
}else if (!valor || !gorjeta) {
alert("Preencha corretamente")
}else{
document.getElementById("conta").innerHTML = `Valor da gorjeta: ${valorgorjeta.toFixed(2)} reais.<br>Valor a ser pago: ${valorpago.toFixed(2)} reais.`
}
}