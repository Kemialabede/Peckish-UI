import React from 'react';
import './FormInput.css'
import Eyes from '../../Assets/mainicons/Mask.svg'
import Search from '../../Assets/mainicons/search.svg'

function FormInput(props) {
    let finput;
    switch(props.box){
        case "input-text":
            finput = "input-text"
            break;
        case "input-password":
            finput = "input-password"
            break;
            default:
    }
    let eyes;
    switch(props.open){
        case Eyes:
            eyes = Eyes
            break;
        case Search:
            eyes = Search
            break;
            default:
    }
    return (
        <div className="form">
            <input type="text" placeholder={props.placeholder} className= {finput} value={props.value} onChange={props.onChange} id={props.id}/>
            <img src={eyes} className="eyes"/>
        </div>
    )
}

export default FormInput;
