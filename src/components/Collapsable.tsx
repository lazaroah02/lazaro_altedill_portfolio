import { useState, type ReactNode } from "react";
import UpArrow from '../assets/up-arrow.svg'

function Collapsable({children, height}:{children:ReactNode, height:string}) {
    const [collapsed, setCollapsed] = useState(true)
    return ( 
        <section style = {styles.container}>
            <div style = {{overflowY:"hidden", height:`${collapsed?height:'auto'}`}}>
                {children}
            </div>
            <button style = {styles.button} onClick={() => setCollapsed(!collapsed)}>
                {<img src = {UpArrow.src} alt = "Up Arrow" style = {collapsed?{rotate:"180deg"}:null}/>}
            </button>
        </section>
     );
}

export default Collapsable;

const styles = {
    container:{
        display:"flex",
        flexDirection:"column",
        gap:"20px"
    },
    button:{
        alignSelf:"center",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        cursor:"pointer"
    }
}