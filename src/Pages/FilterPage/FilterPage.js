import React from 'react';
import DetailsHeader from '../../Components/BackHeader/BackHeader';
import showRestaurant from '../../Components/showRestaurant/showRestaurant';
import Tag from '../../Components/Tag/Tag';
import Button from '../../Components/Button/Button';
import Money from '../../Assets/mainicons/money.svg'
import './FilterPage.css'


function FilterPage() {
    return (
        <div>
           <DetailsHeader text="Back to list" detailed="header-content"/>
           <div className="filter-overallcontent">
           <div className="filter-pagecontent">
               <p className="filter-header">Filters</p>
               <p className="clear">CLEAR<br />ALL</p>
           </div>
           <showRestaurant tagtext="Open now" tagcontent="Only show restaurants that are currently open"/>
           <br />
           <showRestaurant tagtext="Personal Tags" tagcontent="Show restaurants with the selected tags: "/>
           <h6 className="personal-tag-header">Personal tags</h6>
            <div>
                <p className="tags-header">Pricing</p>
                <div className="tags-content">
                    <Tag tag="tags-three" tagname="$" disabled />
                    <Tag tag="tags-three" tagname="$$" disabled />
                    <Tag tag="tags-three" tagname="$$$" disabled />
                    <Tag tag="tags-three" tagname="$$$$" disabled/>
                    <Tag tag="tags-three" image={<img src={Money} />} disabled/>
                </div>
            </div>
            <div>
                <p className="tags-header">Cuisine</p>
                <div className="tags-content-two">
                    <Tag tag="tags-three" tagname="French" />
                    <Tag tag="tags-three" tagname="Canadian" />
                    <Tag tag="tags-three" tagname="Indian" />
                    <Tag tag="tags-three" tagname="Vegan" />
                </div>
            </div>
            <div>
                <p className="tags-header">Ambience</p>
                <div className="tags-content-three">
                    <Tag tag="tags-three" tagname="Loud" />
                    <Tag tag="tags-three" tagname="Fancy" />
                    <Tag tag="tags-three" tagname="Family friendly" />
                </div>
            </div>
            <div>
                <p className="tags-header">Misc</p>
                <div className="tags-content-four">
                    <Tag tag="tags-three" tagname="Cheap wine" />
                    <Tag tag="tags-three" tagname="Dog friendly" />
                </div>
            </div>
            <div className="apply-filters">
            <Button content="save-button" name="APPLY FILTERS"/>
            </div>
        </div>
        </div>
    )
}

export default FilterPage;
