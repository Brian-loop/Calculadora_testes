function calcular() {
    const operacao = document.getElementById("operacao").value;

    if (!validarCampos()) {
        return false;
    }
    else switch (operacao) {
        case "selecioneOperacao":
            alert('Selecione uma operação');
            break;
        case "soma":
            somar();
            break;
        case "subtracao":
            subtrair();
            break;
        case "multiplicacao":
            multiplicar();
            break;
        case "divisao":
            dividir();
            break;
    }
}
