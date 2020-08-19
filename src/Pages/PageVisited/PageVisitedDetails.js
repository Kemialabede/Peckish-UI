import React from 'react';
import DetailsHeader from '../../Components/BackHeader/BackHeader';
import UserContent from '../../Components/UserContent/UserContent';
import Details from '../../Components/Details/Details';
import RestaurantTags from '../../Components/RestaurantTags/RestaurantTags';
import Note from '../../Components/Note/Note';
import Photo from '../../Components/Photo/Photo';
import Button from '../../Components/Button/Button';
import './PageVisited.css'
import Wishlist from '../../Assets/mainicons/wishlistrestaurant.svg'

function PageVisited() {
    return (
        <div>
            <DetailsHeader text="Back to list" detailed="header-content"/>
            <UserContent label="Union" value="$$ . 35m" image={<img src={Wishlist} />}/>
            <div className="detail-btn">
            <Button name="I'VE BEEN THERE" content="visited-button"/>
            </div>
            <Details address="72 Ossington Ave. Toronto, ON M6J 2Y7" workinghours="Open • Closes 10 PM" phonedetails="(416) 850 0093" web="union72.ca"/>
            <RestaurantTags />
            <Note />
            <div className="visited-photo">
            <Photo />
            </div>

        </div>
    )
}

export default PageVisited;
