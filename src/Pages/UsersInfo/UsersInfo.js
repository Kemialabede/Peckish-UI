import React from 'react';
import SelectContent from '../../Components/SelectContent/SelectContent';
import UserDetails from '../../Components/UserDetails/UserDetails';
import setvisited from '../../Assets/mainicons/setvisited.svg'
import wishlistresturant from '../../Assets/mainicons/wishlistrestaurant.svg'
import './UsersInfo.css'
import { NavLink, Link } from 'react-router-dom'

function UsersInfo() {
    return (
        <div>
            <SelectContent num="2" numtwo="2" numthree="0" />
            <Link to="/user/page" className="link">
                <UserDetails contentname="Union" captionnum="(849)" value="$$ . 350m" image={<img src={setvisited} />} />
            </Link>
                <UserDetails contentname="Alo" captionnum="(849)" value="$$$$ . 340m" image={<img src={wishlistresturant} />} />
        </div>
    )
}

export default UsersInfo;
