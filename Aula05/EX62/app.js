function tudo() {
  let in1 = parseFloat(document.getElementById("in1").value);
  let e2 = Math.pow(in1, 2);
  let e3 = Math.pow(in1, 3);
  let e7 = Math.pow(in1, 7);
  let r2 = Math.sqrt(in1, 2);
  let r3 = Math.cbrt(in1, 3);
  let r7 = Math.pow(in1, 1 / 7);

  document.getElementById("in1").classList.remove("vermelho");
  for (let indice = 1; indice <= 1; indice++) {
    corInput(indice);
  }
  if (!in1 || in1 <= 0) {
    document.getElementById(
      "in1"
    ).innerHTML = `O número precisa ser maior que 0`;
  } else if (in1 % 2 === 0) {
    document.getElementById("textofinal" ).innerHTML = `O número digitado foi: ${in1} <br>Seu valor elevado ao quadrado é: ${e2} <br>Seu valor elevado ao cubo é: ${e3} <br>Seu valor elevado a sétima é: ${e7}`;
  } else {
    document.getElementById(
      "textofinal"
    ).innerHTML = `O número digitado foi: ${in1.toFixed(
      2
    )} <br>Sua raiz quadrada é: ${r2.toFixed(
      2
    )} <br>Sua raiz cúbica é: ${r3.toFixed(
      2
    )} <br>Sua raiz a sétima é: ${r7.toFixed(2)}`;
  }
}

function corInput(input) {
  if (!parseFloat(document.getElementById("in" + input).value)) {
    document.getElementById("in" + input).classList.add("vermelho");
  }
}
