import React from 'react';
import './Note.css'
import Button from '../Button/Button';

function Note() {
    return (
        <div className="note-overall-content">
            <h1 className="note-header">Notes</h1>
            <p className="note-paragraph">Farm fresh food excellently prepared. We usually go<br /> for brunch and love the Union salad. Have not been<br /> for dinner yet. You cannot beat the quality of this<br /> place.</p>
            <p className="date">8 days ago</p>
            <div>
                <textarea className="note-input" placeholder= "Save your own personal review or notes about this restaurant..." ></textarea>
            </div>
            <Button className="save-button" name="SAVE NOTE"/>
        </div>
    )
}

export default Note;
