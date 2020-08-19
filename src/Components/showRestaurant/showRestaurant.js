import React from 'react';
import './showRestaurant.css'
import Enabled from '../../Assets/mainicons/Enabled.png'

function showRestaurant(props) {
    return (
        <div className="tagbutton-content">
            <div className="tagbutton-inner-content">
                <p className="tagbutton-header">{props.tagtext}</p>
                <p className="tagcontent">{props.tagcontent}</p>
            </div>
            <img src={Enabled} className="enabled"/>
        </div>
    )
}

export default showRestaurant;
