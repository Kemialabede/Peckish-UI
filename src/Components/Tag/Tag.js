import React from 'react';
import './Tag.css'
import Cancel from '../../Assets/mainicons/Cancel.svg'

function Tag(props) {
    const { tagname, tag, showCancel, active, disabled } = props;
    // switch(tag){
    //     case "tags":
    //         className = "tags"
    //         break;
    //     case "tags-two":
    //         className =" tags-two"
    //         break;
    //     case "tags-three":
    //         className = "tags tags-three"
    //         break;
    //     case "addcolor":
    //         className = "tags addcolor"
    //         break;
    //     case "addcolortwo":
    //         className = "tags-two addcolor"
    //         default:
    // }
    
    const className = `tags ${active ? 'tagsActive' : ''} ${disabled ? 'tagsDisabled' : ''}`
   
    return (
        <div className="input-cont" >
            <button className={className}>
                {tagname}
                <span className= "cancel">{showCancel}</span>
            </button>
        </div>
    )
}

export default Tag;
