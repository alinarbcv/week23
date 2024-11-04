import { useState } from "react";

function Tarif(props){
    const [selected, setSelected]= useState(false);
    const handleSelected = () =>{
        setSelected(!selected)
    }
    return(
     <div className={`tarif ${props.class} ${selected ? "selected" : ""}`} >
        <h2>Безлимитный {props.name} </h2>
        <div className="speed">
            {props.speed} 
        </div>
        <div className="text">
        {props.text}
        </div>
        <div >
             <button className="button" onClick={handleSelected}>{props.button}</button>
        </div>
     </div>
    );
}

export default Tarif;