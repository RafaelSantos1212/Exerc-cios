function tudo() {

    let alturadegrau = parseInt(document.getElementById("alturadegrau").value)
    let alturatopo = parseInt(document.getElementById("alturatopo").value)
    let degrausqtdd = alturatopo / alturadegrau
    

if (!alturadegrau || !alturatopo || alturadegrau >= alturatopo || alturadegrau < 0 || alturatopo < 0) {alert("Os seguintes requisitos precisam ser cumpridos:\n\n1. A altura do degrau não pode ser maior que a altura do topo\n2. Ambos os valores precisam ser um número maior que 0")
}else {
document.getElementById("conta").innerHTML = `Você precisa subir ${degrausqtdd.toFixed(1)} degraus para chegar ao patamar da escada.`
console.log(`Altura do degrau: ${alturadegrau.toFixed(1)}\nAltura do topo: ${alturatopo.toFixed(1)}\nQuantidade de degraus necessária para chegar ao topo: ${degrausqtdd.toFixed(1)}`)}
}



