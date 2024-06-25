
function Z() {

let salario = parseFloat(document.getElementById("salario").value)
let quilowatts = parseFloat(document.getElementById("quilowatts").value)
 let custoWatt = salario / 700 
let valor = custoWatt * quilowatts
let valordesc = valor - (valor * 0,10)

if (!salario || !quilowatts) {
    document.getElementById("soma").innerHTML = ""
}else {document.getElementById("soma").innerHTML = `
O valor a ser pago é de ${valor.toFixed(4)} reais. <br> O valor a ser pago, com desconto de 10%, é de ${valordesc.toFixed(4)} reais. <br> O valor de cada quilowatt é de ${custoWatt.toFixed(4)} reais.
`}
}