import React from 'react';
import './StarWars.css';
import rebelLogo from './img/rebelLogo.png';
import empireLogo from './img/empireLogo.png';

function SWHeader() {
    return(
        <div className="Header">
            <img src={rebelLogo} alt="rebel-logo" className="logo" />
            <h1>React Wars</h1>
            <img src={empireLogo} alt="empire-logo" className="logo" />
        </div>
    )
}

export default SWHeader;