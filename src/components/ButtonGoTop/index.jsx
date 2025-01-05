import {useState, useEffect} from 'react'
import './index.css'
import UpArrow from '@/assets/icons/up-arrow-black.svg'

export default function ButtonGoTop(){
    const [showButton, setShowButton] = useState(false)
    const [showHideAnimation, setShowHideAnimation] = useState(false)

    //function that focus on the start of the page
    function goTop(){
        window.scrollTo({top:0, left:0, behavior:"smooth"})
    }

    //function that detect when scroll is higher than x and show the button go top
    function showOrHideButton(){
        if(window.scrollY >= 100){
            setShowHideAnimation(false)
            setShowButton(true)
        }
        else{
            setShowHideAnimation(true)
        }
    }

    useEffect(() => {
        //first check to show the button on page reload, when still the user hasn't made any scroll
        window.scrollY >= 100? setShowButton(true): setShowButton(false)
        window.addEventListener("scroll", showOrHideButton)
        return () => {
            window.removeEventListener("scroll", showOrHideButton)
        }
    },[])

    return(showButton?
        <div>
            <button className = {`button-scroll-top ${showHideAnimation?'hide':''}`} onClick={() => goTop()}>
                <img alt = {"up arrow"} src = {UpArrow.src}/>
            </button>
        </div>:null
    )
}