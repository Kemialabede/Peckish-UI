import React from 'react';
import { MdLocationOn } from "react-icons/md";
import { BsClock } from "react-icons/bs";
import { MdPhone } from "react-icons/md";
import { GiWorld } from "react-icons/gi";
import './Details.css'


function Details(props) {
    const { address, workinghours, phonedetails, web } = props
    return (
        <div className="detail-top">
        <div className="details-overall">
            <div className="detail-content">
                <MdLocationOn />
                <p className="details-text">{address}</p>
            </div>
            <div className="detail-content">
                <BsClock/>
                <p className="details-text">{workinghours}</p>
            </div>
            <div className="detail-content">
                <MdPhone />
                <p className="details-text">{phonedetails}</p>
            </div>
            <div className="detail-content-two">
                <GiWorld />
                <p className="details-text">{web}</p>
            </div>

            </div>
            <div className="detail-bottom"> 
            </div>
           
        </div>
    )
}

export default Details;
