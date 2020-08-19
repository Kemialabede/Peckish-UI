import React from 'react';
import DetailsHeader from '../../Components/BackHeader/BackHeader';
import UserContent from '../../Components/UserContent/UserContent';
import Details from '../../Components/Details/Details';
import Note from '../../Components/Note/Note';
import Photo from '../../Components/Photo/Photo';
import Visited from '../../Assets/mainicons/setvisited.svg'
import './UserPage.css'
import RestaurantTags from '../../Components/RestaurantTags/RestaurantTags';

function UserPage() {
    return (
        <div>
            <DetailsHeader text="Back to list" detailed="header-content"/>
            <UserContent label="Union" value="$$ • 350 m " image={<img src={Visited} />} visittext="Visited"/>
            <Details address="72 Ossington Ave. Toronto, ON M6J 2Y7" workinghours="Open • Closes 10 PM" phonedetails="(416) 850 0093" web="union72.ca" />
            <RestaurantTags />
            <Note />
            <div className="visited-photo">
                <Photo />
            </div>

        </div>
    )
}

export default UserPage;
