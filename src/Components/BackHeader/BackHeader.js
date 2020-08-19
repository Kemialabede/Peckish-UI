import React from 'react';
import { BsArrowLeftShort } from "react-icons/bs";
import './BackHeader.css'

function DetailsHeader(props) {
    const { text, detailed } = props
    let details;
    switch(detailed){
        case "header-content":
            details = "header-content"
            break;
        case "header-none":
            details = "header-none"
            break
    }
    return (
        <div className= {details}>
            <div className="header-details">
                <BsArrowLeftShort className="left-arrow" />
                <p className="header-text">{text}</p>
            </div>
        </div>
    )
}

export default DetailsHeader;
