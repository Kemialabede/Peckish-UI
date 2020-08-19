import React from 'react';
import image from '../../Assets/images/image.svg'
import vector from '../../Assets/mainicons/Vector.svg'
import './AddResturant.css'
import Button from '../../Components/Button/Button';

function AddResturant() {
    return (
        <div>
            <div className="home-first-section">
                <div>
                <img src={image} className="home-image"/>
                </div>
                <br />
                <div>
                 <img src={vector} className="vector"/>
                 <h2 className="home-text">There are no<br />resturants on<br/>your list.</h2>
                 <Button name="ADD A RESTURANT" className='button-two'/>
                </div>
            </div>
        </div>
    )
}

export default AddResturant;
