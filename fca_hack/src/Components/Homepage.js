import React from 'react';
import Header from './Header';
import './Homepage.css';
import { Link } from 'react-router-dom';

const Homepage = () => {
    return(
        <div className="homepageContainer"> 
            <div className="homepageNavBar"><Header/></div>
            <div className="homepageTitle" >Welcome</div>
            <div className="homepageContent">
                <p>Welcome to our app, here you can find help, start to plan your journey and also start to build an identity</p>
                <button><h3>Find out more</h3></button><br/>
                <button><h3>Find help locally</h3></button>
                <Link to='/yourID'><button ><h3>Build an identity</h3></button></Link>
            </div>
        </div>
    )
}

export default Homepage 