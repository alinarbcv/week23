function Tarif(props){
    return(
     <div className={" tarif "+ props.class}>
        <h2>Безлимитный {props.name} </h2>
        <div className="speed">
            {props.speed} 
        </div>
        <div className="text">
        {props.text}
        </div>
        <div >
             <button className="button">{props.button}</button>
        </div>
     </div>
    );
}

export default Tarif;