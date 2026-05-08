const mainImage = document.getElementById("mainImage");
const dotsContainer = document.getElementById("dotsContainer");

const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

let currentImage = 0;

let startDot = 0;
const visibleDots = 5;

// Mostrar imagen
function showImage(index){

    mainImage.src = images[index];

    updateDots();
}

// Crear bolitas
function updateDots(){

    dotsContainer.innerHTML = "";

    const end = startDot + visibleDots;

    for(let i = startDot; i < end && i < images.length; i++){

        const dot = document.createElement("div");

        dot.classList.add("dot");

        if(i === currentImage){
            dot.classList.add("active");
        }

        dot.addEventListener("click", () => {

            currentImage = i;
            showImage(currentImage);

        });

        dotsContainer.appendChild(dot);
    }
}

// Flecha derecha
rightBtn.addEventListener("click", () => {

    if(startDot + visibleDots < images.length){

        startDot++;

        updateDots();
    }
});

// Flecha izquierda
leftBtn.addEventListener("click", () => {

    if(startDot > 0){

        startDot--;

        updateDots();
    }
});

// Inicializar
showImage(currentImage);