import React from 'react';
import DetailsHeader from '../../Components/BackHeader/BackHeader';
import './EditTags.css'
import Tag from '../../Components/Tag/Tag';
import Cancel from '../../Assets/mainicons/Cancel.svg'
import Button from '../../Components/Button/Button';
import Money from '../../Assets/mainicons/money.svg'
import { NavLink, Link } from 'react-router-dom';

const EditTags = ({ label, tags = [] }) => {
    return (
        <div className="edit-content">
            <p className="tags-header">{label}</p>
            <div className="edit">
                <div className="edit-row">
                    {tags.map(tag => (
                        <Tag tagname={tag.content} showCancel={tag.show} />
                    ))}
                </div>
            </div>
        </div>
    )
}


function PersonalTagsTwo() {
    return (
        <div>
            <DetailsHeader text="Back to restaurant" detailed="header-content" />
            <div className="edit-tags-content">
                <div className="edit-header">
                    <h6 className="personal-tag-header">Personal tags</h6>
                    <EditTags label='Pricing' tags={[{ content: '$', show: <img src={Cancel} className="icon-image" /> }, { content: '$$', show: <img src={Cancel} className="icon-image" /> }, { content: '$$$', show: <img src={Cancel} className="icon-image" /> }, { content: '$$$$', show: <img src={Cancel} className="icon-image" /> }, { content: <img src={Money} />, show: <img src={Cancel} className="icon-image" /> }]} />
                    <EditTags label='Cuisine' tags={[{ content: 'French', show: <img src={Cancel} className="icon-image" /> }, { content: 'Canadian', show: <img src={Cancel} className="icon-image" /> }, { content: 'Indian', show: <img src={Cancel} className="icon-image" /> }, { content: 'Vegan', show: <img src={Cancel} className="icon-image" /> }, { content: 'Colombian', show: <img src={Cancel} className="icon-image" /> }]} />
                    <EditTags label='Ambience' tags={[{ content: 'Loud', show: <img src={Cancel} className="icon-image" /> }, { content: 'Fancy', show: <img src={Cancel} className="icon-image" /> }, { content: 'Family friendly', show: <img src={Cancel} className="icon-image" /> }, { content: 'Cozy', show: <img src={Cancel} className="icon-image" /> }]} />
                    <EditTags label='Misc' tags={[{content:'Cheap wine', show: <img src= {Cancel} className="icon-image" />}, {content: 'Dog friendly', show: <img src= {Cancel} className="icon-image" />}]} />
                    <Link to="/visited/details/two"><Button className="save-button" name="SAVE CHANGES" /></Link>
                </div>
            </div>
        </div>
    )
}

export default PersonalTagsTwo;
