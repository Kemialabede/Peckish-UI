import React from 'react';
import photo from '../../Assets/images/photo.svg';
import './Photo.css'

function Photo() {
    return (
        <div className="photo-content">
            <h1 className="photo-header">Photos</h1>
            <img src={photo} className="photo-image"/>
        </div>
    )
}

export default Photo;
