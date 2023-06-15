
function calculateImc(height, weight) {
    var auxImc = weight / (height ** 2)
    return auxImc.toFixed(2);
}

function translateImc(imc) {
    if (isNaN(imc)) return null;
    if (imc > 30) return "Obesidade";
    if (imc >= 24.9) return "Sobrepeso";
    if (imc >= 18.5) return "Normal";
    return "Magreza";
}

function getFieldsData() {
    var height = document.getElementById('altura').value;
    var weight = document.getElementById('peso').value;

    return {
        height: height,
        weight: weight
    };
}

function printResult(imc, description) {
    var imcDescription = imc + " " + description;
    document.getElementById("imc").innerHTML = imcDescription;
}

function calculate() {

    var values = getFieldsData();

    if (values.height === ""  || values.weight === "") {
        alert("Preencha os campos solicitados!");
    } else { 
        var imc = calculateImc(values.height, values.weight);
        var description = translateImc(imc);
        printResult(imc, description);
    }
    
}
