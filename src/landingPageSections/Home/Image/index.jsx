import MyImage from '@/assets/my-image-homepage.webp'
import './index.css'
import { useEffect, useState } from 'react';

export function HomePageImage() {
    const [mousePosition, setMousePosition] = useState({x:0, y:0})
    
    useEffect(() => {
        const homePageReference = document.getElementById('home')
        homePageReference.addEventListener('mousemove', (e) => {
            setMousePosition({x:e.clientX, y:e.clientY})
        })
        animateLuminousEffect()
    },[])

    function animateLuminousEffect(){
        window.requestAnimationFrame(animateLuminousEffect)
    }

    return ( 
        <section className = "hompage-image-container">
            <img className = "my-homepage-image" src = {MyImage.src}/>
            <div className = "luminous-effect"></div>
        </section>
     );
}

