function tudo() {
  let in1 = parseFloat(document.getElementById("in1").value);
  let in2 = parseFloat(document.getElementById("in2").value);
  document.getElementById("in1").classList.remove("vermelho");
  document.getElementById("in2").classList.remove("vermelho");
  let area = (in1 * in2) / 2;
  let hipotenusa = Math.hypot(in1, in2);

  for (let indice = 1; indice <= 1; indice++) {
    corInput(indice);
  }
  if (in1 * in2 <= 0) {
    document.getElementById(
      "textofinal"
    ).innerHTML = `Nenhum valor pode ser negativo`;
  } else
    document.getElementById("textofinal").innerHTML = `Área: ${area.toFixed(
      2
    )} <br>Hipotenusa: ${hipotenusa.toFixed(2)}`;
}

function corInput(input) {
  if (!parseFloat(document.getElementById("in" + input).value)) {
    document.getElementById("in" + input).classList.add("vermelho");
  }
}
