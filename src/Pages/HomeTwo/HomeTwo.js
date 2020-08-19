import React from 'react';
import SelectContent from '../../Components/SelectContent/SelectContent';
import './HomeTwo.css'

function HomeTwo() {
    return (
        <div>
            <div>
            <SelectContent num = "0" numtwo="0" numthree = "0"/>
            </div>
            <div className="content-area">
                <p>No results</p>
            </div>
        </div>
    )
}

export default HomeTwo;
