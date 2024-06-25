function ex63() {

  let in1 = parseFloat(document.getElementById("in1").value)
  let in2 = parseFloat(document.getElementById("in2").value)
  let in3 = parseFloat(document.getElementById("in3").value)
  let div = document.getElementById("textofinal")

  let array = [in1, in2, in3]
  div.innerHTML = ``
  for (let i = 0; i < array.length; i++) {
   
    if (array[i] > 0) {
      div.innerHTML += `${array[i]} é um número positivo <br>`
    } else if (array[i] < 0) {
      div.innerHTML += `${array[i]} é um número negativo <br>`
    } else {
      div.innerHTML += `${array[i]} é um número neutro <br>`
    }
  }
    if (isNaN(in1) || !in2 || !in3) {
      alert("vai se foder")
      throw new Error("O formulário deve ser preenchido")
    }
    // array.length =  mostra quantas variáveis tem dentro da array
    // array [posição(número) da array (0,1,2,3...)] = mostra apenas a varíavel localizada naquela posição(número) da array
  }

  function ex64 () {
    
  }