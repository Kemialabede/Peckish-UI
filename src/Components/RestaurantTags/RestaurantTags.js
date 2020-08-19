import React from 'react';
import Tag from '../Tag/Tag';
import './RestaurantTags.css'
import Button from '../Button/Button';
import Cancel from '../../Assets/mainicons/Cancel.svg'
import Money from '../../Assets/mainicons/money.svg'
import { NavLink, Link } from 'react-router-dom'

const DisplayTags = ({label, tags = [{}]}) => {
    return(
        <div>
            <p className="tags-header">{label}</p>
            <div className="tags-content">
                            <div className="tag-info">
                                {tags.map(tag => (
                                    <Tag tagname={tag.content}  active={tag.isActive}/>
                                ))}
                            </div>
                        </div>
        </div>
    )
}

function RestaurantTags() {
    return (
        <div className="tags-overall">
            <h6 className="personal-tag-header">Personal tags</h6>
            <DisplayTags label='Pricing' tags={[{ content: '$', isActive: true }, { content: '$$', isActive: false }, { content: '$$$', isActive: false },{ content: <img src={Money} />, isActive: false } ]} />
            <DisplayTags label='Cuisine' tags={[{content:'French', isActive: true},  {content: 'Canadian', isActive: false}, {content: 'Indian', isActive: false }, {content: 'Vegan', isActive: false} ]} />
            <DisplayTags label='Ambience' tags={[{content:'Loud', isActive: true}, {content: 'Fancy', isActive: true},  {content:'Family friendly', isActive: false}]} />
            <DisplayTags label='Misc' tags={[{content: 'Cheap wine', isActive: true}, {content:'Dog friendly', isActive: false}]} />
            <Link to="/edit/tags" className="edit-tag"><Button className="button-three" name="EDIT TAGS"/></Link>
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}

export default RestaurantTags;
