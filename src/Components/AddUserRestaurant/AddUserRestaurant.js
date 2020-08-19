import React from 'react';
import emailtous from '../../Assets/images/emailtous.svg'
import './AddUserRestaurant.css'

function AddUserRestaurant() {
    return (
        <div>
            <div className="add-restaurant">
                <img src= {emailtous} className="emailus"/>
                <div className="add-restaurant-content">
                    <div className="restaurant-border">
                    <h3 className="add-restaurant-header">We’ll take<br /> care of it.</h3>
                    <p className="add-restaurant-one">Send up your list, website screenshots, blog<br />articles, Google map tags, or even a photo of<br />your personal restaurant list. We'll do the<br />heavy lifting to put it on Peckish for you.</p>
                    <p className="add-restaurant-two">Send whatever you've got to<br /><span className="team-email">team@peckish.co</span></p>
                    </div>
                </div>
            </div>
            <br />
        </div>
    )
}

export default AddUserRestaurant;
