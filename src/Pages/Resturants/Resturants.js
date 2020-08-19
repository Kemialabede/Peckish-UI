import React from 'react';
import DetailsHeader from '../../Components/BackHeader/BackHeader';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import SearchResturant from '../../Components/SearchResturant/SearchResturant'
import AddUserResturant from '../../Components/AddUserRestaurant/AddUserRestaurant'
import './Resturants.css'

function Resturants() {
    return (
        <HashRouter>
            <div>
                <DetailsHeader text="Back to list" detailed="header-none" />
                <div>
                    <div className="restaurant-link">
                        <NavLink to="/search" className="search"  activeStyle={{
                            borderBottom: "solid 4px #31D283",
                            // width: "100px",
                            fontWeight: "bold", color: "black",
                            textDecoration: "none"
                        }}>Add one restaurant</NavLink>
                        <NavLink to="/add/restaurant" className="addrestaurant" activeStyle={{
                            borderBottom: "solid 4px #31D283",
                            // width: "100px",
                            fontWeight: "bold", color: "black",
                            textDecoration: "none"
                        }}>Add a group of restaurants</NavLink>
                    </div>
                    <div>
                        <Route path="/search" component={SearchResturant} />
                        <Route path="/add/restaurant" component={AddUserResturant} />
                    </div>
                </div>
            </div>
        </HashRouter>
    )
}

export default Resturants;
