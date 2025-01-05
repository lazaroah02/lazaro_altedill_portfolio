import CloseIcon from "@/assets/icons/close-icon.svg"
import { useState } from "react";
import './index.css'

export function ZoomImage({imageToZoom, setImageToZoom}) {
    const [showHideAnimation, setShowHideAnimation] = useState(false)

    function minimizeImage(){
        setShowHideAnimation(true)
        setTimeout(
          () => {
            setImageToZoom(null)
            setShowHideAnimation(false)
        }, 
          250 //sincronize with the animation duration of .hide class in ./index.css - 50
        )
      }
    
    return ( 
        imageToZoom ? (
            <div className="zoomed-image-container">
                <button className = "close-zoomed-image-button" onClick={minimizeImage}>
                    <img className = {showHideAnimation?'hide-animation':null} src = {CloseIcon.src} alt = "Close Icon"/>
                </button>
              <img
                src={imageToZoom.src}
                className = {`zoomed-image ${showHideAnimation?'hide':''}`}
                onClick={minimizeImage}
              />
            </div>
          ) : null
     );
}

