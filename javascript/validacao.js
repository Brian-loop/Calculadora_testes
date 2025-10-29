function validarCampos(){
    const primeiroNumero = document.getElementById("primeiroNumero").value;
    const segundoNumero = document.getElementById("segundoNumero").value;
    const resultadoDaOperacao = document.getElementById('resultado');
    document.getElementById("resultado").innerText = resultadoDaOperacao;

    if (primeiroNumero === "" || segundoNumero === ""){
        alert("Por favor, preencha todos os campos.");
        return false;
    }
    if(primeiroNumero == 0 || segundoNumero == 0){
        alert('Não pode fazer a operacao só com numeros 0 (zero)');
        return false;
    }
    
    return true;    
}

function verdeEVermelho(){
    const resultado = parseFloat(document.getElementById("resultado").innerText);
    const resultadoDaOperacao = document.getElementById('resultado');
    if(resultado < 0){
        resultadoDaOperacao.style.color = "red";
    }
    if(resultado > 0){
        resultadoDaOperacao.style.color = "green";
    }
}