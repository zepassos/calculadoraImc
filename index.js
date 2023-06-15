function retornaDescricaoResultado(imc) {
    if (isNaN(imc)) return null;
    if (imc > 30) return "OBESIDADE";
    if (imc >= 24.9) return "SOBREPESO";
    if (imc >= 18.5) return "NORMAL";
    return "MAGREZA";
}

function calcular() {

    var altura = document.getElementById('altura').value;
    var peso = document.getElementById('peso').value;

    if (altura === ""  || peso === "") {
        alert("Preencha os campos solicitados!");
    } else { 

        var imc = peso / (altura ** 2);

        var descricaoResultado = retornaDescricaoResultado(imc);

        var imcDescricao = imc.toFixed(2) + " " + descricaoResultado;
        document.getElementById("imc").innerHTML = imcDescricao;
    }
    
}
