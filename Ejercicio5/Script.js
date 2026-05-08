let dineroInput = document.getElementById("inputdinero");
let boton = document.getElementById("aceptar");

boton.addEventListener("click", calcular);


function calcular() {
  let dineroInicial = parseFloat(dineroInput.value);

  let total15 = calcularCompuesto(dineroInicial, 0.15);
  let total13 = calcularCompuesto(dineroInicial, 0.135);
  let total9 = calcularCompuesto(dineroInicial, 0.09);

  document.getElementById("resultado15").innerHTML =
    "Total mensual con 15%: $" + total15.toFixed(2);

  document.getElementById("resultado13.5").innerHTML =
    "Total mensual con 13.5%: $" + total13.toFixed(2);

  document.getElementById("resultado9").innerHTML =
    "Total mensual con 9%: $" + total9.toFixed(2);
}

function calcularCompuesto(dinero, tasaAnual) {
  let dias = 30;
  let tasaDiaria = tasaAnual / 365;

  for (let i = 0; i < dias; i++) {
    dinero += dinero * tasaDiaria;
  }

  return dinero;
}