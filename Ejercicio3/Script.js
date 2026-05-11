var radio = parseFloat(document.getElementById("radio").value);

function calcularArea() {
    let radio = document.getElementById("radio").value;
    let area = Math.PI * Math.pow(radio, 2)
    document.getElementById("area").innerHTML = area.toFixed(2);
    }

function calcularCircunferencia() {
    let radio = document.getElementById("radio").value;
    let circunferencia = 2 * Math.PI * radio
    document.getElementById("circunferencia").innerHTML = circunferencia.toFixed(2);
    }