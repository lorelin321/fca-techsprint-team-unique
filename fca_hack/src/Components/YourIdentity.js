import React from 'react';
import Header from './Header';
import './yourID.css';
import AddCircleIcon from '@material-ui/icons/AddCircle';


const YourID = () => {
    return(
        <div className="yourIdContainer"> 
            <div className="yourIdNavBar"><Header/></div>
            <div className="yourIdTitle" >Your Identity</div>
            <div className="yourIdContent">
                <p>Add information to start building your identity</p>
                <button><AddCircleIcon fontSize="large"/> </button>
            </div>
        </div>
    )
}

export default YourID 