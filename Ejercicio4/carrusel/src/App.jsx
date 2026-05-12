import { useState } from "react";
import "./App.css";

import { images } from "./data/data";

function App() {

  const [currentImage, setCurrentImage] = useState(0);

  const [startDot, setStartDot] = useState(0);

  const visibleDots = 5;

  const end = startDot + visibleDots;

  // Flecha derecha
  const moveRight = () => {

    if (startDot + visibleDots < images.length) {

      setStartDot(startDot + 1);

    }
  };

  // Flecha izquierda
  const moveLeft = () => {

    if (startDot > 0) {

      setStartDot(startDot - 1);

    }
  };

  return (

    <div className="body">

      <div className="carousel">

        <h1>Carousel</h1>

        {/* Imagen */}
        <div className="image-container">

          <img src={images[currentImage]} alt="" />

        </div>

        {/* Navegación */}
        <div className="controls">

          <button onClick={moveLeft}>
            ❮
          </button>

          <div className="dots-container">

            {
              images.slice(startDot, end).map((img, index) => {

                const realIndex = startDot + index;

                return (

                  <div
                    key={realIndex}
                    className={`dot ${realIndex === currentImage ? "active" : ""}`}
                    onClick={() => setCurrentImage(realIndex)}
                  ></div>

                );
              })
            }

          </div>

          <button onClick={moveRight}>
            ❯
          </button>

        </div>

      </div>

    </div>

  );
}

export default App;