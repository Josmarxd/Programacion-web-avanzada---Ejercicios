

const boton = document.getElementById("color");

boton.addEventListener("click", cambiarColor);


function cambiarColor(){
let color = prompt("Ingrese un color:");


switch (color) {

    case "rojo":
    document.body.style.backgroundColor = "red";
    break;


    case 'azul':
    document.body.style.backgroundColor = "blue";
    break;

    case 'verde':
    document.body.style.backgroundColor = "green";
    break;

    case 'blanco':
        document.body.style.backgroundColor = "white";
    break;

    default: alert("Color no reconocido");
}
}