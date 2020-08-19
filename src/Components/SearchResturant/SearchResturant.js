import React, {useState} from 'react';
import FormInput from '../FormInput/FormInput';
import './SearchResturant.css'
import Search from '../../Assets/mainicons/search.svg'
import Script from 'react-load-script';


function SearchResturant() {
    const [state, setState] = useState({
        city: '',
        query: '',
    })
    let autocomplete;
    function handleScriptLoad (){
        const options = { types: ['(cities)'] };

        //initailize autocomplete
        /* global google */
        autocomplete = new google.maps.places.Autocomplete(
            document.getElementById("autocomplete"),options );

        autocomplete.setFields(['address_components', 'formatted_address']);
        autocomplete.addListener('place_changed', handlePlaceSelect);
        function handlePlaceSelect(){

            // Extract City From Address Object
            const addressObject = autocomplete.getPlace();
            const address = addressObject.address_components;
        
            // Check if address is valid
            if (address) {
              // Set State
              setState(
                {
                  city: address[0].long_name,
                  query: addressObject.formatted_address,
                }
              );
            }
          }
    }
    const handleChange = (e) =>{
      setState({
        query: e.target.value
      })
    }
    return (
        <div>
            <Script url=  "https://maps.googleapis.com/maps/api/js?key=AIzaSyBjEJMlw0--m6d3QXmpeco9R6oOOYY4rfk&libraries=places" onLoad={handleScriptLoad}/> 
            <div className="search-resturant">
            <FormInput box="input-text" id ="autocomplete" placeholder="Search restaurants" open={Search} value={state.query} onChange={handleChange}/>
            </div>

        </div>
    )
}

export default SearchResturant;
