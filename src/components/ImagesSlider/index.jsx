import { useNavigateItems } from "@/customHooks/useNavigateItems";
import { useRef, useEffect } from "react";
import mediumZoom from "medium-zoom";
import "./index.css";

function ImagesSlider({ images, imagesMaxWidth = 600 }) {
  const scrollRef = useRef();
  const { contador, updateCont, processScrollChange } =
    useNavigateItems(scrollRef);
  useEffect(() => {
    mediumZoom("[data-zoomable]");
  }, []);

  return (
    <div className="slider-container">
      <div
        className="images-container"
        style={{ maxWidth: `${imagesMaxWidth}px` }}
        ref={scrollRef}
        onScroll={processScrollChange}
      >
        {images.map((img) => (
          <img key={img} alt="Project-Image" src={img} data-zoomable="true" />
        ))}
      </div>
      <div className="images-navigator">
        {images.map((img, index) => (
          <div
            key={index + "point"}
            className={
              contador === index
                ? "images-navigator-point point-active"
                : "images-navigator-point"
            }
            onClick={() => updateCont(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ImagesSlider;
