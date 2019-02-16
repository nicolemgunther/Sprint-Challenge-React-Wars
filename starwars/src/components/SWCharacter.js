import React from 'react';
import './StarWars.css'

const SWCharacter = props => {

    const rebel = {
        backgroundColor: "white",
        color: "black",
        boxShadow: "inset 0 0 15px 5px lightgrey"
    }
    
    const empire = {
        backgroundColor: "black",
        color: "white",
        boxShadow: "inset 0 0 15px 5px darkslategrey"
    }

    return (
        <div className= {`character-card ${props.cardStyles}`}
            style={props.theme.darkside ? empire : rebel}
        >
            <h3>{props.character.name}</h3>

            <li><strong>Born:</strong> {props.character.birth_year}</li>

            <li><strong>Gender:</strong> {props.character.gender}</li>

            <li><strong>Height:</strong> {props.character.height}cm</li>

            <li><strong>Mass:</strong> {props.character.mass}kg</li>
            
            <li><strong>Hair Color:</strong> {props.character.hair_color}</li>
            
            <li><strong>Skin Color:</strong> {props.character.skin_color}</li>

            <li><strong>Eye Color:</strong> {props.character.eye_color}</li>
        </div>
    );
}

export default SWCharacter;
