function tudo() {
    let paragrafo = document.getElementById("conta")
    let peso = parseFloat(document.getElementById("peso").value)
    let altura = parseFloat(document.getElementById("altura").value)
    let imc = peso / (altura * altura)

    if (!peso || !altura || peso <= 0 || altura <= 0) {
        alert(`O valor do peso e/ou da altura não pode ser igual ou menor que 0`)
    } 
    if (imc < 18.5) {
        paragrafo.innerHTML = `Seu IMC: ${imc.toFixed(2)}<br><br>Classificação: Magreza<br>Nível de obesidade: 0`
    } 
    
    if (imc <= 24.9) {
        paragrafo.innerHTML = `Seu IMC: ${imc.toFixed(2)}<br><br>Classificação: Normal<br>Nível de obesidade: 0`
    } 
    
    if (imc <= 29.9) {
        paragrafo.innerHTML = `Seu IMC: ${imc.toFixed(2)}<br><br>Classificação: Sobrepeso<br>Nível de obesidade: l`
    }

    if (imc <= 39.9) {
        paragrafo.innerHTML = `Seu IMC: ${imc.toFixed(2)}<br><br>Classificação: Obesidade<br>Nível de obesidade: ll`
    }
    
    if (imc >= 40) {
        paragrafo.innerHTML = `Seu IMC: ${imc.toFixed(2)}<br><br>Classificação: Obesidade grave<br>Nível de obesidade: lll`
    }
    
    if (peso || altura || peso > 0 || altura <= 0) {
    console.log(`Peso: ${peso.toFixed(2)} quilos\nAltura: ${altura.toFixed(2)} metros\nIMC: ${imc.toFixed(2)}`)
    }
}

// Menor que 18,5: 	Magreza 	       - Nível de obesidade: 0<br>
//             Entre 18,5 e 24,9: 	Normal 	           - Nível de obesidade: 0<br>
//             Entre 25,0 e 29,9: 	Sobrepeso 	       - Nível de obesidade: I<br>
//             Entre 30,0 e 39,9: 	Obesidade 	       - Nível de obesidade: II<br>
//             Maior que 40,0: 	Obesidade Grave    - Nível de obesidade: III
