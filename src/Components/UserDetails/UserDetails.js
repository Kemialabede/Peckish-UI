import React from 'react';
import star from '../../Assets/mainicons/star.svg'
import faintstar from '../../Assets/mainicons/faintstar.png'
import wishlistresturant from '../../Assets/mainicons/wishlistrestaurant.svg'
import setvisited from '../../Assets/mainicons/setvisited.svg'
import './UserDetails.css'

function UserDetails(props) {
    const { contentname, captionnum, value, image } = props
    return (
        <div className="overall-content">
            <div className="sub-content">
                <div>
                    <h6>{contentname}</h6>
                    <div className="content-info">
                        <span>
                            4.0
                     <img src={star} />
                            <img src={star} />
                            <img src={star} />
                            <img src={star} />
                            <img src={faintstar} />
                            {captionnum}
                        </span>
                        <p>{value}</p>
                        <div className="sub-inner-content">
                            <span className="open">Open </span>
                            <span className="close">• Closes 11 PM</span>
                        </div>
                    </div>
                </div>
                <div>{image}</div>
            </div>
        </div>
    )
}

export default UserDetails;
