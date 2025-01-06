import CloseIcon from "@/assets/icons/close-icon.svg"
import { useState, useEffect } from "react";
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
    
    useEffect(() => {
        // Define CSS variables to translate the image in the animation hide and grow in ./index.css
        if(imageToZoom){
            const rect = imageToZoom.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;
            const translateX = centerX - viewportWidth / 2;
            const translateY = centerY - viewportHeight / 2;

            document.documentElement.style.setProperty('--image-x', `${translateX}px`);
            document.documentElement.style.setProperty('--image-y', `${translateY}px`);
        }
    }, [imageToZoom]);
    
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
                alt = 'Zoomed Image'
              />
            </div>
          ) : null
     );
}

