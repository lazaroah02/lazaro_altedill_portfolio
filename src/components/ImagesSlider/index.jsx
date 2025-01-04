import { useNavigateItems } from "@/customHooks/useNavigateItems";
import { useRef, useState } from "react";
import "./index.css";
import CloseIcon from "@/assets/icons/close-icon.svg"

function ImagesSlider({ images, imagesMaxWidth = 600 }) {
  const scrollRef = useRef();
  const { contador, updateCont, processScrollChange } =
    useNavigateItems(scrollRef);
  const [imageToZoom, setImageToZoom] = useState(null);
  return (
    <div className="slider-container">
      {imageToZoom ? (
        <div className="zoomed-image-container">
            <button className = "close-zoomed-image-button" onClick={() => setImageToZoom(null)}>
                <img src = {CloseIcon.src} alt = "Close Icon"/>
            </button>
          <img
            src={imageToZoom.src}
            className="zoomed-image"
            onClick={() => setImageToZoom(null)}
          />
        </div>
      ) : null}
      <div
        className="images-container"
        style={{ maxWidth: `${imagesMaxWidth}px` }}
        ref={scrollRef}
        onScroll={processScrollChange}
      >
        {images.map((img) => (
          <img
            key={img}
            alt="Project-Image"
            src={img}
            onClick={(e) => setImageToZoom(e.target)}
          />
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
