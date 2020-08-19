import React from 'react';
import faintstar from '../../Assets/mainicons/faintstar.png'
import setvisited from '../../Assets/mainicons/setvisited.svg'
import star from '../../Assets/mainicons/star.svg'
import './UserContent.css'
import Visited from '../../Assets/mainicons/setvisited.svg'
import Wishlist from '../../Assets/mainicons/wishlistrestaurant.svg'

function UnionContent(props) {
    const { label, captionnum, value, visit, visittext, image } = props
    let pics;
    // switch(visit){
    //     case Visited:
    //         pics = Visited
    //         break;
    //     case Wishlist:
    //         pics = Wishlist
    //         break;

    // }
    return (
        <div className="union">
            <div className="visited-content">
                <div className="first-visited-content">
                    <h1>{label}</h1>
                    <span>
                        4.0
                     <img src={star} />
                        <img src={star} />
                        <img src={star} />
                        <img src={star} />
                        <img src={faintstar} />
                        {captionnum}
                    </span>
                    <p className="value">{value}</p>
                </div>
                <div className="visited-left-image">
                    <p className="visit-text">{visittext}</p>
                    <div>
                        {image}
                    </div>
                </div>
            </div>
            <div className="visited-inner-content">
                <p>Canadian-French bistro with a weekly menu of <br /> classics-inspired fare made from local ingredients.</p>
            </div>
        </div>
    )
}

export default UnionContent;
