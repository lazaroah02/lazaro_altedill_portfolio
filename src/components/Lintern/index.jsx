import { useState, useEffect, useRef } from 'react';
import './index.css';
import { isMobile } from '@/utils/isMobile';

export function Lintern() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [stopLintern, setStopLintern] = useState(true);
    const requestRef = useRef();
    const linternRef = useRef();
    const linternWidth = 60;
    const linternHeight = 60;

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        setMousePosition({ x: clientX, y: clientY });
        stopLintern && setStopLintern(false);
    };

    const handleStopAnimation = () => {
        cancelAnimationFrame(requestRef.current);
        setStopLintern(true)
    }

    const handleStartAnimation = () => {
        setStopLintern(false)
    }

    const animateLintern = () => {
        if (stopLintern === false) {
            linternRef.current.style.transform = `
                translate(
                    ${mousePosition.x - linternWidth / 2}px, 
                    ${mousePosition.y + window.scrollY - (window.innerHeight/2) - linternHeight / 2}px
                )
            `;
            requestRef.current = requestAnimationFrame(animateLintern);
        }
    };

    useEffect(() => {
        if(isMobile() === false){
            const homePageReference = document.getElementById('home');
            homePageReference.addEventListener('mousemove', handleMouseMove);
            homePageReference.addEventListener('mouseleave', handleStopAnimation);
            homePageReference.addEventListener('mouseenter', handleStartAnimation);
            requestRef.current = requestAnimationFrame(animateLintern);
            return () => {
                homePageReference.removeEventListener('mousemove', handleMouseMove);
                homePageReference.removeEventListener('mouseleave', handleStopAnimation);
                homePageReference.removeEventListener('mouseenter', handleStartAnimation);
                cancelAnimationFrame(requestRef.current);
            };
        }
    }, [mousePosition]);

    return stopLintern?null: <div ref={linternRef} className="lintern" />;
}
