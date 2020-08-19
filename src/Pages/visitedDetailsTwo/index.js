import React from 'react';
import DetailsHeader from '../../Components/BackHeader/BackHeader';
import UserContent from '../../Components/UserContent/UserContent';
import Button from '../../Components/Button/Button';
import Details from '../../Components/Details/Details';
import Photo from '../../Components/Photo/Photo';
import './visitedDetailsTwo.css'
import { NavLink, Link } from 'react-router-dom';
import Wishlist from '../../Assets/mainicons/wishlistrestaurant.svg'

function visitedDetailsTwo() {
    return (
        <div>
            <DetailsHeader text="Back to list" detailed="header-content"/>
            <UserContent label="Union" value="$$ . 35m" image = {<img src={Wishlist} />}/>
            <div className="visited-btn">
            <Link to="/details" className="wish-list-link"><Button name="SAVE ON WISHLIST" content="visited-button" /></Link>
            <Button name="I'VE BEEN THERE" content="visited-button"/>
            </div>
            <Details address="72 Ossington Ave. Toronto, ON M6J 2Y7" workinghours="Open • Closes 10 PM" phonedetails="(416) 850 0093" web="union72.ca"/>
            <Photo />
        </div>
    )
}

export default visitedDetailsTwo;
