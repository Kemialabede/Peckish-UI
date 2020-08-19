import React from 'react';
import './Login.css'
import group from '../../Assets/mainicons/birds.svg'
import peckishlogo from '../../Assets/mainicons/logo.svg'
import bottom from '../../Assets/mainicons/bottom.svg'
import vector from '../../Assets/mainicons/Vector.svg'
import red from '../../Assets/mainicons/reddesign.svg'
import FormInput from '../../Components/FormInput/FormInput';
import Button from '../../Components/Button/Button';
import Eyes from '../../Assets/mainicons/Mask.svg';
import { NavLink, Link } from 'react-router-dom'

function Login() {
    return (
        <div className="login-content">
        <div className="background">
            <div className="first-section">
                <div>
                    <img src={peckishlogo} className="peckish-logo"/>
                    <div className="first-section-content">
                        <p>Keep track of the resturants<br />you've been to, and the ones you<br />want to go to.</p>
                    </div>
                </div>
                <div>
                    <img src={group} className="group"/>
                </div>   
            </div>
            <div className="second-section">
                <img src={vector} className="wavy-image"/>
            <div className="login-form">
                <FormInput placeholder="Email" box= "input-text"/>
                    <FormInput placeholder="Password" box="input-password" open={Eyes}/>
                   <Link to="/homecontenttwo" className="signin-link"><Button name="SIGN IN" content="button"/></Link>
             </div>
             </div>
             <br />
             <div className="third-section">
                <img src={bottom} className="bottom-image"/>
                <img src={red} className="red" />
             </div>
          
        </div>
        
        </div>
    )
}

export default Login;
