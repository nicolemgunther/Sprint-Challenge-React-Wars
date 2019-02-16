import React from 'react';
import './StarWars.css';
import rebelLogo from './img/rebelLogo.png';
import empireLogo from './img/empireLogo.png';

const SWHeader = props => {
    const selected = {
        opacity: 1,
        width: "60px"
    }

    return(
        <div className="Header">
            <div className="logo-container">
                <img
                    src={rebelLogo}
                    alt="rebel-logo"
                    className="logo"
                    style={props.theme.darkside ? {cursor: "pointer"} : selected}
                    onClick={()=> props.joinRebels()}
                />
            </div>
            
            <h1>React Wars</h1>

            <div className = "logo-container">
                <img
                    src={empireLogo}
                    alt="empire-logo"
                    className="logo"
                    style={props.theme.darkside ? selected : {cursor: "pointer"}}
                    onClick={()=> props.joinEmpire()}
                />
            </div>
        </div>
    )
}

export default SWHeader;