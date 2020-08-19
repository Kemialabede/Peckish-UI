import React from 'react';
import './Button.css'

function Button(props) {
    let className;
    // switch (props) {
    //     case "button":
    //         className ="button"
    //         break;
    //     case "button-two":
    //         className = "button button-two"
    //         break;
    //     case "button-three":
    //         className = "button button-three"
    //         break;
    //     case "save-button":
    //         className= "button button-three save-button"
    //         break;
    //     case "visited-button":
    //         className = "button visited-button"
    //         default:
    // }
    return (
        <div>
            <button className={`button ${props.className}`}>{props.name}</button>
        </div>
    )
}

// const Tyst = () => {
//     <Button className='save-button' />
// }

export default Button;
