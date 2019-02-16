import React from 'react';
import './StarWars.css';
import SWCharacter from './SWCharacter';

const SWCardList = props =>{
    return(
        <div className="card-list">
            {props.starwarsChars.map(char => (
                <SWCharacter key={char.created} character={char} theme={props.theme}/>
            ))}
        </div>
    );
}

export default SWCardList;