import React from 'react';
import greenlogo from '../../Assets/mainicons/peckishgreen.png';
import iconadd from '../../Assets/mainicons/icon.add.svg'
import './SelectContent.css'
import { NavLink, Link } from 'react-router-dom'


function SelectContent(props) {
    return (
        <div>
        <div className="content">
            <div className="home-populated">
                <img src={greenlogo} className="peckish-green-logo"/>
                <div className="filter-content">
                    <Link to ="/filter/page" className="filter-link"><h5>FILTER</h5></Link>
                    <Link to = "/restaurant"><img src={iconadd} className="add"/></Link>
                </div>
            </div>
            <div className="home-details">
                <p className="home-inner-content">All({props.num})</p>
                <p className="home-inner-content">Wish list({props.numtwo})</p>
                <p className="home-inner-content">Visited({props.numthree})</p>
                </div>
        </div>
        </div>
    )
}

export default SelectContent;
