import CloseIcon from "@/assets/icons/close-icon.svg"
import { useState, useEffect, memo } from "react";
import './index.css'

const ZoomImage = memo(function ZoomImage({imageToZoom, setImageToZoom}) {
    const [showHideAnimation, setShowHideAnimation] = useState(false)

    function minimizeImage(){
        setShowHideAnimation(true)
        setTimeout(
          () => {
            setImageToZoom(null)
            setShowHideAnimation(false)
            //show again the scroll to top button
            const buttonGoTop = document.getElementById('button-scroll-top')
            buttonGoTop? buttonGoTop.style.display = 'block': null
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

            //hide the scroll to top button to avoid it to be shown over the maximized image
            const buttonGoTop = document.getElementById('button-scroll-top')
            buttonGoTop? buttonGoTop.style.display = 'none': null
        }
    }, [imageToZoom]);
    
    return ( 
        imageToZoom ? (
            <div className="zoomed-image-container">
                <button className = "close-zoomed-image-button" onClick={minimizeImage}>
                    <img 
                      className = {showHideAnimation?'hide-animation':null} 
                      src = {CloseIcon.src} 
                      alt = "Close Icon" 
                      width={24} 
                      height={24}
                      />
                </button>
              <img
                src={imageToZoom.src}
                className = {`zoomed-image ${showHideAnimation?'hide':''}`}
                onClick={minimizeImage}
                alt = 'Zoomed Image'
                width={1000}
                height={700}
              />
            </div>
          ) : null
     );
})

export default ZoomImage
