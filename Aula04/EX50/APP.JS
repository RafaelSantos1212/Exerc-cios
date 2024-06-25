function tudo() {

    let produtoA = parseFloat(document.getElementById("produtoA").value)
    let produtoB = parseFloat(document.getElementById("produtoB").value)
    let produtoC = parseFloat(document.getElementById("produtoC").value)
    let total = produtoA + produtoB + produtoC
    let total10= total - (total * 0.10)
    let total20= total - (total * 0.20)
    let total30= total - (total * 0.30)
    let total50= total - (total * 0.50)
 document.getElementById("conta").innerHTML =  ` Total: ${total.toFixed(2)}<br>Total com 10% de desconto: ${total10.toFixed(2)}<br>Total com 20% de desconto: ${total20.toFixed(2)}<br>Total com 30% de desconto: ${total30.toFixed(2)}<br>Total com 50% de desconto: ${total50.toFixed(2)}`
console.log(`Total: ${total.toFixed(2)}\nTotal com 10% de desconto: ${total10.toFixed(2)}\nTotal com 20% de desconto: ${total20.toFixed(2)}\nTotal com 30% de desconto: ${total30.toFixed(2)}\nTotal com 50% de desconto: ${total50.toFixed(2)}`)
}