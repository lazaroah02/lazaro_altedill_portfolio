import {useNavigateItems} from '../../customHooks/useNavigateItems'
import {useRef, useState} from 'react';
import './index.css'

function ImagesSlider({images, imagesMaxWidth = 600}) {
    const scrollRef = useRef()
    const [lastScrollYValue, setLastScrollYValue] = useState(0)
    const {contador, updateCont, processScrollChange} = useNavigateItems(scrollRef)
    const [lastContadorBeforFullScreen, setLastContadorBeforeFullScreen] = useState(0) 

    function fullScreen(image) {
        image.style.cursor = 'zoom-out'
        if (document.fullscreenElement) {
            document.exitFullscreen();
            setTimeout(() => updateCont(lastContadorBeforFullScreen), 200)
            setTimeout(() =>  {
                window.scrollTo(0, lastScrollYValue)
            }, 100);
        } else {
          image.requestFullscreen();
        }
      }

    return ( 
        <div className = "slider-container">
            <div className = "images-container" style = {{maxWidth:`${imagesMaxWidth}px`}} ref = {scrollRef} onScroll = {processScrollChange}>
                {images.map((img) => <img onClick={(e) => {
                    console.log(contador)
                    setLastScrollYValue(window.scrollY)
                    setLastContadorBeforeFullScreen(contador)
                    fullScreen(e.target)
                    }} key = {img} alt = "Project-Image" src = {img}/>)}
            </div>
            <div className = "images-navigator">
                {images.map((img, index) => 
                    <div 
                        key = {index + "point"} 
                        className = {contador === index?"images-navigator-point point-active":"images-navigator-point"} 
                        onClick={() => updateCont(index)}>
                    </div>)}
            </div>
        </div>
     );
}

export default ImagesSlider;