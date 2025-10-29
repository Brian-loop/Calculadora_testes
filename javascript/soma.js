function somar() {
    const primeiroNumero = parseFloat(document.getElementById("primeiroNumero").value);
    const segundoNumero = parseFloat(document.getElementById("segundoNumero").value);
    const resultado = primeiroNumero + segundoNumero;
    document.getElementById("resultado").innerText = resultado;
    verdeEVermelho();
}
module.exports = somar;
