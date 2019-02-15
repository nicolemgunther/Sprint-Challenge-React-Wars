import React from 'react';
import './StarWars.css'

const SWCharacter = props => {
    return (
        <div className="character-card">
            <h3>{props.character.name}</h3>

            <li>
                <strong>Born:</strong> {props.character.birth_year}
            </li>

            <li>
                <strong>Gender:</strong> {props.character.gender}
            </li>

            <li>
                <strong>Height:</strong> {props.character.height}
            </li>

            {/* <li>
                <strong>Species:</strong> {props.character.species}
            </li>
            
            <li>
                <strong>Home World:</strong> {fetch(props.charcter.homeworld)}
            </li>
            
            <li>
                <strong>Films:</strong> {fetch(props.character.films)}
            </li> */}
        </div>
    );
}

export default SWCharacter;
