function tudo() {

let celsius = parseFloat(document.getElementById("celsius").value)
let fahrenheit = (celsius * 1.8) + 32

console.log(`Temperatura em graus Celsius: ${celsius} \nTemperatura em graus Fahrenheit: ${fahrenheit}`)
document.getElementById("conta").innerHTML = ` ${celsius.toFixed(2)} graus Celsius equivalem a ${fahrenheit.toFixed(2)} graus Fahrenheit `

}